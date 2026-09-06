"""Régénère polices, packages Flutter/React, CSS web, sprites, catalogue et manifeste. Lancer après gen.py."""
import os, json, re, shutil, subprocess, html
from icons import ICONS, ALIASES
from gen import VARIANTS, render
from solid import outline_path, solid_path
ROOT=os.path.join(os.path.dirname(os.path.abspath(__file__)),"..")
HERE=os.path.dirname(os.path.abspath(__file__))
MONO=["stroke-rounded","stroke-sharp","stroke-standard","solid-rounded","solid-sharp","solid-standard"]
fam={vn:"VeraUpIcons"+"".join(w.title() for w in vn.split("-")) for vn in MONO}
CATS=[("navigation","Navigation"),("actions","Actions"),("arrows","Flèches"),("planning","Planification et suivi"),
      ("time","Temps et planification"),("life","Domaines de vie"),("communication","Communication"),("people","Personnes"),
      ("files","Fichiers et médias"),("status","États"),("finance","Finance et paiements"),
      ("learning","Apprentissage et tech"),("music","Musique et louange"),("networking","Réseau et NFC"),
      ("home","Habitat et colocation"),("games","Jeux")]

# 0. codepoints figés : tools/codepoints.json est la source de vérité, pour qu'ajouter
#    une icône ne renumérote pas les polices déjà publiées.
CPF=f"{HERE}/codepoints.json"
cp=json.load(open(CPF)) if os.path.exists(CPF) else {}
cp={n:v for n,v in cp.items() if n in ICONS}
nxt=max(cp.values(), default=0xf100)+1
for n in sorted(ICONS):
    if n not in cp: cp[n]=nxt; nxt+=1
json.dump(dict(sorted(cp.items())), open(CPF,"w"), indent=1, ensure_ascii=False)

# 1. fonts
tmp=os.path.join(ROOT,".font-src"); shutil.rmtree(tmp,ignore_errors=True)
for vn in MONO:
    v=VARIANTS[vn]; d=f"{tmp}/{vn}"; os.makedirs(d)
    for n,ic in ICONS.items():
        dp = solid_path(ic,v) if v["mode"]=="solid" else outline_path(ic,v)
        open(f"{d}/{n}.svg","w").write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="{dp}" fill-rule="evenodd"/></svg>')
    out=f"{ROOT}/fonts/{vn}"; os.makedirs(out,exist_ok=True)
    rc=f"{tmp}/{vn}.rc.json"
    json.dump({"inputDir":d,"outputDir":out,"name":fam[vn],"fontTypes":["ttf","woff2"],"assetTypes":["json"],
               "normalize":True,"fontHeight":1024,"descent":0,"codepoints":cp},open(rc,"w"))
    subprocess.run(["fantasticon","-c",rc],check=True,capture_output=True)
shutil.rmtree(tmp)
assert json.load(open(f"{ROOT}/fonts/stroke-rounded/{fam['stroke-rounded']}.json"))==cp, "codepoints désynchronisés"
# 2. flutter
pkg=f"{ROOT}/packages/flutter/veraicons"
os.makedirs(f"{pkg}/lib/src",exist_ok=True); os.makedirs(f"{pkg}/fonts",exist_ok=True)
for vn in MONO: shutil.copy(f"{ROOT}/fonts/{vn}/{fam[vn]}.ttf",f"{pkg}/fonts/{fam[vn]}.ttf")
TONES=[vn for vn in VARIANTS if VARIANTS[vn]["mode"] in ("duotone","twotone","bulk")]
shutil.rmtree(f"{pkg}/assets",ignore_errors=True)
for vn in TONES: shutil.copytree(f"{ROOT}/svg/{vn}",f"{pkg}/assets/{vn}")
def camel(n):
    parts=n.split("-"); s=parts[0]+"".join(p.title() for p in parts[1:])
    return s+"_" if s in {"import","export","class","switch","new","in","is","do","for","if","default","break","continue","this","null","true","false","var","final","const","void","return","assert","enum","extends","super","with","part","show","hide"} else s
