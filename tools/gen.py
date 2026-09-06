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
 "duotone-standard":dict(mode="duotone",cap="square", join="round", rr=0.5),
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
    # le catalogue docs/index.html est produit par build_packages.py
    print("icons", len(ICONS), "variants", len(VARIANTS))

if __name__ == "__main__":
    main()
