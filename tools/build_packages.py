"""Régénère polices, packages Flutter/React, CSS web, catalogue et manifeste. Lancer après gen.py."""
import os, json, re, shutil, subprocess
from collections import defaultdict
from icons import ICONS
from gen import VARIANTS, render
from solid import outline_path, solid_path
ROOT=os.path.join(os.path.dirname(os.path.abspath(__file__)),"..")
MONO=["stroke-rounded","stroke-sharp","stroke-standard","solid-rounded","solid-sharp","solid-standard"]
fam={vn:"VeraUpIcons"+"".join(w.title() for w in vn.split("-")) for vn in MONO}
# 1. fonts
tmp=os.path.join(ROOT,".font-src"); shutil.rmtree(tmp,ignore_errors=True)
for vn in MONO:
    v=VARIANTS[vn]; d=f"{tmp}/{vn}"; os.makedirs(d)
    for n,ic in ICONS.items():
        dp = solid_path(ic,v) if v["mode"]=="solid" else outline_path(ic,v)
        open(f"{d}/{n}.svg","w").write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="{dp}" fill-rule="evenodd"/></svg>')
    out=f"{ROOT}/fonts/{vn}"; os.makedirs(out,exist_ok=True)
    subprocess.run(["fantasticon",d,"-o",out,"-n",fam[vn],"-t","ttf","woff2","-g","json","--normalize","--font-height","1024","--descent","0"],check=True,capture_output=True)
shutil.rmtree(tmp)
cp=json.load(open(f"{ROOT}/fonts/stroke-rounded/{fam['stroke-rounded']}.json"))
# 2. flutter
pkg=f"{ROOT}/packages/flutter/veraicons"
os.makedirs(f"{pkg}/lib/src",exist_ok=True); os.makedirs(f"{pkg}/fonts",exist_ok=True)
for vn in MONO: shutil.copy(f"{ROOT}/fonts/{vn}/{fam[vn]}.ttf",f"{pkg}/fonts/{fam[vn]}.ttf")
for vn in ["duotone-rounded","twotone-rounded","bulk-rounded"]:
    d=f"{pkg}/assets/{vn}"; shutil.rmtree(d,ignore_errors=True); shutil.copytree(f"{ROOT}/svg/{vn}",d)
def camel(n):
    parts=n.split("-"); s=parts[0]+"".join(p.title() for p in parts[1:])
    return s+"_" if s in {"import","export","class","switch","new","in","is","do","for","if","default"} else s
for vn in MONO:
    cls="VeraUp"+"".join(w.title() for w in vn.split("-"))
    L=[f"/// {vn} — généré par tools/build_packages.py, ne pas modifier à la main.","import 'package:flutter/widgets.dart';","",f"class {cls} {{",f"  {cls}._();",f"  static const String _family = '{fam[vn]}';","  static const String _package = 'veraicons';",""]
    L+=[f"  static const IconData {camel(n)} = IconData(0x{cp[n]:04x}, fontFamily: _family, fontPackage: _package);" for n in sorted(ICONS)]
    L+=["","  static const Map<String, IconData> byName = {"]+[f"    '{n}': {camel(n)}," for n in sorted(ICONS)]+["  };","}",""]
    open(f"{pkg}/lib/src/{vn.replace('-','_')}.dart","w").write("\n".join(L))
# 3. react
rp=f"{ROOT}/packages/react"; shutil.rmtree(f"{rp}/src/icons",ignore_errors=True); os.makedirs(f"{rp}/src/icons")
def pascal(n): return "".join(p.title() for p in n.split("-"))
idx=[]
for n in sorted(ICONS):
    comp=pascal(n); bodies={}
    for vn in VARIANTS:
        b=render(n,ICONS[n],vn).split(">",1)[1].rsplit("</svg>",1)[0].strip()
        bodies[vn]=re.sub(r'\s(stroke-width|stroke-linecap|stroke-linejoin|fill-rule)="',lambda m:" "+{"stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","fill-rule":"fillRule"}[m.group(1)]+'="',b)
    src=["import * as React from 'react';","import type { VeraIconProps } from '../types.js';","","const bodies: Record<string, string> = {"]+[f"  '{k}': {json.dumps(v)}," for k,v in bodies.items()]+["};","",
         f"export const {comp} = React.forwardRef<SVGSVGElement, VeraIconProps>(","  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (",
         "    <svg ref={ref} xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width={size} height={size} color={color}","         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />","  )",");",f"{comp}.displayName = '{comp}';",""]
    open(f"{rp}/src/icons/{comp}.tsx","w").write("\n".join(src)); idx.append(f"export {{ {comp} }} from './icons/{comp}.js';")
open(f"{rp}/src/index.ts","w").write("export * from './types.js';\n"+"\n".join(idx)+"\n")
# 4. web css
web=f"{ROOT}/packages/web"; os.makedirs(f"{web}/fonts",exist_ok=True)
css=[]
for vn in MONO:
    shutil.rmtree(f"{web}/fonts/{vn}",ignore_errors=True); shutil.copytree(f"{ROOT}/fonts/{vn}",f"{web}/fonts/{vn}")
    css.append(f"@font-face{{font-family:'{fam[vn]}';src:url('fonts/{vn}/{fam[vn]}.woff2') format('woff2');font-display:block}}")
    css.append(f".vi-{vn}{{font-family:'{fam[vn]}';font-style:normal;font-weight:normal;line-height:1;display:inline-block;-webkit-font-smoothing:antialiased}}")
css+=[f".vi-{n}::before{{content:'\\{cp[n]:x}'}}" for n in sorted(ICONS)]
open(f"{web}/veraup-icons.css","w").write("\n".join(css))
os.makedirs(f"{ROOT}/fonts/css",exist_ok=True); open(f"{ROOT}/fonts/css/veraup-icons.css","w").write("\n".join(css).replace("url('fonts/","url('../"))
# 5. manifest
json.dump({"name":"VeraUp Icons","grid":24,"stroke":1.5,"variants":list(VARIANTS),"count":len(ICONS),"icons":{n:{"category":ic["cat"],"codepoint":cp[n]} for n,ic in ICONS.items()}},open(f"{ROOT}/icons.json","w"),indent=1,ensure_ascii=False)
print("ok",len(ICONS))
