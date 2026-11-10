"""Passe de style 2.0 : zone utile de 20 px et angles « squircle ».

Les dessins de icons.py restent sur leur grille d'origine (zone utile 3 → 21).
Cette passe les retouche au moment du build, pour toutes les icônes à la fois :

1. Angles (profil rounded seulement). Un raccord en arc de cercle posé entre
   deux segments droits devient un raccord adouci : rayon ×1,3 et poignées de
   Bézier à 0,71 du rayon au lieu des 0,552 d'un quart de cercle. La courbe
   reste tendue plus longtemps avant de tourner, d'où l'arrondi continu des
   icônes iOS. Les rectangles `rr()` suivent la même règle (voir `rect_d`).
   Les profils standard et sharp gardent leurs angles d'origine.
2. Taille. Une icône qui contient une vraie forme fermée (cadre, cercle,
   silhouette) d'au moins 12 px est agrandie jusqu'à occuper 20 px (de 2 à
   22), au plus ×1,3. Un glyphe fait seulement de traits (flèche, plus, coche)
   grandit comme la grille, de 18 à 20 px (×1,111), sans dépasser 20 px.
   Seule la géométrie grandit : les épaisseurs de trait ne changent pas.

Une icône déjà dessinée à sa taille finale s'exclut de l'étape 2 avec
`I(..., fit=False)`.

La CI compare les SVG générés octet par octet avec ceux du dépôt : l'échelle
et les décalages sont arrondis au millième, et les coordonnées au centième,
pour que la sortie ne dépende pas de la plateforme qui lance le build.
"""
import math
import re

CENTER = 12.0
FRAME = (2.0, 22.0)        # zone utile : 20 px
LINE_GROWTH = 20.0 / 18.0  # glyphes de traits : même croissance que la grille
MAX_SCALE = 1.3
CONTAINER_MIN = 12.0       # taille d'une forme fermée qui fait de l'icône un conteneur
CORNER_SCALE = 1.3         # profil rounded : rayons ×1,3
SMOOTH = 0.71              # poignée / rayon d'un angle droit adouci
CIRCLE_K = 0.5523          # poignée / rayon d'un vrai quart de cercle
DOT = 2.0                  # diamètre des points ; les traits restent à 1,5

_NUM = re.compile(r"[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?")


# ---------- géométrie élémentaire ----------
def _sub(a, b): return (a[0] - b[0], a[1] - b[1])
def _add(a, b): return (a[0] + b[0], a[1] + b[1])
def _mul(a, k): return (a[0] * k, a[1] * k)
def _dot(a, b): return a[0] * b[0] + a[1] * b[1]
def _cross(a, b): return a[0] * b[1] - a[1] * b[0]
def _dist(a, b): return math.hypot(a[0] - b[0], a[1] - b[1])


def _unit(a):
    n = math.hypot(a[0], a[1])
    return (a[0] / n, a[1] / n)


def _intersect(p, u, q, w):
    """Point commun des droites p + t·u et q + s·w (None si parallèles)."""
    den = _cross(u, w)
    if abs(den) < 1e-9:
        return None
    t = _cross(_sub(q, p), w) / den
    return _add(p, _mul(u, t))


