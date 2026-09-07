# True compound-path solids (no masks) -> works in browsers, Flutter, Figma, icon fonts.
import re, math
from shapely.geometry import Polygon, LineString, Point
from shapely.ops import unary_union
from svgpathtools import parse_path

MITER = 2.0  # doit rester aligné sur gen.MITER

def sample(d, n=24):
    p = parse_path(d); subs = []
    cur = []
    for seg in p:
        if cur and abs(seg.start - cur[-1]) > 1e-6:
            subs.append(cur); cur = []
        if not cur: cur.append(seg.start)
        for i in range(1, n + 1):
            z = seg.point(i / n); cur.append(z)
    if cur: subs.append(cur)
    return [[(z.real, z.imag) for z in s] for s in subs]

def rect_pts(x, y, w, h, r, n=10):
    r = min(r, w / 2, h / 2)
    if r <= 0: return [(x, y), (x + w, y), (x + w, y + h), (x, y + h)]
    pts = []
    for cx, cy, a0 in [(x + w - r, y + r, -90), (x + w - r, y + h - r, 0), (x + r, y + h - r, 90), (x + r, y + r, 180)]:
        for i in range(n + 1):
            a = math.radians(a0 + 90 * i / n); pts.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    return pts

def geom_shapes(s, v, sw):
    cap = {"round": 1, "butt": 2, "square": 3}[v["cap"]]
    join = {"round": 1, "miter": 2, "bevel": 3}[v["join"]]
    k = s["k"]
    if k == "rect":
        poly = Polygon(rect_pts(s["x"], s["y"], s["w"], s["h"], s["r"] * v["rr"]))
        return poly, poly.exterior
    if k == "circle":
        poly = Point(s["cx"], s["cy"]).buffer(s["r"], 64); return poly, poly.exterior
    d = s.get("d_sharp", s["d"]) if v["rr"] == 0 and "d_sharp" in s else s["d"]
    subs = sample(d)
    lines = [LineString(pts) if len(pts) > 1 else Point(pts[0]) for pts in subs]
    poly = unary_union([Polygon(pts).buffer(0) for pts in subs if len(pts) > 2]) if not s.get("sw") else None
    return poly, lines

def solid_path(icon, v, sw=1.5, cut=1.9):
    cap = {"round": 1, "butt": 2, "square": 3}[v["cap"]]; join = {"round": 1, "miter": 2, "bevel": 3}[v["join"]]
    parts = []
    for s in icon["outline"]:
        poly, lines = geom_shapes(s, v, sw)
        w = s.get("sw", sw) / 2
        # Un `dot` est un tracé dégénéré : son polygone est vide et la forme
        # disparaissait du solid alors que le stroke la dessine. Tout ce qui
        # n'a pas de surface est donc rendu comme un trait, exactement comme
        # les formes `sw`.
        if s.get("sw") or poly is None or poly.is_empty:
            ls = lines if isinstance(lines, list) else [lines]
            c = 1 if s.get("dot") else cap
            parts += [l.buffer(w, cap_style=c, join_style=join, mitre_limit=MITER) for l in ls]
        else:
            parts.append(poly.buffer(w, join_style=join, mitre_limit=MITER))  # silhouette out to stroke edge
    body = unary_union(parts)
    cuts = []
    for s in icon["detail"]:
        poly, lines = geom_shapes(s, v, sw)
        ls = lines if isinstance(lines, list) else [lines]
        c = 1 if s.get("dot") else cap
        cuts += [l.buffer(cut / 2, cap_style=c, join_style=join, mitre_limit=MITER) for l in ls]
    if cuts: body = body.difference(unary_union(cuts))
    body = body.simplify(0.015)
    polys = list(body.geoms) if body.geom_type == "MultiPolygon" else [body]
    def ring(r):
        pts = list(r.coords)[:-1]
        return "M" + "L".join(f"{x:.2f} {y:.2f}" for x, y in pts) + "Z"
    d = "".join(ring(p.exterior) + "".join(ring(i) for i in p.interiors) for p in polys)
    return d.replace(".00", "")

def outline_path(icon, v, sw=1.5):
    """Convert a stroke-style icon into a single filled path (for icon fonts)."""
    cap = {"round": 1, "butt": 2, "square": 3}[v["cap"]]; join = {"round": 1, "miter": 2, "bevel": 3}[v["join"]]
    parts = []
    for s in icon["outline"] + icon["detail"]:
        poly, lines = geom_shapes(s, v, sw)
        ls = lines if isinstance(lines, list) else [lines]
        c = 1 if s.get("dot") else cap
        parts += [l.buffer(sw / 2, cap_style=c, join_style=join, mitre_limit=MITER) for l in ls]
    body = unary_union(parts).simplify(0.015)
    polys = list(body.geoms) if body.geom_type == "MultiPolygon" else [body]
    def ring(r):
        return "M" + "L".join(f"{x:.2f} {y:.2f}" for x, y in list(r.coords)[:-1]) + "Z"
    return "".join(ring(p.exterior) + "".join(ring(i) for i in p.interiors) for p in polys).replace(".00", "")
