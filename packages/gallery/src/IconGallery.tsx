import { useId, useMemo, useState } from 'react'
import { CATEGORIES, ICONS, ICON_NAMES, VARIANTS, VERSION, type Variant } from './generated'
import { useSprite } from './useSprite'
import { IconTile } from './components/IconTile'
import { VariantTabs } from './components/VariantTabs'
import { IconPanel } from './components/IconPanel'
import './gallery.css'

/** Sprites servis par jsDelivr, figés sur la version du paquet. */
export const CDN_SPRITE_BASE = `https://cdn.jsdelivr.net/gh/Veraup-Inc/veraicons@v${VERSION}/sprites`

export interface IconGalleryProps {
  /**
   * Où chercher les sprites SVG. Par défaut le CDN jsDelivr, figé sur la
   * version — le composant fonctionne donc sans rien servir soi-même. Le site
   * du dépôt passe `./sprites` pour rester autonome.
   */
  spriteBase?: string
  /** Style affiché à l'ouverture. */
  defaultVariant?: Variant
  /** Masque le titre et le compteur quand la page hôte a déjà les siens. */
  hideHeader?: boolean
  /** Remplace le panneau de détails par votre propre traitement du clic. */
  onSelect?: (name: string, variant: Variant) => void
  className?: string
}

/** Libellé lisible d'une catégorie, indexé par sa clé technique. */
const CATEGORY_LABEL = new Map(CATEGORIES.map((c) => [c.key, c.label.toLowerCase()]))

function matches(name: string, query: string) {
  if (!query) return true
  const meta = ICONS[name]
  if (name.includes(query)) return true
  if (meta?.alias?.includes(query)) return true
  // On compare le libellé, pas la clé : chercher « time » ne doit pas remonter
  // les 43 icônes de la catégorie `time`, alors que « temps » le doit.
  return (CATEGORY_LABEL.get(meta?.category ?? '') ?? '').includes(query)
}

export function IconGallery({
  spriteBase = CDN_SPRITE_BASE,
  defaultVariant = 'stroke-rounded',
  hideHeader = false,
  onSelect,
  className,
}: IconGalleryProps) {
  const [variant, setVariant] = useState<Variant>(defaultVariant)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<string | null>(null)
  // Préfixe unique par instance : deux catalogues sur une page ne se
  // disputent pas les identifiants injectés par le sprite.
  const prefix = `${useId().replace(/[^a-zA-Z0-9]/g, '')}-`
  const { ready, error } = useSprite(spriteBase, variant, prefix)

  const q = query.trim().toLowerCase()
  const sections = useMemo(() => {
    const hits = ICON_NAMES.filter((n) => matches(n, q))
    return CATEGORIES.map((c) => ({
      ...c,
      names: hits.filter((n) => ICONS[n]?.category === c.key),
    })).filter((s) => s.names.length > 0)
  }, [q])

  const total = sections.reduce((n, s) => n + s.names.length, 0)

  const pick = (name: string) => {
    if (onSelect) onSelect(name, variant)
    else setSelected((cur) => (cur === name ? null : name))
  }

  return (
    <div className={className ? `vig ${className}` : 'vig'} data-ready={ready || undefined}>
      <header className="vig-head">
        {hideHeader ? null : (
          <h2 className="vig-title">
            VeraUp Icons <span>{ICON_NAMES.length} icônes · {VARIANTS.length} styles · grille 24 · trait 1,5</span>
          </h2>
        )}
        <input
          className="vig-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher (home, wallet, sport, timeline…)"
          aria-label="Rechercher une icône"
        />
        <VariantTabs variants={VARIANTS} value={variant} onChange={setVariant} />
      </header>

      {error ? (
        <p className="vig-state vig-error" role="alert">
          Sprite « {variant} » indisponible ({error}). Vérifiez <code>spriteBase</code>.
        </p>
      ) : !ready ? (
        <p className="vig-state">Chargement du style {variant}…</p>
      ) : total === 0 ? (
        <p className="vig-state">Aucune icône pour « {query} ».</p>
      ) : (
        <main className="vig-body">
          <div className="vig-sections">
            {sections.map((s) => (
              <section key={s.key}>
                <h3 className="vig-cat">
                  {s.label} <small>{s.names.length}</small>
                </h3>
                <div className="vig-grid">
                  {s.names.map((n) => (
                    <IconTile
                      key={n}
                      name={n}
                      alias={ICONS[n]?.alias}
                      prefix={prefix}
                      selected={selected === n}
                      onSelect={pick}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
          {selected ? (
            <IconPanel name={selected} variant={variant} prefix={prefix} onClose={() => setSelected(null)} />
          ) : null}
        </main>
      )}
    </div>
  )
}