# ---------- lecture / écriture des tracés ----------
def parse(d):
    """Tracé SVG → sous-tracés en coordonnées absolues.

    Sous-tracé : {"start": (x, y), "segs": [...], "closed": bool}
    Segments : ("L", p0, p1) · ("C", p0, c1, c2, p1) · ("Q", p0, c, p1)
               · ("A", p0, rx, ry, rotation, grand_arc, sens, p1)
    """
    i, n = 0, len(d)
    subs, cur = [], None
    pt = start = (0.0, 0.0)
    cmd = None
    last_c = last_q = None

    def ws():
        nonlocal i
        while i < n and d[i] in " ,\t\r\n":
            i += 1

    def num():
        nonlocal i
        ws()
        m = _NUM.match(d, i)
        if not m:
            raise ValueError(f"nombre attendu en position {i} dans {d!r}")
        i = m.end()
        return float(m.group())

    def flag():
        nonlocal i
        ws()
        if i >= n or d[i] not in "01":
            raise ValueError(f"drapeau d'arc attendu en position {i} dans {d!r}")
        i += 1
        return d[i - 1] == "1"

    while True:
        ws()
        if i >= n:
            break
        if d[i].isalpha():
            cmd = d[i]
            i += 1
        elif cmd is None:
            raise ValueError(f"commande attendue en position {i} dans {d!r}")
        rel = cmd.islower()
        C = cmd.upper()
        ox, oy = pt if rel else (0.0, 0.0)
        if C == "M":
            pt = start = (ox + num(), oy + num())
            cur = {"start": pt, "segs": [], "closed": False}
            subs.append(cur)
            cmd = "l" if rel else "L"  # les paires suivantes sont des lignes
            last_c = last_q = None
            continue
        if C == "Z":
            if cur is not None:
                cur["closed"] = True
            pt, cur, cmd = start, None, None
            last_c = last_q = None
            continue
        if cur is None:  # après Z sans M : nouveau sous-tracé au même départ
            cur = {"start": pt, "segs": [], "closed": False}
            subs.append(cur)
            start = pt
        if C == "L":
            p = (ox + num(), oy + num())
            seg = ("L", pt, p)
        elif C == "H":
            p = (ox + num(), pt[1])
            seg = ("L", pt, p)
        elif C == "V":
            p = (pt[0], oy + num())
            seg = ("L", pt, p)
        elif C in "CS":
            if C == "C":
                c1 = (ox + num(), oy + num())
            else:
                c1 = _sub(_mul(pt, 2), last_c) if last_c else pt
            c2 = (ox + num(), oy + num())
            p = (ox + num(), oy + num())
            seg = ("C", pt, c1, c2, p)
        elif C in "QT":
            if C == "Q":
                c = (ox + num(), oy + num())
            else:
                c = _sub(_mul(pt, 2), last_q) if last_q else pt
            p = (ox + num(), oy + num())
            seg = ("Q", pt, c, p)
        elif C == "A":
            rx, ry, rot = abs(num()), abs(num()), num()
            large, sweep = flag(), flag()
            p = (ox + num(), oy + num())
            seg = ("A", pt, rx, ry, rot, large, sweep, p)
        else:
            raise ValueError(f"commande inconnue {cmd!r} dans {d!r}")
        cur["segs"].append(seg)
        last_c = seg[3] if seg[0] == "C" else None
        last_q = seg[2] if seg[0] == "Q" else None
        pt = p
    return subs


def _fp(v):
    """Nombre de tracé : deux décimales, sans zéro de tête (.5, -.25)."""
    s = f"{v:.2f}".rstrip("0").rstrip(".")
    if s in ("-0", ""):
        return "0"
    if s.startswith("0."):
        return s[1:]
    if s.startswith("-0."):
        return "-" + s[2:]
    return s


def fmt(v):
    """Nombre d'attribut : deux décimales, zéro de tête conservé."""
    s = f"{v:.2f}".rstrip("0").rstrip(".")
    return "0" if s in ("-0", "") else s


def _nums(vals):
    out = ""
    for v in vals:
        t = _fp(v)
        out += t if (not out or t.startswith("-")) else " " + t
    return out


def _r(p):
    return (round(p[0], 2), round(p[1], 2))


def serialize(subs):
    """Sous-tracés → tracé SVG compact, en commandes relatives."""
    parts = []
    for sp in subs:
        cx, cy = _r(sp["start"])
        parts.append("M" + _nums([cx, cy]))
        segs = sp["segs"]
        if sp["closed"] and segs and segs[-1][0] == "L" and _r(segs[-1][2]) == (cx, cy):
            segs = segs[:-1]  # la fermeture Z trace ce dernier segment
        for g in segs:
            if g[0] == "L":
                x, y = _r(g[2])
                dx, dy = round(x - cx, 2), round(y - cy, 2)
                if dx == 0 and dy == 0:
                    if len(segs) > 1:
                        continue
                    parts.append("h0")
                elif dy == 0:
                    parts.append("h" + _fp(dx))
                elif dx == 0:
                    parts.append("v" + _fp(dy))
                else:
                    parts.append("l" + _nums([dx, dy]))
                cx, cy = x, y
            elif g[0] == "C":
                c1, c2, p = _r(g[2]), _r(g[3]), _r(g[4])
                parts.append("c" + _nums([round(c1[0] - cx, 2), round(c1[1] - cy, 2),
                                          round(c2[0] - cx, 2), round(c2[1] - cy, 2),
                                          round(p[0] - cx, 2), round(p[1] - cy, 2)]))
                cx, cy = p
            elif g[0] == "Q":
                c, p = _r(g[2]), _r(g[3])
                parts.append("q" + _nums([round(c[0] - cx, 2), round(c[1] - cy, 2),
                                          round(p[0] - cx, 2), round(p[1] - cy, 2)]))
                cx, cy = p
            else:
                p = _r(g[7])
                parts.append("a" + _nums([g[2], g[3], g[4]])
                             + f" {int(g[5])} {int(g[6])} "
                             + _nums([round(p[0] - cx, 2), round(p[1] - cy, 2)]))
                cx, cy = p
        if sp["closed"]:
            parts.append("z")
    return "".join(parts)