for vn in MONO:
    cls="VeraUp"+"".join(w.title() for w in vn.split("-"))
    L=[f"/// {vn} — généré par tools/build_packages.py, ne pas modifier à la main.","import 'package:flutter/widgets.dart';","",f"class {cls} {{",f"  {cls}._();",f"  static const String _family = '{fam[vn]}';","  static const String _package = 'veraicons';",""]
    L+=[f"  static const IconData {camel(n)} = IconData(0x{cp[n]:04x}, fontFamily: _family, fontPackage: _package);" for n in sorted(ICONS)]
    L+=["","  static const Map<String, IconData> byName = {"]+[f"    '{n}': {camel(n)}," for n in sorted(ICONS)]+["  };","}",""]
    open(f"{pkg}/lib/src/{vn.replace('-','_')}.dart","w").write("\n".join(L))
def dcamel(vn):
    parts=vn.split("-"); return parts[0]+"".join(w.title() for w in parts[1:])
tone_enum=", ".join(dcamel(vn.split("-")[0] if vn.endswith("-rounded") else vn) for vn in TONES)
V=["import 'package:flutter/widgets.dart';","import 'package:flutter_svg/flutter_svg.dart';","",
   "/// Styles multi-tons rendus depuis les SVG embarqués — généré par tools/build_packages.py.",
   f"enum VeraIconTone {{ {tone_enum} }}","",
   "/// Widget pour les styles à deux tons. La couleur est appliquée via `currentColor`.","///","/// ```dart",
   "/// VeraIcon.tone('home', tone: VeraIconTone.duotone, size: 24, color: Colors.teal)","/// ```",
   "class VeraIcon extends StatelessWidget {",
   "  const VeraIcon.tone(this.name, {super.key, this.tone = VeraIconTone.duotone, this.size = 24, this.color});",
   "  final String name;","  final VeraIconTone tone;","  final double size;","  final Color? color;","",
   "  static const List<String> names = ["]
V+=[f"    '{n}'," for n in sorted(ICONS)]
V+=["  ];","","  @override","  Widget build(BuildContext context) {","    final dir = switch (tone) {"]
V+=[f"      VeraIconTone.{dcamel(vn.split('-')[0] if vn.endswith('-rounded') else vn)} => '{vn}'," for vn in TONES]
V+=["    };","    final c = color ?? IconTheme.of(context).color ?? const Color(0xFF000000);","    return SvgPicture.asset(",
    "      'assets/$dir/$name.svg',","      package: 'veraicons',","      width: size,","      height: size,",
    "      colorFilter: ColorFilter.mode(c, BlendMode.srcIn),","    );","  }","}",""]
open(f"{pkg}/lib/src/vera_icon.dart","w").write("\n".join(V))
old=open(f"{pkg}/pubspec.yaml").read()
ver=re.search(r"^version:\s*(\S+)",old,re.M).group(1)
# `publish_to: none` verrouille la publication sur pub.dev. Le retirer ouvre
# `flutter pub add veraicons` sans arguments — mais pub.dev redistribue
# publiquement, ce que la LICENSE actuelle interdit. Voir README.
P=[f"name: veraicons",
   f"description: VeraUp Icons — {len(ICONS)} symboles en {len(VARIANTS)} styles (stroke, solid, duotone, twotone, bulk). Bibliothèque officielle VeraUp Inc.",
   f"version: {ver}"]
if "publish_to: none" in old: P+=["publish_to: none"]
P+=["repository: https://github.com/Veraup-Inc/veraicons",
   "issue_tracker: https://github.com/Veraup-Inc/veraicons/issues",
   "documentation: https://veraup-inc.github.io/veraicons/",
   "topics: [icons, ui, svg, icon-font]",
   "environment:",'  sdk: ">=3.0.0 <4.0.0"','  flutter: ">=3.10.0"',
   "dependencies:","  flutter:","    sdk: flutter","  flutter_svg: ^2.0.10","flutter:","  assets:"]
