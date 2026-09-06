"""Exporte les icônes en PNG. Optionnel : les PNG ne sont pas versionnés (voir .gitignore).

    python3 export_png.py                       # 24/48/96 px, encre, tous les styles
    python3 export_png.py --size 64 --color '#fff' --variants stroke-rounded,solid-rounded
"""
import os, argparse, cairosvg
from icons import ICONS
from gen import VARIANTS, render

ap = argparse.ArgumentParser()
ap.add_argument("--out", default=os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "build", "png"))
ap.add_argument("--size", type=int, action="append", help="répétable (défaut : 24, 48, 96)")
ap.add_argument("--color", default="#0F1D2E")
ap.add_argument("--variants", default=",".join(VARIANTS))
a = ap.parse_args()
sizes = a.size or [24, 48, 96]

n = 0
for vn in a.variants.split(","):
    for s in sizes:
        d = os.path.join(a.out, f"{s}", vn)
        os.makedirs(d, exist_ok=True)
        for name, ic in ICONS.items():
            svg = render(name, ic, vn).replace('color="currentColor"', f'color="{a.color}"')
            cairosvg.svg2png(bytestring=svg.encode(), write_to=f"{d}/{name}.png", output_width=s, output_height=s)
            n += 1
print("png", n, "→", os.path.normpath(a.out))
