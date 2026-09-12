import { useState } from 'react'
import { ICONS, VERSION, type Variant } from '../generated'

/** Nom de composant React : `time-budget` → `TimeBudget`. */
function pascal(name: string) {
  return name.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('')
}

/** Identifiant Dart : `time-budget` → `timeBudget`, avec les mots réservés suffixés. */
const DART_RESERVED = new Set([
  'assert', 'break', 'case', 'catch', 'class', 'const', 'continue', 'default', 'do', 'else',
  'enum', 'extends', 'false', 'final', 'finally', 'for', 'if', 'in', 'is', 'new', 'null',
  'rethrow', 'return', 'super', 'switch', 'this', 'throw', 'true', 'try', 'var', 'void',
  'while', 'with',
])
function dart(name: string) {
  const parts = name.split('-')
  const s = parts[0] + parts.slice(1).map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('')
  return DART_RESERVED.has(s) ? `${s}_` : s
}

function flutterClass(variant: Variant) {
  const mono = variant.startsWith('stroke-') || variant.startsWith('solid-')
  if (!mono) return null
  return 'VeraUp' + variant.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join('')
}

export interface IconPanelProps {
  name: string
  variant: Variant
  prefix: string
  onClose: () => void
}

export function IconPanel({ name, variant, prefix, onClose }: IconPanelProps) {
  const [copied, setCopied] = useState<string | null>(null)
  const meta = ICONS[name]
  if (!meta) return null

  const cls = flutterClass(variant)
  const snippets: Array<{ label: string; code: string }> = [
    { label: 'Nom', code: name },
    { label: 'React', code: `<${pascal(name)} variant="${variant}" size={24} />` },
    {
      label: 'Flutter',
      code: cls
        ? `Icon(${cls}.${dart(name)})`
        : `VeraIcon.tone('${name}', tone: VeraIconTone.${variant.replace('-rounded', '').replace('-standard', 'Standard')})`,
    },
    { label: 'Web (police)', code: `<i class="vi-${variant} vi-${name}"></i>` },
    {
      label: 'SVG',
      code: `https://cdn.jsdelivr.net/gh/Veraup-Inc/veraicons@v${VERSION}/svg/${variant}/${name}.svg`,
    },
  ]

  const copy = async (label: string, code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(label)
      window.setTimeout(() => setCopied(null), 1200)
    } catch {
      setCopied(null)
    }
  }

  return (
    <aside className="vig-panel" aria-label={`Détails de ${name}`}>
      <div className="vig-panel-head">
        <svg className="vig-panel-glyph" viewBox="0 0 24 24" aria-hidden="true">
          <use href={`#${prefix}${name}`} />
        </svg>
        <div>
          <h3>{name}</h3>
          <p className="vig-panel-meta">
            {meta.category} · U+{meta.codepoint.toString(16).toUpperCase()}
            {meta.alias ? ` · alias de ${meta.alias}` : ''}
          </p>
        </div>
        <button type="button" className="vig-close" onClick={onClose} aria-label="Fermer">
          ×
        </button>
      </div>
      <dl className="vig-snippets">
        {snippets.map(({ label, code }) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>
              <code>{code}</code>
              <button type="button" onClick={() => void copy(label, code)}>
                {copied === label ? 'copié' : 'copier'}
              </button>
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}
