"""Audit géométrique des icônes. Repère les défauts structurels du rendu solid.

    python3 audit.py            # tableau des icônes suspectes
    python3 audit.py --all      # toutes, même saines
    python3 audit.py --fusion   # ajoute le contrôle indicatif de fusion

Ce que ça cherche, par ordre de gravité :
  hors-cadre  géométrie qui déborde du viewBox 0..24 (l'icône est rognée)
  detail-perdu  un trait de `detail` qui ne touche pas la silhouette : il est
                visible en stroke mais disparaît en solid, les deux styles ne
                montrent alors pas le même dessin
  fusion      (--fusion) deux formes se touchent tout juste : le solid peut les
              fondre en une seule tache. Indicatif seulement — un bras qui touche
              un torse, une pointe de flèche sur sa hampe, c'est voulu.
  forme-fantome  une forme de `outline` n'apporte aucune surface au solid : le
              stroke la dessine, le solid la perd
  vide        le solid est quasi vide

Le débordement est mesuré sur le rendu stroke de chacun des dix styles : c'est
celui que l'application affiche, et les profils sharp/standard changent les
tracés (d_sharp) comme les terminaisons.
"""
import sys, math
from shapely.ops import unary_union
from icons import ICONS
from gen import VARIANTS
from solid import geom_shapes

SW, CUT = 1.5, 1.9
LIMIT = (0.0, 24.0)


def body_and_cuts(icon, v):
    cap = {"round": 1, "butt": 2, "square": 3}[v["cap"]]
    join = {"round": 1, "miter": 2, "bevel": 3}[v["join"]]
    parts = []
    for s in icon["outline"]:
        poly, lines = geom_shapes(s, v, SW)
        w = s.get("sw", SW) / 2
        if s.get("sw"):
            ls = lines if isinstance(lines, list) else [lines]
            parts += [l.buffer(w, cap_style=cap, join_style=join, mitre_limit=2.0) for l in ls]
        else:
            parts.append(poly.buffer(w, join_style=join, mitre_limit=2.0))
    body = unary_union(parts)
    cuts = []
    for s in icon["detail"]:
        poly, lines = geom_shapes(s, v, SW)
        ls = lines if isinstance(lines, list) else [lines]
        c = 1 if s.get("dot") else cap
        cuts.append((s, unary_union([l.buffer(CUT / 2, cap_style=c, join_style=join, mitre_limit=2.0) for l in ls])))
    return body, cuts


def audit(name, icon, v):
    body, cuts = body_and_cuts(icon, v)
    flags = []
    # traits de detail qui ne mordent pas la silhouette
    lost = sum(1 for s, cg in cuts if body.intersection(cg).area < 0.05)
    if lost:
        flags.append(("detail-perdu", f"{lost}/{len(cuts)}"))
    solid = body.difference(unary_union([cg for _, cg in cuts])) if cuts else body
    if solid.is_empty:
        return [("vide", "solid vide")], (0, 0, 0, 0)
    x0, y0, x1, y1 = solid.bounds
    over = max(LIMIT[0] - x0, LIMIT[0] - y0, x1 - LIMIT[1], y1 - LIMIT[1])
    if over > 0.02:
        flags.append(("hors-cadre", f"+{over:.2f}"))
    if solid.area < 6:
        flags.append(("vide", f"aire {solid.area:.1f}"))
    g = ghosts(icon, v)
    if g:
        flags.append(("forme-fantome", f"{g}/{len(icon['outline'])}"))
    return flags, (x0, y0, x1, y1)


def ghosts(icon, v):
    """Formes de `outline` qui n'apportent aucune surface au solid.

    Le stroke les dessine, le solid les perd : les deux styles ne montrent pas
    le même dessin.
    """
    cap = {"round": 1, "butt": 2, "square": 3}[v["cap"]]
    join = {"round": 1, "miter": 2, "bevel": 3}[v["join"]]
    n = 0
    for s in icon["outline"]:
        poly, lines = geom_shapes(s, v, SW)
        w = s.get("sw", SW) / 2
        if s.get("sw") or poly is None or poly.is_empty:
            ls = lines if isinstance(lines, list) else [lines]
            c = 1 if s.get("dot") else cap
            a = unary_union([l.buffer(w, cap_style=c, join_style=join, mitre_limit=2.0) for l in ls]).area
        else:
            a = poly.buffer(w, join_style=join, mitre_limit=2.0).area
        if a < 0.01:
            n += 1
    return n


