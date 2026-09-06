# Changelog

## 1.1.0 — 2026-09-06
- 51 icônes de plus (368 au total) couvrant le vocabulaire d'une app d'emploi du temps :
  18 dessins inédits (`timeline`, `day-review`, `week-review`, `planned-actual`, `overlap`,
  `finish-early`, `life-season`, `time-budget`, `time-reserved`, `time-flexible`, `time-free`,
  `collapse`, `categories`, `admin`, `sport`, `meal`, `health`, `break`) et 33 alias
  (`add`, `delete`, `done`, `back`, `next`, `work`, `sleep`, `morning`…) qui pointent sur un
  glyphe existant tout en produisant un vrai SVG, composant et codepoint.
- Nouvelles catégories `planning` et `life`.
- 10ᵉ style : `duotone-standard`.
- Sprites SVG par style dans `sprites/` (`<use href="…#nom">`).
- `tokens.json` : grille, épaisseurs, opacités et profils de tracé.
- Codepoints figés dans `tools/codepoints.json` — ajouter une icône ne renumérote plus les polices.
- `packages/flutter/veraicons/lib/src/vera_icon.dart` et `pubspec.yaml` sont désormais générés.
- `tools/export_png.py` : export PNG optionnel (non versionné).

## 1.0.0 — 2026-09-06
- Première version : 317 icônes, 9 styles (stroke/solid × rounded/sharp/standard, duotone, twotone, bulk).
- Package Flutter (6 polices + IconData, widget VeraIcon.tone).
- Package React (composants TSX, prop `variant`).
- Web : polices WOFF2 + CSS, SVG servis via jsDelivr.
