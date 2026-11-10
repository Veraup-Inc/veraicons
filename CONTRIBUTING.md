# Ajouter ou corriger une icône

1. Ouvrir `tools/icons.py`. Chaque icône = `outline` (silhouette, remplie en solid) + `detail` (traits dessinés par-dessus, découpés en solid).
   Primitives : `rr(x,y,w,h,r)` rectangle, `c(cx,cy,r)` cercle, `p("M…")` tracé, `ln("M…")` ligne épaisse, `dot(x,y)` point.
   Grille 24 × 24, trait 1,5. On dessine sur la zone utile historique 3 → 21 : au build,
   `tools/refine.py` agrandit chaque icône vers la zone 2 → 22 (20 px, ×1,3 au plus ; un
   glyphe fait seulement de traits grandit comme la grille, ×1,111) et adoucit les angles
   du profil rounded (rayons ×1,3, raccords « squircle »). Une icône déjà dessinée à sa
   taille finale s'en exclut avec `I(..., fit=False)`.
   Les dessins refaits en 2.0 sont construits ainsi, directement sur la zone 2 → 22, avec les
   fonctions de `tools/geo.py` plutôt qu'à main levée : `arc`, `rpoly` (polygone aux angles
   arrondis), `pill`, `ellipse`, `bow`, `heart`… Symétries exactes, arrondis réguliers.
   Un trait de `detail` doit toucher la silhouette : le style solid le découpe dedans, et un
   détail qui flotte à côté disparaîtrait (l'audit le signale « detail-perdu »). Ce qui flotte
   (gouttes, éclats, élastiques) va dans `outline`.
   Un simple synonyme n'a pas besoin d'un dessin : ajoute-le au dict `ALIASES` en fin de fichier,
   il produira quand même son SVG, son composant et son codepoint.
   Toute nouvelle catégorie doit recevoir un libellé dans `CATS` (`tools/build_packages.py`).
2. `cd tools && python3 gen.py` → régénère `svg/` pour les 10 styles.
3. `bash tools/build.sh` → régénère polices, sprites, packages Flutter/React, `icons.json`,
   `tokens.json`, `docs/index.html`. Sous Windows, le lancer depuis Git Bash.
   `python3 tools/audit.py` doit finir sur « 0 signalées » : la CI le vérifie.
4. Vérifier visuellement : `python3 tools/review.py review.png <catégorie>`.
   Export PNG facultatif : `python3 tools/export_png.py --size 48`.
5. Incrémenter la version dans `CHANGELOG.md`, `packages/flutter/veraicons/pubspec.yaml`, `packages/react/package.json`, puis tag `vX.Y.Z`.
6. Publier le package npm : `cd packages/react && npm i && npm publish` (compte npm connecté).