# ---------- encombrement ----------
def _quad_roots(a, b, c):
    if abs(a) < 1e-12:
        return [-c / b] if abs(b) > 1e-12 else []
    disc = b * b - 4 * a * c
    if disc < 0:
        return []
    r = math.sqrt(disc)
    return [(-b - r) / (2 * a), (-b + r) / (2 * a)]


def _cubic_at(p0, c1, c2, p1, t):
    u = 1 - t
    return tuple(u * u * u * p0[k] + 3 * u * u * t * c1[k] + 3 * u * t * t * c2[k] + t * t * t * p1[k]
                 for k in (0, 1))


def _arc_center(g):
    """Paramétrage centré d'un arc SVG (recommandation SVG, annexe F.6.5)."""
    _, p0, rx, ry, rot, large, sweep, p1 = g
    if rx == 0 or ry == 0 or p0 == p1:
        return None
    phi = math.radians(rot)
    cp, sp = math.cos(phi), math.sin(phi)
    hx, hy = (p0[0] - p1[0]) / 2, (p0[1] - p1[1]) / 2
    x1, y1 = cp * hx + sp * hy, -sp * hx + cp * hy
    lam = x1 * x1 / (rx * rx) + y1 * y1 / (ry * ry)
    if lam > 1:
        k = math.sqrt(lam)
        rx, ry = rx * k, ry * k
    num_ = rx * rx * ry * ry - rx * rx * y1 * y1 - ry * ry * x1 * x1
    den = rx * rx * y1 * y1 + ry * ry * x1 * x1
    co = math.sqrt(max(0.0, num_ / den)) if den else 0.0
    if large == sweep:
        co = -co
    xc, yc = co * rx * y1 / ry, -co * ry * x1 / rx
    cx = cp * xc - sp * yc + (p0[0] + p1[0]) / 2
    cy = sp * xc + cp * yc + (p0[1] + p1[1]) / 2

    def ang(ux, uy, vx, vy):
        return math.atan2(ux * vy - uy * vx, ux * vx + uy * vy)

    t1 = ang(1, 0, (x1 - xc) / rx, (y1 - yc) / ry)
    dt = ang((x1 - xc) / rx, (y1 - yc) / ry, (-x1 - xc) / rx, (-y1 - yc) / ry)
    if not sweep and dt > 0:
        dt -= 2 * math.pi
    elif sweep and dt < 0:
        dt += 2 * math.pi
    return cx, cy, rx, ry, phi, t1, dt


def _seg_points(g):
    """Points extrêmes d'un segment : ses bouts et ses tangentes horizontales/verticales."""
    pts = [g[1], g[-1]]
    if g[0] == "C":
        p0, c1, c2, p1 = g[1:]
        for k in (0, 1):
            A, B, Cc = c1[k] - p0[k], c2[k] - c1[k], p1[k] - c2[k]
            for t in _quad_roots(A - 2 * B + Cc, 2 * (B - A), A):
                if 0 < t < 1:
                    pts.append(_cubic_at(p0, c1, c2, p1, t))
    elif g[0] == "Q":
        p0, c, p1 = g[1:]
        for k in (0, 1):
            den = p0[k] - 2 * c[k] + p1[k]
            if abs(den) > 1e-12:
                t = (p0[k] - c[k]) / den
                if 0 < t < 1:
                    u = 1 - t
                    pts.append(tuple(u * u * p0[j] + 2 * u * t * c[j] + t * t * p1[j] for j in (0, 1)))
    elif g[0] == "A":
        a = _arc_center(g)
        if a:
            cx, cy, rx, ry, phi, t1, dt = a
            cp, sp = math.cos(phi), math.sin(phi)
            cands = []
            for base in (math.atan2(-ry * sp, rx * cp), math.atan2(ry * cp, rx * sp)):
                cands += [base, base + math.pi]
            for th in cands:
                off = (th - t1) % (2 * math.pi) if dt > 0 else (t1 - th) % (2 * math.pi)
                if off <= abs(dt):
                    ct, st = math.cos(th), math.sin(th)
                    pts.append((cx + rx * cp * ct - ry * sp * st, cy + rx * sp * ct + ry * cp * st))
    return pts


