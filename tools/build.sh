#!/usr/bin/env bash
# Régénère tout depuis tools/icons.py. Prérequis : python3 (shapely svgpathtools cairosvg), node (fantasticon).
set -e
cd "$(dirname "$0")"
pip install -q shapely svgpathtools cairosvg 2>/dev/null || true
npm ls -g fantasticon >/dev/null 2>&1 || npm i -g fantasticon
python3 gen.py
python3 build_packages.py
