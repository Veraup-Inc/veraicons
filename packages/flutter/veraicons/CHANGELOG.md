# Changelog

## 1.2.0 — 2026-09-06
- 186 icônes de plus (554 au total) : le catalogue de catégories de Priovely, pour
  qu'une application n'ait plus besoin d'une seconde police d'icônes.
  - 180 dessins du catalogue, en 11 catégories neuves : `work`, `science`, `care`,
    `sport`, `household`, `food`, `bonds`, `spirit`, `hobbies`, `travel`, `paperwork`.
  - 6 dessins pour la coquille, là où il fallait jusqu'ici se rabattre sur un voisin :
    `circle-dashed` (statut vide, ≠ `circle`), `cloud-off`, `logout` (≠ `power`),
    `arrow-to-line-up` / `arrow-to-line-down` (bloc continué, ≠ `arrow-up`),
    `crosshair` (« Maintenant », ≠ `scan`).
- `chart-line` était déjà pris par le glyphe encadré : le dessin du catalogue
  (courbe sur axes, sans cadre) prend le nom **`chart-line-up`**.
- Correction : `throw` est un mot réservé Dart et aurait cassé la compilation du
  package Flutter. La liste des mots réservés du générateur était incomplète, elle
  couvre désormais toute la spécification Dart.
- Correction : une icône ne pouvait pas s'appeler `cat`, le nom entrait en collision
  avec le paramètre `cat` de la fonction `add` du générateur.

## 1.1.2 — 2026-09-06
- Flutter : installation en une commande, `flutter pub add … --git-url`, au lieu du
  bloc YAML. Le package reste distribué par git et non par pub.dev.
- Le README du package Flutter est généré ; au tag v1.1.1 il annonçait encore
  317 icônes, 9 styles et `ref: v1.0.0`. Installer **v1.1.2** plutôt que v1.1.1.
- pubspec : `repository`, `issue_tracker`, `documentation`, `topics` ; `LICENSE` et
  `CHANGELOG.md` embarqués dans le package.

## 1.1.1 — 2026-09-06
- React : `VeraIconVariant` omettait `duotone-standard`, le 10ᵉ style était donc
  rejeté à la compilation TypeScript alors qu'il fonctionnait à l'exécution.
  `src/types.ts`, la description du package et son README sont désormais générés,
  pour qu'ils ne puissent plus diverger de la liste des styles.
- Utiliser cette version plutôt que la 1.1.0.

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