P+=[f"    - assets/{vn}/" for vn in TONES]+["  fonts:"]
for vn in MONO: P+=[f"    - family: {fam[vn]}","      fonts:",f"        - asset: fonts/{fam[vn]}.ttf"]
open(f"{pkg}/pubspec.yaml","w").write("\n".join(P)+"\n")
for f in ("LICENSE","CHANGELOG.md"): shutil.copy(f"{ROOT}/{f}",f"{pkg}/{f}")
cls_list=", ".join("`VeraUp"+"".join(w.title() for w in vn.split("-"))+"`" for vn in MONO)
tone_list=", ".join(dcamel(vn.split("-")[0] if vn.endswith("-rounded") else vn) for vn in TONES)
open(f"{pkg}/README.md","w").write(f"""# veraicons

{len(ICONS)} icônes en {len(VARIANTS)} styles, une seule source par icône. Grille 24 px, trait 1,5 px.

## Installation
```bash
flutter pub add veraicons --git-url=https://github.com/Veraup-Inc/veraicons.git \\
  --git-path=packages/flutter/veraicons --git-ref=v{ver}
```

## Styles monochromes (police d'icônes — `Icon()` standard)
```dart
import 'package:veraicons/veraicons.dart';

Icon(VeraUpStrokeRounded.home)
Icon(VeraUpSolidRounded.wallet, color: Colors.teal)
Icon(VeraUpStrokeSharp.timeline)
```
Classes : {cls_list}. Mêmes noms et mêmes codepoints dans les {len(MONO)} polices,
donc on change de style sans toucher au nom.

## Styles deux tons
```dart
VeraIcon.tone('home', tone: VeraIconTone.duotone, size: 28, color: Colors.teal)
VeraIcon.tone('life-season', tone: VeraIconTone.bulk)
```
Tons disponibles : {tone_list}.

## Noms
{len(ICONS)} noms, dont {len(ALIASES)} alias (`add` → `plus`, `delete` → `trash`…).
Liste complète : `VeraIcon.names` ou `VeraUpStrokeRounded.byName`.
Catalogue : https://veraup-inc.github.io/veraicons/
""")
# 3. react
rp=f"{ROOT}/packages/react"; shutil.rmtree(f"{rp}/src/icons",ignore_errors=True); os.makedirs(f"{rp}/src/icons")
def pascal(n): return "".join(p.title() for p in n.split("-"))
BODIES={}
idx=[]
for n in sorted(ICONS):
    comp=pascal(n); bodies={}
    for vn in VARIANTS:
        b=render(n,ICONS[n],vn).split(">",1)[1].rsplit("</svg>",1)[0].strip()
        bodies[vn]=re.sub(r'\s(stroke-width|stroke-linecap|stroke-linejoin|fill-rule)="',lambda m:" "+{"stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","fill-rule":"fillRule"}[m.group(1)]+'="',b)
    BODIES[n]=bodies
    src=["import * as React from 'react';","import type { VeraIconProps } from '../types.js';","","const bodies: Record<string, string> = {"]+[f"  '{k}': {json.dumps(v)}," for k,v in bodies.items()]+["};","",
         f"export const {comp} = React.forwardRef<SVGSVGElement, VeraIconProps>(","  ({ variant = 'stroke-rounded', size = 24, color = 'currentColor', ...rest }, ref) => (",
         "    <svg ref={ref} xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width={size} height={size} color={color}","         dangerouslySetInnerHTML={{ __html: bodies[variant] ?? bodies['stroke-rounded'] }} {...rest} />","  )",");",f"{comp}.displayName = '{comp}';",""]
    open(f"{rp}/src/icons/{comp}.tsx","w").write("\n".join(src)); idx.append(f"export {{ {comp} }} from './icons/{comp}.js';")
open(f"{rp}/src/index.ts","w").write("export * from './types.js';\n"+"\n".join(idx)+"\n")
open(f"{rp}/src/types.ts","w").write("\n".join([
 "// Généré par tools/build_packages.py, ne pas modifier à la main.",
 "import type { SVGProps } from 'react';","export type VeraIconVariant ="]
 +[f"  | '{vn}'" for vn in VARIANTS]
 +[";","export interface VeraIconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {",
   "  variant?: VeraIconVariant;","  size?: number | string;","  color?: string;","}",""]))
