# Ajouter ou corriger une icône

1. Ouvrir `tools/icons.py`. Chaque icône = `outline` (silhouette, remplie en solid) + `detail` (traits dessinés par-dessus, découpés en solid).
   Primitives : `rr(x,y,w,h,r)` rectangle, `c(cx,cy,r)` cercle, `p("M…")` tracé, `ln("M…")` ligne épaisse, `dot(x,y)` point.
   Grille 24 × 24, zone utile 3 → 21, trait 1,5.
   Un simple synonyme n'a pas besoin d'un dessin : ajoute-le au dict `ALIASES` en fin de fichier,
   il produira quand même son SVG, son composant et son codepoint.
   Toute nouvelle catégorie doit recevoir un libellé dans `CATS` (`tools/build_packages.py`).
2. `cd tools && python3 gen.py` → régénère `svg/` pour les 10 styles.
3. `bash tools/build.sh` → régénère polices, sprites, packages Flutter/React, `icons.json`,
   `tokens.json`, `docs/index.html`.
4. Vérifier visuellement : `python3 tools/review.py review.png <catégorie>`.
   Export PNG facultatif : `python3 tools/export_png.py --size 48`.
5. Incrémenter la version dans `CHANGELOG.md`, `packages/flutter/veraicons/pubspec.yaml`, `packages/react/package.json`, puis tag `vX.Y.Z`.
6. Publier le package npm : `cd packages/react && npm i && npm publish` (compte npm connecté).
