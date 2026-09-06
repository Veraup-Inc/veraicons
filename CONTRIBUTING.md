# Ajouter ou corriger une icône

1. Ouvrir `tools/icons.py`. Chaque icône = `outline` (silhouette, remplie en solid) + `detail` (traits dessinés par-dessus, découpés en solid).
   Primitives : `rr(x,y,w,h,r)` rectangle, `c(cx,cy,r)` cercle, `p("M…")` tracé, `ln("M…")` ligne épaisse, `dot(x,y)` point.
   Grille 24 × 24, zone utile 3 → 21, trait 1,5.
2. `cd tools && python3 gen.py` → régénère `svg/`, `docs/index.html` et les 9 styles.
3. `bash tools/build.sh` → régénère polices, package Flutter, package React, `icons.json`.
4. Vérifier visuellement : `python3 tools/review.py review.png <catégorie>`.
5. Incrémenter la version dans `CHANGELOG.md`, `packages/flutter/veraup_icons/pubspec.yaml`, `packages/react/package.json`, puis tag `vX.Y.Z`.
