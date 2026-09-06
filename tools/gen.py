import os, json
from solid import solid_path

# ---------- Icon definitions (24x24 grid, stroke 1.5) ----------
# outline: shapes that form the silhouette (filled in solid/duotone/bulk)
# detail : shapes drawn on top (stroke), cut out of the silhouette in solid
# shape kinds: rect(x,y,w,h,r) circle(cx,cy,r) path(d, d_sharp?)
# flags: sw (solid stroke width -> rendered as thick stroke in solid instead of fill), close (append z in solid)
from icons import ICONS

VARIANTS = {
 "stroke-rounded":  dict(mode="stroke", cap="round",  join="round", rr=1.0),
 "stroke-sharp":    dict(mode="stroke", cap="butt",   join="miter", rr=0.0),
 "stroke-standard": dict(mode="stroke", cap="square", join="round", rr=0.5),
 "solid-rounded":   dict(mode="solid",  cap="round",  join="round", rr=1.0),
 "solid-sharp":     dict(mode="solid",  cap="butt",   join="miter", rr=0.0),
 "solid-standard":  dict(mode="solid",  cap="square", join="round", rr=0.5),
 "duotone-rounded": dict(mode="duotone",cap="round",  join="round", rr=1.0),
 "twotone-rounded": dict(mode="twotone",cap="round",  join="round", rr=1.0),
 "bulk-rounded":    dict(mode="bulk",   cap="round",  join="round", rr=1.0),
}
SW = 1.5

def geom(s, v):
    k = s["k"]
    if k == "rect":
        return f'<rect x="{s["x"]}" y="{s["y"]}" width="{s["w"]}" height="{s["h"]}" rx="{s["r"]*v["rr"]}"'
    if k == "circle":
        return f'<circle cx="{s["cx"]}" cy="{s["cy"]}" r="{s["r"]}"'
    d = s.get("d_sharp", s["d"]) if v["rr"] == 0 and "d_sharp" in s else s["d"]
    return f'<path d="{d}"'

def stroke(s, v, color="currentColor", w=SW, op=1.0, extra=""):
    cap = "round" if s.get("dot") else v["cap"]
    return f'{geom(s,v)} fill="none" stroke="{color}" stroke-width="{w}" stroke-linecap="{cap}" stroke-linejoin="{v["join"]}" opacity="{op}"{extra}/>'

def fill(s, v, color="currentColor", op=1.0):
    g = geom(s, v)
    if s.get("close") and s["k"] == "path":
        g = g[:-1] + 'z"'
    if s.get("sw"):  # rendered as thick stroke in filled contexts
        return f'{g} fill="none" stroke="{color}" stroke-width="{s["sw"]}" stroke-linecap="{v["cap"]}" stroke-linejoin="{v["join"]}" opacity="{op}"/>'
    return f'{g} fill="{color}" opacity="{op}"/>'

def render(name, icon, vname):
    v = VARIANTS[vname]; m = v["mode"]; out = []
    if m == "stroke":
        out += [stroke(s, v) for s in icon["outline"]] + [stroke(s, v) for s in icon["detail"]]
    elif m == "solid":
        out += [f'<path d="{solid_path(icon, v)}" fill="currentColor" fill-rule="evenodd"/>']
    elif m == "duotone":
        out += [fill(s, v, op=0.25) for s in icon["outline"] if not s.get("sw")]
        out += [stroke(s, v) for s in icon["outline"]] + [stroke(s, v) for s in icon["detail"]]
    elif m == "twotone":
        out += [stroke(s, v) for s in icon["outline"]]
        out += [stroke(s, v, op=0.4) for s in icon["detail"]]
        if not icon["detail"]:  # no detail layer: second half of outline goes secondary
            half = len(icon["outline"]) // 2
            out = [stroke(s, v) for s in icon["outline"][:half]] + [stroke(s, v, op=0.4) for s in icon["outline"][half:]]
    elif m == "bulk":
        out += [fill(s, v, op=0.4) for s in icon["outline"]]
        out += [stroke(s, v, w=1.8) for s in icon["detail"]]
        if not icon["detail"]:
            half = len(icon["outline"]) // 2
            out = [fill(s, v, op=0.4) for s in icon["outline"][:half]] + [fill(s, v) for s in icon["outline"][half:]]
    body = "\n  ".join(out)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor">\n  {body}\n</svg>'

def main(root=os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")):
    for vname in VARIANTS:
        d = os.path.join(root, "svg", vname); os.makedirs(d, exist_ok=True)
        for name, icon in ICONS.items():
            open(os.path.join(d, f"{name}.svg"), "w").write(render(name, icon, vname))
    # contact sheet
    rows = []
    for name, icon in ICONS.items():
        cells = "".join(f'<td>{render(name, icon, v)}</td>' for v in VARIANTS)
        rows.append(f'<tr><th>{name}</th>{cells}</tr>')
    head = "".join(f"<th>{v.replace('-rounded','').replace('-',' ')}</th>" for v in VARIANTS)
    html = f"""<!doctype html><html lang="fr"><meta charset="utf-8"><title>VeraUp Icons — planche d'essai</title>
<style>
:root{{color-scheme:light}}
body{{margin:0;padding:40px 48px;font:15px/1.4 "Inter",system-ui,sans-serif;color:#0F1D2E;background:#FBFAF7}}
h1{{font-size:26px;margin:0 0 4px;letter-spacing:-.02em}}
p.lead{{margin:0 0 28px;color:#5A6472;max-width:70ch}}
table{{border-collapse:separate;border-spacing:0 6px}}
th{{font-weight:600;font-size:12px;color:#5A6472;text-align:left;padding:0 10px 6px}}
tr th:first-child{{text-align:right;padding-right:18px;font-size:13px;color:#0F1D2E}}
td{{background:#fff;border:1px solid #E7E4DD;padding:14px 18px;width:36px;text-align:center}}
td:nth-child(2){{border-radius:12px 0 0 12px}} td:last-child{{border-radius:0 12px 12px 0}}
td svg{{width:36px;height:36px;color:#0F1D2E;display:block;margin:auto}}
.legend{{margin-top:26px;font-size:13px;color:#5A6472}}
</style>
<h1>VeraUp Icons — planche d'essai</h1>
<p class="lead">{len(ICONS)} symboles × 9 styles, tous dérivés d'une seule source par icône. Grille 24, trait 1,5. La couleur suit <code>currentColor</code>.</p>
<table><tr><th></th>{head}</tr>{''.join(rows)}</table>
<div class="legend">Stroke (arrondi · vif · standard) — Solid (arrondi · vif · standard) — Duotone — Twotone — Bulk</div>
</html>"""
    pass  # le catalogue est produit par build_packages.py (docs/index.html)
    print("icons", len(ICONS), "variants", len(VARIANTS))

if __name__ == "__main__":
    main()
