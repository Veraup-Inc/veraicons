#!/usr/bin/env bash
# Régénère tout depuis tools/icons.py.
# Prérequis : Python 3.10+ et Node. Marche sous macOS, Linux et Windows (Git Bash).
# Les dépendances Python sont installées dans ../.venv-build
# (les installations python globales sont bloquées sur macOS et les distros récentes).
# cairosvg ne sert qu'à review.py / export_png.py et nécessite libcairo (brew install cairo).
set -e
cd "$(dirname "$0")"
# Windows lit et écrit par défaut en cp1252 : les sorties contiennent des accents.
export PYTHONUTF8=1
VENV=../.venv-build
if [ ! -d "$VENV" ]; then
  # Sous Windows, `python3` est souvent l'alias du Microsoft Store, qui ne lance rien :
  # on garde la première commande qui est vraiment un Python 3.10+.
  PY0=""
  for c in python3 python py; do
    if command -v "$c" >/dev/null 2>&1 && "$c" -c "import sys; sys.exit(sys.version_info < (3, 10))" 2>/dev/null; then
      PY0=$c; break
    fi
  done
  [ -n "$PY0" ] || { echo "Python 3.10+ introuvable"; exit 1; }
  "$PY0" -m venv "$VENV"
fi
BIN="$VENV/bin"; [ -d "$BIN" ] || BIN="$VENV/Scripts"  # Scripts/ sous Windows
PY="$BIN/python"
"$PY" -m pip install -q "shapely==2.0.7" svgpathtools
"$PY" -m pip install -q cairosvg || echo "cairosvg indisponible — review.py et export_png.py seront inutilisables"
npm ls -g fantasticon >/dev/null 2>&1 || npm i -g fantasticon
"$PY" gen.py
"$PY" build_packages.py

# Catalogue du site : composant React (packages/gallery) construit vers docs/.
# build_packages.py vient d'y réécrire src/generated.ts, le site ne peut donc
# pas être en retard sur les icônes.
GAL=../packages/gallery
[ -d "$GAL/node_modules" ] || (cd "$GAL" && npm install --no-fund --no-audit)
(cd "$GAL" && npm run build)