def merges(icon, v):
    """Formes de `outline` qui se collent en solid.

    Le solid dilate chaque forme de sw/2 pour retrouver le bord extérieur du
    trait. Deux formes séparées d'exactement sw se touchent alors, et le solid
    les fond en une seule tache là où le stroke montre encore deux pièces.
    """
    cap = {"round": 1, "butt": 2, "square": 3}[v["cap"]]
    join = {"round": 1, "miter": 2, "bevel": 3}[v["join"]]
    blobs = []
    for s in icon["outline"]:
        poly, lines = geom_shapes(s, v, SW)
        w = s.get("sw", SW) / 2
        if s.get("sw"):
            ls = lines if isinstance(lines, list) else [lines]
            blobs.append(unary_union([l.buffer(w, cap_style=cap, join_style=join, mitre_limit=2.0) for l in ls]))
        else:
            blobs.append(poly.buffer(w, join_style=join, mitre_limit=2.0))
    tight = 0
    for i in range(len(blobs)):
        for j in range(i + 1, len(blobs)):
            a, b = blobs[i], blobs[j]
            if a.intersects(b):
                # se recouvrent franchement : c'est voulu (silhouette composée)
                if a.intersection(b).area > 0.25:
                    continue
                tight += 1
            elif a.distance(b) < 0.3:
                tight += 1
    return tight


def stroke_bounds(icon, v):
    """Cadre du rendu stroke : c'est celui-là que l'app affiche le plus souvent."""
    cap = {"round": 1, "butt": 2, "square": 3}[v["cap"]]
    join = {"round": 1, "miter": 2, "bevel": 3}[v["join"]]
    parts = []
    for s in icon["outline"] + icon["detail"]:
        _, lines = geom_shapes(s, v, SW)
        ls = lines if isinstance(lines, list) else [lines]
        c = 1 if s.get("dot") else cap
        parts += [l.buffer(SW / 2, cap_style=c, join_style=join, mitre_limit=2.0) for l in ls]
    return unary_union(parts).bounds


def main():
    show_all = "--all" in sys.argv
    v = VARIANTS["solid-rounded"]
    rows = []
    for name, icon in sorted(ICONS.items()):
        if icon.get("alias"):
            continue
        try:
            flags, _ = audit(name, icon, v)
            worst, worst_v = 0.0, ""
            for vn, vv in VARIANTS.items():
                x0, y0, x1, y1 = stroke_bounds(icon, vv)
                o = max(LIMIT[0] - x0, LIMIT[0] - y0, x1 - LIMIT[1], y1 - LIMIT[1])
                if o > worst:
                    worst, worst_v = o, vn
            if worst > 0.02:
                flags = [f for f in flags if f[0] != "hors-cadre"]
                flags.append(("hors-cadre", f"+{worst:.2f} en {worst_v}"))
            if "--fusion" in sys.argv:
                m = merges(icon, v)
                if m:
                    flags.append(("fusion", f"{m} paire(s)"))
        except Exception as e:
            flags = [("erreur", type(e).__name__)]
        if flags or show_all:
            rows.append((name, icon["cat"], flags))
    order = {"vide": 0, "forme-fantome": 1, "hors-cadre": 2, "detail-perdu": 3, "fusion": 4, "erreur": 0}
    rows.sort(key=lambda r: (min((order.get(f[0], 9) for f in r[2]), default=9), r[0]))
    for name, cat, flags in rows:
        print(f"{name:26} {cat:12} " + "  ".join(f"{k}({d})" for k, d in flags))
    print(f"\n{len(rows)} signalées sur {sum(1 for i in ICONS.values() if not i.get('alias'))} dessins propres")


if __name__ == "__main__":
    main()
