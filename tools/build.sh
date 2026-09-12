#!/usr/bin/env bash
# Régénère tout depuis tools/icons.py.
# Prérequis : python3, node. Les dépendances Python sont installées dans ../.venv-build
# (les installations python globales sont bloquées sur macOS et les distros récentes).
# cairosvg ne sert qu'à review.py / export_png.py et nécessite libcairo (brew install cairo).
set -e
cd "$(dirname "$0")"
VENV=../.venv-build
[ -d "$VENV" ] || python3 -m venv "$VENV"
"$VENV/bin/pip" install -q "shapely==2.0.7" svgpathtools
"$VENV/bin/pip" install -q cairosvg || echo "cairosvg indisponible — review.py et export_png.py seront inutilisables"
npm ls -g fantasticon >/dev/null 2>&1 || npm i -g fantasticon
"$VENV/bin/python" gen.py
"$VENV/bin/python" build_packages.py

# Catalogue du site : composant React (packages/gallery) construit vers docs/.
# build_packages.py vient d'y réécrire src/generated.ts, le site ne peut donc
# pas être en retard sur les icônes.
GAL=../packages/gallery
[ -d "$GAL/node_modules" ] || (cd "$GAL" && npm install --no-fund --no-audit)
(cd "$GAL" && npm run build)
