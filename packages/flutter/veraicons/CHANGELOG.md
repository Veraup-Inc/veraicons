# Changelog

## 1.3.0 — 2026-09-12

### Correction — les icônes React rendaient faux
`build_packages.py` convertissait les attributs SVG en camelCase (`strokeWidth`,
`fillRule`). C'est correct pour des props JSX, mais ces chaînes partent dans
`dangerouslySetInnerHTML`, donc par le **parseur HTML**, qui met les noms
d'attributs en minuscules : `strokeWidth` devenait `strokewidth`, que le SVG
ignore.

Conséquences, mesurées dans un navigateur :

| Attribut | Rendu obtenu | Attendu |
|---|---|---|
| `stroke-width` | `1px` | `1.5px` |
| `fill-rule` | `nonzero` | `evenodd` |
| `stroke-linecap` | par défaut | `round` / `butt` / `square` |

Le `fill-rule` est le plus visible : **tous les trous des icônes solid se
remplissaient**. Les chaînes restent désormais en kebab-case. Aucun changement
d'API, mais toute application React sur une version antérieure affiche des
icônes fausses — mettez à jour.

### Catalogue web — vrai composant React
Nouveau package `packages/gallery` (`veraicons-gallery`). Le catalogue du site
**est** ce composant : un seul code rend la page publique et s'intègre dans un
volet développeur.

- `<IconGallery />` s'installe en deux lignes, sprites servis par jsDelivr par
  défaut : rien à héberger.
- 47 ko compressés à 9,6 ko. Le composant charge le sprite du style affiché
  (~300 Ko, mis en cache) au lieu d'embarquer 4 Mo d'icônes.
- Props `spriteBase`, `defaultVariant`, `hideHeader`, `theme`, `onSelect`,
  `className`. Avec `onSelect`, le catalogue devient un sélecteur d'icônes ;
  `theme` évite qu'un volet inséré dans un site clair s'affiche en sombre parce
  que le système l'est.
- Styles préfixés `vig-`, palette en variables CSS, thème clair/sombre.

Vérifié de bout en bout : les deux paquets ont été empaquetés avec `npm pack`,
installés dans une application Vite + React 19 neuve, puis relus dans un
navigateur — trait à 1,5 px, `fill-rule` à `evenodd`, 554 tuiles, `onSelect`
fonctionnel, et tree-shaking confirmé (une icône non importée reste hors du
bundle).
- `ICONS`, `CATEGORIES`, `VARIANTS` et les sous-composants sont exportés.

L'ancien `docs/index.html` — 4,5 Mo de HTML généré — disparaît. Le site n'est
plus versionné : la CI le reconstruit à chaque déploiement, il ne peut donc plus
être en retard sur les icônes.

### Aussi
- `icons.json` porte maintenant `version` et `categories` (clé, libellé, compte) :
  le manifeste se suffit à lui-même, les libellés ne sont plus enfermés dans le
  script Python.
- `packages/gallery/src/generated.ts` est écrit par `tools/build_packages.py` et
  vérifié en CI : le catalogue ne peut pas se désynchroniser des icônes.

## 1.2.2 — 2026-09-06
Deuxième passe, cette fois sur le **style solid**, à partir d'une relecture du
catalogue imprimé. C'est le style le plus fragile du pipeline : il transforme des
contours en surfaces, et deux formes séparées de moins que l'épaisseur du trait
se soudent en une seule tache.

- **Correctif moteur — les points disparaissaient.** Un `dot()` est un tracé
  dégénéré : son polygone est vide, donc `solid_path` le perdait alors que le
  stroke le dessinait. Les six gouttes de `shower` et les deux points du `÷` de
  `math-operations` étaient absents en solid. Tout ce qui n'a pas de surface est
  désormais rendu comme un trait, comme les formes `sw`. `tools/audit.py` gagne
  un contrôle `forme-fantôme` pour que ça ne revienne pas.
- **Formes soudées** — espacements repris pour que le solid montre les mêmes
  pièces que le stroke : `podium`, `ranking` et `barbell` (barres fondues en un
  bloc), `hamburger` (pain, steak et pain en une seule masse), `bowl-food`
  (garniture collée au bol), `choir` (têtes soudées).
- **Silhouettes creusées** pour rester lisibles une fois pleines : `chef-hat`
  (se lisait comme un champignon), `hands-clapping` (comme une moufle),
  `tree-palm` (palmes fondues), `lighthouse` (lanterne fondue dans la tour).
- **Traits allégés** : `nfc` et `contactless` avaient des arcs de 2,2 qui se
  rejoignaient en nœud papillon.
- **Redessinés** : `compass-tool` se lisait comme un « A », `drum` comme un bol
  — ses baguettes étaient en `detail` et se perdaient hors du fût.

## 1.2.1 — 2026-09-06
Passe de correction des dessins mal formés, guidée par un nouvel audit géométrique
(`tools/audit.py`, lancé en CI) qui relit les 521 dessins dans les 10 styles.

- **Pointes de raccord bornées** (`stroke-miterlimit` 2, aligné entre `gen.py` et
  `solid.py`). Les angles aigus des profils `sharp` produisaient des piques qui
  sortaient du viewBox : `sparkle` dépassait de 1,25 unité et se retrouvait rognée.
- **Traits invisibles en solid** — un trait de `detail` qui ne touche pas la
  silhouette ne creuse rien et disparaît, les deux styles ne montraient donc pas le
  même dessin : `zoom-in` (perdait son `+`), `goal` (son point central),
  `history` et `restore` (leurs aiguilles), `choir` (sa note), `boat` (ses hublots).
- **Débordements du cadre** : `sneaker`, `sneaker-move`, `motorcycle`, `wind`, `edit`.
- **Formes qui fusionnaient en solid** : les colonnes de `kanban` étaient espacées
  d'exactement l'épaisseur du trait et se fondaient en une seule tache ; les deux
  pièces de `coins` n'en formaient plus qu'une.
- **Redessinés** parce qu'ils ne se lisaient pas :
  - `handshake` — le tracé ne montrait aucune main reconnaissable.
  - `hands-praying` (et son alias `spirituality`) — se lisait comme une fusée.
    Les doigts sont maintenant creusés en `detail`, donc visibles aussi en solid.
  - `broom` — se lisait comme une truelle, les brins manquaient.
  - `notification` — la pastille était un trou et le solid se lisait comme une
    bouchée ; c'est désormais un anneau ouvert avec une pastille pleine.

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
