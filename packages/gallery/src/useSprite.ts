import { useEffect, useRef, useState } from 'react'
import type { Variant } from './generated'

/** Un sprite par style, mis en cache pour toute la page. */
const cache = new Map<string, string>()

export interface SpriteState {
  ready: boolean
  error: string | null
}

/**
 * Charge le sprite d'un style et l'injecte dans le document.
 *
 * Le catalogue n'affiche qu'un style à la fois. Embarquer les 554 icônes dans
 * les 10 styles pèserait plus de 4 Mo de JavaScript ; on va plutôt chercher le
 * sprite du style courant (~300 Ko), que le navigateur garde ensuite en cache.
 *
 * Les identifiants sont préfixés à l'injection. Sans ça, deux catalogues sur la
 * même page — ou deux styles chargés en même temps — se disputeraient les mêmes
 * `id` et afficheraient le mauvais dessin.
 */
export function useSprite(base: string, variant: Variant, prefix: string): SpriteState {
  const [state, setState] = useState<SpriteState>({ ready: false, error: null })
  const hostRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let cancelled = false
    const url = `${base.replace(/\/+$/, '')}/${variant}.svg`

    const inject = (text: string) => {
      if (cancelled) return
      let host = hostRef.current
      if (!host) {
        host = document.createElement('div')
        host.setAttribute('aria-hidden', 'true')
        host.style.display = 'none'
        document.body.appendChild(host)
        hostRef.current = host
      }
      host.innerHTML = text.replace(/\bid="/g, `id="${prefix}`)
      setState({ ready: true, error: null })
    }

    const hit = cache.get(url)
    if (hit !== undefined) {
      inject(hit)
      return () => {
        cancelled = true
      }
    }

    setState({ ready: false, error: null })
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.text()
      })
      .then((text) => {
        // Un serveur de développement peut répondre son index.html en 200 pour
        // une ressource absente. Sans ce contrôle, le catalogue croit avoir
        // chargé un sprite et affiche des cases vides, sans rien signaler.
        if (!text.trimStart().startsWith('<svg')) {
          throw new Error(`réponse non-SVG depuis ${url}`)
        }
        cache.set(url, text)
        inject(text)
      })
      .catch((e: unknown) => {
        if (!cancelled) setState({ ready: false, error: e instanceof Error ? e.message : String(e) })
      })

    return () => {
      cancelled = true
    }
  }, [base, variant, prefix])

  // L'hôte vit hors de l'arbre React : à nous de le retirer au démontage.
  useEffect(
    () => () => {
      hostRef.current?.remove()
      hostRef.current = null
    },
    [],
  )

  return state
}
