"""Constructions géométriques pour dessiner les icônes proprement.

Plutôt que des tracés écrits à main levée, les dessins refaits en 2.0 sont
construits : arcs de cercle, polygones aux angles arrondis, pilules, ellipses.
On obtient des symétries exactes et des arrondis réguliers, que refine.py
reconnaît ensuite pour les adoucir comme les rectangles.

Angles en degrés, 0 = droite, 90 = bas (repère de l'écran).
"""
import math

def f2(v):
    s = f"{v:.2f}".rstrip("0").rstrip(".")
    return "0" if s in ("-0", "") else s

def pt(cx, cy, r, a):
    """Point du cercle (cx, cy, r) à l'angle a (degrés, 0 = droite, 90 = bas)."""
    t = math.radians(a); return (cx + r * math.cos(t), cy + r * math.sin(t))

def arc(cx, cy, r, a0, a1, move=True):
    """Arc de cercle de l'angle a0 à l'angle a1 (sens horaire à l'écran si a1 > a0)."""
    x0, y0 = pt(cx, cy, r, a0); x1, y1 = pt(cx, cy, r, a1)
    head = f"M{f2(x0)} {f2(y0)}" if move else ""
    return head + f"A{f2(r)} {f2(r)} 0 {int(abs(a1 - a0) > 180)} {int(a1 > a0)} {f2(x1)} {f2(y1)}"

def rpoly(pts, r=1.5, closed=True):
    """Polyligne aux sommets arrondis d'un arc de rayon r (un nombre, ou une liste par sommet).

    Les raccords sont de vrais arcs tangents : refine.py les reconnaît et leur
    donne le même arrondi adouci qu'aux rectangles.
    """
    n = len(pts)
    rs = r if isinstance(r, (list, tuple)) else [r] * n
    out = []
    for i, v in enumerate(pts):
        if not closed and i in (0, n - 1):
            out.append(("P", v)); continue
        a, b = pts[i - 1], pts[(i + 1) % n]
        l1 = math.dist(a, v); l2 = math.dist(v, b)
        u1 = ((v[0] - a[0]) / l1, (v[1] - a[1]) / l1); u2 = ((b[0] - v[0]) / l2, (b[1] - v[1]) / l2)
        cos = max(-1.0, min(1.0, u1[0] * u2[0] + u1[1] * u2[1]))
        if rs[i] <= 0 or cos > 0.9999:
            out.append(("P", v)); continue
        t2 = math.sqrt((1 - cos) / (1 + cos))
        t = min(rs[i] * t2, 0.45 * l1, 0.45 * l2)
        rr_ = t / t2
        sweep = int(u1[0] * u2[1] - u1[1] * u2[0] > 0)
        out.append(("A", (v[0] - u1[0] * t, v[1] - u1[1] * t), (v[0] + u2[0] * t, v[1] + u2[1] * t), rr_, sweep))
    def start(e): return e[1] if e[0] == "P" else e[2]
    d = ""
    first = out[0]
    if closed:
        d = f"M{f2(start(first)[0])} {f2(start(first)[1])}"
        seq = out[1:] + [first]
    else:
        d = f"M{f2(first[1][0])} {f2(first[1][1])}"
        seq = out[1:]
    for e in seq:
        if e[0] == "P":
            d += f"L{f2(e[1][0])} {f2(e[1][1])}"
        else:
            d += f"L{f2(e[1][0])} {f2(e[1][1])}A{f2(e[3])} {f2(e[3])} 0 0 {e[4]} {f2(e[2][0])} {f2(e[2][1])}"
    if closed:
        d += "z"
    return d

def tf(pts, s=1.0, dx=0.0, dy=0.0, rot=0.0, cx=12.0, cy=12.0):
    """Transforme une liste de points : rotation (degrés) et échelle autour de (cx, cy), puis translation."""
    c_, s_ = math.cos(math.radians(rot)), math.sin(math.radians(rot))
    return [(cx + s * ((x - cx) * c_ - (y - cy) * s_) + dx, cy + s * ((x - cx) * s_ + (y - cy) * c_) + dy) for x, y in pts]

def circle_x(c1, r1, c2, r2):
    """Points d'intersection de deux cercles."""
    d = math.dist(c1, c2); a = (r1 * r1 - r2 * r2 + d * d) / (2 * d); h = math.sqrt(max(0.0, r1 * r1 - a * a))
    mx, my = c1[0] + a * (c2[0] - c1[0]) / d, c1[1] + a * (c2[1] - c1[1]) / d
    return [(mx + h * (c2[1] - c1[1]) / d, my - h * (c2[0] - c1[0]) / d), (mx - h * (c2[1] - c1[1]) / d, my + h * (c2[0] - c1[0]) / d)]

