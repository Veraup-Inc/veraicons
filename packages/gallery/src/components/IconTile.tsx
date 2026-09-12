export interface IconTileProps {
  name: string
  /** Renseigné quand l'icône reprend le dessin d'un autre glyphe. */
  alias?: string
  prefix: string
  selected: boolean
  onSelect: (name: string) => void
}

export function IconTile({ name, alias, prefix, selected, onSelect }: IconTileProps) {
  return (
    <button
      type="button"
      className={selected ? 'vig-tile is-selected' : 'vig-tile'}
      onClick={() => onSelect(name)}
      aria-pressed={selected}
      title={alias ? `${name} — alias de ${alias}` : name}
    >
      <svg className="vig-glyph" viewBox="0 0 24 24" aria-hidden="true">
        <use href={`#${prefix}${name}`} />
      </svg>
      <span className="vig-tile-name">{name}</span>
      {alias ? <span className="vig-tile-alias">alias</span> : null}
    </button>
  )
}