rpkg=json.load(open(f"{rp}/package.json"))
rpkg["description"]=f"VeraUp Icons — {len(ICONS)} icônes, {len(VARIANTS)} styles, composants React/Next.js."
json.dump(rpkg,open(f"{rp}/package.json","w"),indent=2,ensure_ascii=False); open(f"{rp}/package.json","a").write("\n")
open(f"{rp}/README.md","w").write(f"""# veraicons

```bash
npm i veraicons        # ou : pnpm add veraicons · yarn add veraicons
```

```tsx
import {{ Home, Wallet, Church }} from 'veraicons';

<Home />                                  // stroke-rounded par défaut
<Wallet variant="solid-rounded" size={{28}} color="#0F766E" />
<Church variant="duotone-rounded" />
```
`variant` : {' · '.join(VARIANTS)}.
La couleur suit `currentColor`, donc `className="text-teal-600"` fonctionne aussi.

{len(ICONS)} icônes, dont {len(ALIASES)} alias (`add` → `plus`, `delete` → `trash`…).
Catalogue : https://veraup-inc.github.io/veraicons/
""")
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
# 5. sprites SVG — un fichier par style, <use href="sprite.svg#nom">
sp=f"{ROOT}/sprites"; os.makedirs(sp,exist_ok=True)
for vn in VARIANTS:
    sym="".join(f'<symbol id="{n}" viewBox="0 0 24 24">{render(n,ICONS[n],vn).split(">",1)[1].rsplit("</svg>",1)[0].strip()}</symbol>' for n in sorted(ICONS))
    open(f"{sp}/{vn}.svg","w").write(f'<svg xmlns="http://www.w3.org/2000/svg" style="display:none">{sym}</svg>')
# 6. tokens de design
json.dump({"grid":24,"viewBox":[0,0,24,24],"stroke":1.5,"bold_stroke":2.6,"secondary_opacity":0.4,
           "duotone_fill_opacity":0.25,"default_variant":"stroke-rounded","recommended_sizes":[16,20,24,28,32],
           "color":"currentColor",
           "profiles":{"rounded":{"cap":"round","join":"round","corner_scale":1.0},
                       "standard":{"cap":"square","join":"round","corner_scale":0.5},
                       "sharp":{"cap":"butt","join":"miter","corner_scale":0.0}},
           "modes":["stroke","solid","duotone","twotone","bulk"]},
          open(f"{ROOT}/tokens.json","w"),indent=1,ensure_ascii=False)
# 7. manifeste
json.dump({"name":"VeraUp Icons","grid":24,"stroke":1.5,"variants":list(VARIANTS),"count":len(ICONS),
           "icons":{n:{"category":ic["cat"],"codepoint":cp[n],**({"alias":ic["alias"]} if ic.get("alias") else {})}
                    for n,ic in sorted(ICONS.items())}},
          open(f"{ROOT}/icons.json","w"),indent=1,ensure_ascii=False)
# 8. catalogue GitHub Pages
btn=lambda vn,i: f'<button aria-pressed="{"true" if i==0 else "false"}" data-v="{vn}">{vn.replace("-rounded","").replace("-"," ")}</button>'
secs=[]
for key,label in CATS:
    names=sorted(n for n,ic in ICONS.items() if ic["cat"]==key)
    if not names: continue
    def fig(n):
        al=ICONS[n].get("alias")
        at=' data-alias="%s"'%al if al else ""
        return f'<figure class="i" data-name="{n}"{at} title="Copier « {n} »"><svg viewBox="0 0 24 24"></svg><figcaption>{n}</figcaption></figure>'
    figs="".join(fig(n) for n in names)
    secs.append(f'<section data-cat="{key}"><h2>{html.escape(label)} <small>{len(names)}</small></h2><div class="grid">{figs}</div></section>')
