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
      ("home","Habitat et colocation"),("games","Jeux"),
      # Catalogue Priovely — dessins choisis par les gens pour leurs catégories
      ("work","Métiers et travail"),("science","Études et savoir"),("care","Santé et bien-être"),
      ("sport","Sport et mouvement"),("household","Maison et quotidien"),("food","Repas et cuisine"),
      ("bonds","Proches et liens"),("spirit","Esprit et foi"),("hobbies","Loisirs et création"),
      ("travel","Transport et voyage"),("paperwork","Argent et administratif")]

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
DART_RESERVED={"assert","break","case","catch","class","const","continue","default","do","else","enum",
 "extends","false","final","finally","for","if","in","is","new","null","rethrow","return","super","switch",
 "this","throw","true","try","var","void","while","with"}
def camel(n):
    parts=n.split("-"); s=parts[0]+"".join(p.title() for p in parts[1:])
    # Mots réservés Dart : interdits comme identifiants, il faut les suffixer.
    return s+"_" if s in DART_RESERVED else s
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
RVER=json.load(open(f"{ROOT}/packages/react/package.json"))["version"]
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
Le package n'est pas sur pub.dev : `ref` pointe sur un tag, la version est donc figée
et `flutter pub upgrade` ne la bougera pas. Pour monter de version, relancer la commande
avec le nouveau tag — ou éditer `ref:` dans `pubspec.yaml` puis `flutter pub get`.

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
idx=[]
for n in sorted(ICONS):
    comp=pascal(n); bodies={}
    for vn in VARIANTS:
        # Surtout pas de camelCase ici. Ces chaînes partent dans
        # dangerouslySetInnerHTML, donc par le parseur HTML, qui met les noms
        # d'attributs en minuscules : `strokeWidth` devient `strokewidth`, que
        # le SVG ignore. Le trait retombait à 1 px et `fillRule` à `nonzero`,
        # ce qui rebouchait les trous de toutes les icônes solid.
        bodies[vn]=render(n,ICONS[n],vn).split(">",1)[1].rsplit("</svg>",1)[0].strip()
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
missing=[c for c in {ic["cat"] for ic in ICONS.values()} if c not in dict(CATS)]
assert not missing, f"catégories sans libellé : {missing}"
USED=[{"key":k,"label":l,"count":sum(1 for i in ICONS.values() if i["cat"]==k)} for k,l in CATS
      if any(i["cat"]==k for i in ICONS.values())]
json.dump({"name":"VeraUp Icons","version":RVER,"grid":24,"stroke":1.5,"variants":list(VARIANTS),
           "count":len(ICONS),"categories":USED,
           "icons":{n:{"category":ic["cat"],"codepoint":cp[n],**({"alias":ic["alias"]} if ic.get("alias") else {})}
                    for n,ic in sorted(ICONS.items())}},
          open(f"{ROOT}/icons.json","w"),indent=1,ensure_ascii=False)

# 8. données du catalogue React — le package gallery ne duplique rien, il lit ceci
gal=f"{ROOT}/packages/gallery/src"; os.makedirs(gal,exist_ok=True)
G=["// Généré par tools/build_packages.py — ne pas modifier à la main.",
   "// Ce fichier est la seule source de vérité du catalogue : il est réécrit à",
   "// chaque build, le site et le composant ne peuvent donc pas se désynchroniser.",
   "",
   'export type Variant =',
   *[f"  | '{vn}'" for vn in VARIANTS], "",
   "export interface IconMeta {", "  category: string", "  codepoint: number",
   "  /** Nom du glyphe source quand cette icône est un alias. */", "  alias?: string", "}", "",
   "export interface Category {", "  key: string", "  label: string", "  count: number", "}", "",
   f"export const VERSION = {json.dumps(RVER)}", "",
   f"export const VARIANTS: readonly Variant[] = {json.dumps(list(VARIANTS))} as const", "",
   f"export const CATEGORIES: readonly Category[] = {json.dumps(USED, ensure_ascii=False)}", "",
   "export const ICONS: Readonly<Record<string, IconMeta>> = " +
   json.dumps({n:{"category":ic["cat"],"codepoint":cp[n],**({"alias":ic["alias"]} if ic.get("alias") else {})}
               for n,ic in sorted(ICONS.items())}, ensure_ascii=False, indent=2), "",
   "export const ICON_NAMES: readonly string[] = Object.keys(ICONS)", ""]
open(f"{gal}/generated.ts","w").write("\n".join(G))
# Le catalogue du site est désormais un vrai composant React :
# packages/gallery, construit par tools/build.sh vers docs/.
print("ok",len(ICONS),"icônes ·",len(VARIANTS),"styles ·",len(ALIASES),"alias")
