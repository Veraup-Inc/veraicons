import cairosvg, sys
from icons import ICONS
from gen import VARIANTS, render
from collections import defaultdict
cats=defaultdict(list)
for n,ic in ICONS.items(): cats[ic['cat']].append(n)
def sheet(variants, out, only=None, S=56, pad=6, cols=16):
    rowsvg=[]; y=16
    for cat,names in cats.items():
        if only and cat not in only: continue
        rowsvg.append(f'<text x="12" y="{y+14}" font-size="14" font-weight="700" font-family="sans-serif" fill="#0F1D2E">{cat}</text>'); y+=24
        for i,n in enumerate(names):
            for k,v in enumerate(variants):
                idx=i*len(variants)+k; cx=12+(idx%cols)*(S+pad); cy=y+(idx//cols)*(S+pad+12)
                inner=render(n,ICONS[n],v).split('>',1)[1].rsplit('</svg>',1)[0]
                rowsvg.append(f'<rect x="{cx}" y="{cy}" width="{S}" height="{S}" rx="9" fill="#fff" stroke="#E7E4DD"/><svg x="{cx+10}" y="{cy+10}" width="{S-20}" height="{S-20}" viewBox="0 0 24 24" color="#0F1D2E">{inner}</svg>')
                if k==0: rowsvg.append(f'<text x="{cx+S}" y="{cy+S+10}" font-size="7.5" text-anchor="middle" font-family="sans-serif" fill="#5A6472">{n}</text>')
        y+=((len(names)*len(variants)-1)//cols+1)*(S+pad+12)+10
    W=12+cols*(S+pad)+12
    svg=f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{y}"><rect width="100%" height="100%" fill="#FBFAF7"/>{"".join(rowsvg)}</svg>'
    cairosvg.svg2png(bytestring=svg.encode(), write_to=out, output_width=W*1.6)
if __name__=="__main__":
    only=sys.argv[2].split(",") if len(sys.argv)>2 else None
    sheet(["stroke-rounded","solid-rounded"], sys.argv[1], only)