data=json.dumps({n:BODIES[n] for n in sorted(ICONS)},ensure_ascii=False)
open(f"{ROOT}/docs/index.html","w").write(
f"""<!doctype html><html lang="fr"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>VeraUp Icons — catalogue</title>
<style>
:root{{--ink:#0F1D2E;--mute:#5A6472;--line:#E7E4DD;--bg:#FBFAF7;--accent:#0F766E}}
*{{box-sizing:border-box}}body{{margin:0;background:var(--bg);color:var(--ink);font:15px/1.45 Inter,system-ui,-apple-system,sans-serif}}
header{{position:sticky;top:0;background:rgba(251,250,247,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--line);padding:18px 40px;display:flex;gap:18px;align-items:center;flex-wrap:wrap;z-index:2}}
h1{{font-size:20px;margin:0;letter-spacing:-.02em}}h1 span{{color:var(--mute);font-weight:400;margin-left:8px}}
input{{flex:1;min-width:220px;padding:9px 14px;border:1px solid var(--line);border-radius:10px;background:#fff;font:inherit}}
.styles{{display:flex;gap:4px;background:#fff;border:1px solid var(--line);border-radius:10px;padding:3px;flex-wrap:wrap}}
.styles button{{border:0;background:transparent;padding:6px 10px;border-radius:7px;font:inherit;font-size:13px;color:var(--mute);cursor:pointer}}
.styles button[aria-pressed=true]{{background:var(--ink);color:#fff}}
main{{padding:12px 40px 60px}}h2{{font-size:16px;margin:34px 0 12px}}h2 small{{color:var(--mute);font-weight:400;font-size:13px;margin-left:6px}}
.grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(112px,1fr));gap:8px}}
.i{{margin:0;background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px 8px 10px;text-align:center;cursor:pointer;transition:border-color .12s;position:relative}}.i:hover{{border-color:var(--accent)}}
.i svg{{width:28px;height:28px;color:var(--ink);display:block;margin:0 auto 8px}}figcaption{{font-size:11px;color:var(--mute);word-break:break-all}}
.i[data-alias]::after{{content:'alias';position:absolute;top:6px;right:6px;font-size:9px;color:var(--mute);background:var(--bg);border-radius:4px;padding:1px 4px}}
.i.copied{{border-color:var(--accent)}}.i.copied figcaption{{color:var(--accent)}}
.hide{{display:none}}
</style>
<header><h1>VeraUp Icons<span>{len(ICONS)} icônes · {len(VARIANTS)} styles · grille 24 · trait 1,5</span></h1>
<input id="q" placeholder="Rechercher (home, wallet, sport, timeline…)" autofocus>
<div class="styles" id="styles">{''.join(btn(vn,i) for i,vn in enumerate(VARIANTS))}</div></header>
<main>{''.join(secs)}</main>
<script>const DATA={data};let variant='stroke-rounded';
function paint(){{document.querySelectorAll('.i').forEach(f=>{{f.querySelector('svg').innerHTML=DATA[f.dataset.name][variant]}})}}
document.getElementById('styles').addEventListener('click',e=>{{const b=e.target.closest('button');if(!b)return;variant=b.dataset.v;document.querySelectorAll('#styles button').forEach(x=>x.setAttribute('aria-pressed',x===b));paint()}});
document.getElementById('q').addEventListener('input',e=>{{const q=e.target.value.trim().toLowerCase();document.querySelectorAll('.i').forEach(f=>f.classList.toggle('hide',q&&!(f.dataset.name+' '+(f.dataset.alias||'')).includes(q)));document.querySelectorAll('section').forEach(s=>s.classList.toggle('hide',!s.querySelector('.i:not(.hide)')))}});
document.querySelectorAll('.i').forEach(f=>f.addEventListener('click',()=>{{navigator.clipboard&&navigator.clipboard.writeText(f.dataset.name);f.classList.add('copied');setTimeout(()=>f.classList.remove('copied'),700)}}));
paint();
</script></html>""")
missing=[c for c in {ic["cat"] for ic in ICONS.values()} if c not in dict(CATS)]
assert not missing, f"catégories sans libellé : {missing}"
print("ok",len(ICONS),"icônes ·",len(VARIANTS),"styles ·",len(ALIASES),"alias")