def ang(c, p):
    return math.degrees(math.atan2(p[1] - c[1], p[0] - c[0]))

def line(*pts):
    return "M" + "L".join(f"{f2(x)} {f2(y)}" for x, y in pts)

def bow(p0, p1, h, move=True):
    """Arc de p0 à p1 dont la flèche vaut |h| ; h > 0 bombe à gauche du sens de parcours."""
    L = math.dist(p0, p1); a = abs(h)
    r = (L * L / 4 + a * a) / (2 * a)
    head = f"M{f2(p0[0])} {f2(p0[1])}" if move else ""
    return head + f"A{f2(r)} {f2(r)} 0 0 {int(h > 0)} {f2(p1[0])} {f2(p1[1])}"

def pill(p0, p1, w):
    """Rectangle arrondi (bouts en demi-cercle) de largeur w, de p0 à p1."""
    L = math.dist(p0, p1); ux, uy = (p1[0] - p0[0]) / L, (p1[1] - p0[1]) / L
    nx, ny = -uy * w / 2, ux * w / 2; r = w / 2
    a, b, c_, d = (p0[0] + nx, p0[1] + ny), (p1[0] + nx, p1[1] + ny), (p1[0] - nx, p1[1] - ny), (p0[0] - nx, p0[1] - ny)
    return (f"M{f2(a[0])} {f2(a[1])}L{f2(b[0])} {f2(b[1])}A{f2(r)} {f2(r)} 0 0 0 {f2(c_[0])} {f2(c_[1])}"
            f"L{f2(d[0])} {f2(d[1])}A{f2(r)} {f2(r)} 0 0 0 {f2(a[0])} {f2(a[1])}z")

def ellipse(cx, cy, rx, ry, rot=0):
    x0, y0 = pt(cx, cy, 1, rot); dx, dy = (x0 - cx) * rx, (y0 - cy) * rx
    return (f"M{f2(cx-dx)} {f2(cy-dy)}A{f2(rx)} {f2(ry)} {f2(rot)} 1 1 {f2(cx+dx)} {f2(cy+dy)}"
            f"A{f2(rx)} {f2(ry)} {f2(rot)} 1 1 {f2(cx-dx)} {f2(cy-dy)}z")

def local(c0, rot, u, v):
    """Point (u, v) d'un repère centré en c0 et tourné de rot degrés."""
    e1 = (math.cos(math.radians(rot)), math.sin(math.radians(rot))); e2 = (-e1[1], e1[0])
    return (c0[0] + u * e1[0] + v * e2[0], c0[1] + u * e1[1] + v * e2[1])

def tangent_pt(T, C, r, side):
    """Point de tangence, depuis T, sur le cercle (C, r) ; side = +1 ou -1 choisit le côté."""
    d = math.dist(T, C); a = math.atan2(C[1] - T[1], C[0] - T[0]); b = math.asin(r / d)
    ang = a + side * b; L = math.sqrt(d * d - r * r)
    return (T[0] + L * math.cos(ang), T[1] + L * math.sin(ang))

def heart(cx, top, w, tip):
    """Cœur : deux lobes de rayon w/4 posés en haut, flancs tangents jusqu'à la pointe (cx, tip)."""
    r = w / 4; Lc, Rc = (cx - r, top + r), (cx + r, top + r); T = (cx, tip)
    a = tangent_pt(T, Lc, r, -1); b = tangent_pt(T, Rc, r, +1)
    return (f"M{f2(T[0])} {f2(T[1])}L{f2(a[0])} {f2(a[1])}A{f2(r)} {f2(r)} 0 1 1 {f2(cx)} {f2(top + r)}"
            f"A{f2(r)} {f2(r)} 0 1 1 {f2(b[0])} {f2(b[1])}z")

def two_circles(C1, r1, C2, r2):
    """Contour de l'union de deux cercles qui se coupent (caisse de guitare, gourde…)."""
    i1, i2 = circle_x(C1, r1, C2, r2)
    return (f"M{f2(i1[0])} {f2(i1[1])}A{f2(r1)} {f2(r1)} 0 1 1 {f2(i2[0])} {f2(i2[1])}"
            f"A{f2(r2)} {f2(r2)} 0 1 1 {f2(i1[0])} {f2(i1[1])}z")