def _bounds(points):
    xs = [p[0] for p in points]
    ys = [p[1] for p in points]
    return min(xs), min(ys), max(xs), max(ys)


def _subs_points(subs):
    pts = []
    for sp in subs:
        pts.append(sp["start"])
        for g in sp["segs"]:
            pts += _seg_points(g)
    return pts


# ---------- angles adoucis ----------
def smooth(subs, scale=CORNER_SCALE, k=SMOOTH):
    """Agrandit et adoucit chaque raccord circulaire posé entre deux droites.

    Le coin virtuel P (intersection des deux droites) reste fixe ; la longueur
    de tangente passe à ×scale, bornée par la place disponible sur chaque
    droite (partagée au prorata si deux raccords se la disputent).
    """
    out = []
    for sp in subs:
        segs = list(sp["segs"])
        closed = sp["closed"]
        if closed and segs and _dist(segs[-1][-1], sp["start"]) > 1e-9:
            segs.append(("L", segs[-1][-1], sp["start"]))
        n = len(segs)
        fil = {}
        for i, g in enumerate(segs):
            if g[0] != "A":
                continue
            _, a0, rx, ry, _rot, large, sweep, a1 = g
            if large or rx <= 0 or abs(rx - ry) > 1e-6:
                continue
            pi = i - 1 if i > 0 else (n - 1 if closed else None)
            ni = i + 1 if i < n - 1 else (0 if closed else None)
            if pi is None or ni is None or pi == ni or i in (pi, ni):
                continue
            pg, ng = segs[pi], segs[ni]
            if pg[0] != "L" or ng[0] != "L" or _dist(pg[1], pg[2]) < 1e-6 or _dist(ng[1], ng[2]) < 1e-6:
                continue
            ui, uo = _unit(_sub(pg[2], pg[1])), _unit(_sub(ng[2], ng[1]))
            cos = _dot(ui, uo)
            if cos > 0.9995 or cos < -0.985:   # quasi rectiligne, ou demi-tour
                continue
            if (_cross(ui, uo) > 0) != sweep:  # l'arc ne suit pas le virage
                continue
            P = _intersect(pg[2], ui, ng[1], uo)
            if P is None or _dot(_sub(P, a0), ui) <= 0 or _dot(_sub(a1, P), uo) <= 0:
                continue
            T = (_dist(P, a0) + _dist(a1, P)) / 2
            t2 = math.sqrt((1 - cos) / (1 + cos))  # tan(θ/2)
            if abs(T - rx * t2) > 0.15 * rx * t2 + 0.05:  # ce n'est pas un raccord
                continue
            fil[i] = dict(P=P, ui=ui, uo=uo, T=T, t2=t2, prev=pi, next=ni)
        if not fil:
            out.append(sp)
            continue
        starts = {f["next"]: i for i, f in fil.items()}  # ligne → raccord à son début
        ends = {f["prev"]: i for i, f in fil.items()}    # ligne → raccord à sa fin
        want = {i: f["T"] * scale for i, f in fil.items()}
        lim = dict(want)
        for j, g in enumerate(segs):
            if g[0] != "L" or (j not in starts and j not in ends):
                continue
            a = fil[starts[j]]["P"] if j in starts else g[1]
            b = fil[ends[j]]["P"] if j in ends else g[2]
            ids = [x for x in (starts.get(j), ends.get(j)) if x is not None]
            need = sum(want[x] for x in ids)
            room = _dist(a, b)
            if need > room:
                for x in ids:
                    lim[x] = min(lim[x], want[x] * room / need)
        T2 = lim
        new = []
        for j, g in enumerate(segs):
            if j in fil:
                f, t = fil[j], T2[j]
                A0, A1 = _add(f["P"], _mul(f["ui"], -t)), _add(f["P"], _mul(f["uo"], t))
                h = (4 / 3) * t / (1 + math.sqrt(1 + f["t2"] ** 2)) * (k / CIRCLE_K)
                h = min(h, 0.95 * t)
                new.append(("C", A0, _add(A0, _mul(f["ui"], h)), _add(A1, _mul(f["uo"], -h)), A1))
            elif g[0] == "L" and (j in starts or j in ends):
                p0, p1 = g[1], g[2]
                if j in starts:
                    f = fil[starts[j]]
                    p0 = _add(f["P"], _mul(f["uo"], T2[starts[j]]))
                if j in ends:
                    f = fil[ends[j]]
                    p1 = _add(f["P"], _mul(f["ui"], -T2[ends[j]]))
                if _dist(p0, p1) > 1e-3:
                    new.append(("L", p0, p1))
            else:
                new.append(g)
        out.append({"start": new[0][1] if new else sp["start"], "segs": new, "closed": closed})
    return out


