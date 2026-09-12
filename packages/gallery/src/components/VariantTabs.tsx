import type { Variant } from '../generated'

const LABELS: Record<string, string> = {
  'stroke-rounded': 'stroke',
  'stroke-sharp': 'stroke vif',
  'stroke-standard': 'stroke standard',
  'solid-rounded': 'solid',
  'solid-sharp': 'solid vif',
  'solid-standard': 'solid standard',
  'duotone-rounded': 'duotone',
  'duotone-standard': 'duotone standard',
  'twotone-rounded': 'twotone',
  'bulk-rounded': 'bulk',
}

export interface VariantTabsProps {
  variants: readonly Variant[]
  value: Variant
  onChange: (v: Variant) => void
}

export function VariantTabs({ variants, value, onChange }: VariantTabsProps) {
  return (
    <div className="vig-tabs" role="group" aria-label="Style">
      {variants.map((v) => (
        <button
          key={v}
          type="button"
          aria-pressed={v === value}
          onClick={() => onChange(v)}
          title={v}
        >
          {LABELS[v] ?? v}
        </button>
      ))}
    </div>
  )
}