def transform(subs, s, dx, dy):
    """Homothétie de centre (12, 12) puis translation."""
    def T(p):
        return (CENTER + s * (p[0] - CENTER) + dx, CENTER + s * (p[1] - CENTER) + dy)
    out = []
    for sp in subs:
        segs = []
        for g in sp["segs"]:
            if g[0] == "A":
                segs.append(("A", T(g[1]), g[2] * s, g[3] * s, g[4], g[5], g[6], T(g[7])))
            else:
                segs.append((g[0],) + tuple(T(p) for p in g[1:]))
        out.append({"start": T(sp["start"]), "segs": segs, "closed": sp["closed"]})
    return out


# ---------- rectangles ----------
def rect_radius(s, rr):
    """Rayon effectif d'un `rr()` selon le profil (rr = 1 rounded, 0,5 standard, 0 sharp)."""
    if rr < 1:
        return s["r"] * rr
    half = min(s["w"], s["h"]) / 2
    if s["r"] >= 0.9 * half:  # pilule ou cercle : on n'y touche pas
        return min(s["r"], half)
    return min(s["r"] * CORNER_SCALE, 0.9 * half)


def rect_d(s):
    """Rectangle du profil rounded, en tracé à angles adoucis."""
    x, y, w, h = s["x"], s["y"], s["w"], s["h"]
    r = rect_radius(s, 1)
    c = r * (CIRCLE_K if s["r"] >= 0.9 * min(w, h) / 2 else SMOOTH)
    segs = [("L", (x + r, y), (x + w - r, y)),
            ("C", (x + w - r, y), (x + w - r + c, y), (x + w, y + r - c), (x + w, y + r)),
            ("L", (x + w, y + r), (x + w, y + h - r)),
            ("C", (x + w, y + h - r), (x + w, y + h - r + c), (x + w - r + c, y + h), (x + w - r, y + h)),
            ("L", (x + w - r, y + h), (x + r, y + h)),
            ("C", (x + r, y + h), (x + r - c, y + h), (x, y + h - r + c), (x, y + h - r)),
            ("L", (x, y + h - r), (x, y + r)),
            ("C", (x, y + r), (x, y + r - c), (x + r - c, y), (x + r, y))]
    return serialize([{"start": (x + r, y), "segs": segs, "closed": True}])


def pick_d(s, rr):
    """Tracé d'un `p()` selon le profil : adouci en rounded, d'origine sinon."""
    if rr >= 1:
        return s["d"]
    if rr == 0 and "d_sharp" in s:
        return s["d_sharp"]
    return s.get("d_plain", s["d"])


# ---------- passe complète ----------
def is_closed(s):
    """Forme qui délimite une surface (cadre, disque, silhouette), par opposition à un trait."""
    if s["k"] in ("rect", "circle"):
        return True
    return not s.get("sw") and not s.get("dot")


def _shape_points(s, parsed, every=False):
    """Points d'encombrement : profil rounded seul, ou tous les profils (every)."""
    if s["k"] == "rect":
        return [(s["x"], s["y"]), (s["x"] + s["w"], s["y"] + s["h"])]
    if s["k"] == "circle":
        return [(s["cx"] - s["r"], s["cy"] - s["r"]), (s["cx"] + s["r"], s["cy"] + s["r"])]
    if not every:
        return _subs_points(parsed["d"])
    pts = []
    for subs in parsed.values():
        pts += _subs_points(subs)
    return pts


# Aucun profil ne doit sortir de cette marge : un raccord en pointe (sharp,
# limite d'onglet 2) dépasse de 1,5 px au plus de sa géométrie.
SAFE = (1.5, 22.5)


def _fit(shapes, parsed):
    """Échelle et décalage qui portent l'icône vers la zone utile."""
    allp, every, container = [], [], False
    for s, ps in zip(shapes, parsed):
        pts = _shape_points(s, ps)
        allp += pts
        every += _shape_points(s, ps, every=True)
        if is_closed(s):
            a0, b0, a1, b1 = _bounds(pts)
            # une seule grande forme suffit ; une colonne de puces ne compte pas
            container = container or max(a1 - a0, b1 - b0) >= CONTAINER_MIN
    x0, y0, x1, y1 = _bounds(allp)
    size = max(x1 - x0, y1 - y0)
    span = FRAME[1] - FRAME[0]
    target = span / size if container else min(LINE_GROWTH, span / size)
    s = round(min(max(target, 1.0), MAX_SCALE), 3)
    # Le calage suit le profil rounded, le style principal : les pointes du
    # profil sharp ne doivent pas décaler toute l'icône. Elles bornent seulement
    # l'échelle, pour qu'aucun profil ne sorte de SAFE.
    ex0, ey0, ex1, ey1 = _bounds(every)
    while s > 1.0:
        off = []
        for a, b in ((x0, x1), (y0, y1)):
            a2, b2 = CENTER + s * (a - CENTER), CENTER + s * (b - CENTER)
            if b2 - a2 > span + 1e-6:
                off.append(0.0)
            elif a2 < FRAME[0]:
                off.append(round(FRAME[0] - a2, 3))
            elif b2 > FRAME[1]:
                off.append(round(FRAME[1] - b2, 3))
            else:
                off.append(0.0)
        lo = min(CENTER + s * (ex0 - CENTER) + off[0], CENTER + s * (ey0 - CENTER) + off[1])
        hi = max(CENTER + s * (ex1 - CENTER) + off[0], CENTER + s * (ey1 - CENTER) + off[1])
        if lo >= SAFE[0] - 1e-9 and hi <= SAFE[1] + 1e-9:
            return s, off[0], off[1]
        s = round(s - 0.005, 3)
    return 1.0, 0.0, 0.0


def _r2(v):
    return round(v, 2)


def refine(icon):
    """Copie retouchée d'une icône : angles adoucis, puis mise à la taille de la zone utile."""
    shapes = icon["outline"] + icon["detail"]
    parsed = []
    for s in shapes:
        ps = {}
        if s["k"] == "path":
            plain = parse(s["d"])
            ps["d"] = smooth(plain)
            ps["d_plain"] = plain
            if "d_sharp" in s:
                ps["d_sharp"] = parse(s["d_sharp"])
        parsed.append(ps)
    sc, dx, dy = _fit(shapes, parsed) if icon.get("fit", True) else (1.0, 0.0, 0.0)

    def T(x, y):
        return (CENTER + sc * (x - CENTER) + dx, CENTER + sc * (y - CENTER) + dy)

    new = []
    for s, ps in zip(shapes, parsed):
        t = dict(s)
        if s["k"] == "rect":
            x, y = T(s["x"], s["y"])
            t.update(x=_r2(x), y=_r2(y), w=_r2(s["w"] * sc), h=_r2(s["h"] * sc), r=_r2(s["r"] * sc))
        elif s["k"] == "circle":
            cx, cy = T(s["cx"], s["cy"])
            t.update(cx=_r2(cx), cy=_r2(cy), r=_r2(s["r"] * sc))
        else:
            for key, subs in ps.items():
                t[key] = serialize(transform(subs, sc, dx, dy))
        new.append(t)
    n = len(icon["outline"])
    return new[:n], new[n:], (sc, dx, dy)


def refine_all(icons):
    """Applique la passe à tout le dictionnaire ICONS (en place). Les alias reprennent leur source."""
    for ic in icons.values():
        if not ic.get("alias"):
            ic["outline"], ic["detail"], ic["fit_applied"] = refine(ic)
    for ic in icons.values():
        if ic.get("alias"):
            src = icons[ic["alias"]]
            ic["outline"], ic["detail"], ic["fit_applied"] = src["outline"], src["detail"], src["fit_applied"]
    return icons
