# VeraUp Icons

Bibliothèque d'icônes officielle de VeraUp Inc. — **368 icônes, 10 styles**, une seule source par icône.

Styles : `stroke-rounded` · `stroke-sharp` · `stroke-standard` · `solid-rounded` · `solid-sharp` · `solid-standard` · `duotone-rounded` · `duotone-standard` · `twotone-rounded` · `bulk-rounded`.
Grille 24 px, trait 1,5 px, couleur via `currentColor`. Catalogue interactif : [veraup-inc.github.io/veraicons](https://veraup-inc.github.io/veraicons/) (source : `docs/index.html`, GitHub Pages).


## Flutter
```yaml
dependencies:
  veraicons:
    git:
      url: https://github.com/Veraup-Inc/veraicons.git
      path: packages/flutter/veraicons
      ref: v1.0.0
```
```dart
import 'package:veraicons/veraicons.dart';

Icon(VeraUpStrokeRounded.home)
Icon(VeraUpSolidRounded.wallet, color: Colors.teal)
VeraIcon.tone('church', tone: VeraIconTone.duotone, size: 28)
```

## React / Next.js
```bash
npm i veraicons        # ou : pnpm add veraicons · yarn add veraicons
```
```tsx
import { Home, Wallet } from 'veraicons';
<Home /> <Wallet variant="bulk-rounded" size={28} />
```
Package ESM avec types TypeScript, `react >= 17` en peer dependency.

## Site web (HTML/CSS, Laravel, WordPress…) — via jsDelivr, sans build
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Veraup-Inc/veraicons@v1.0.0/packages/web/veraup-icons.css">
<i class="vi-stroke-rounded vi-home"></i>
<i class="vi-solid-rounded vi-wallet" style="color:#0F766E;font-size:28px"></i>
```
Un SVG isolé :
```html
<img src="https://cdn.jsdelivr.net/gh/Veraup-Inc/veraicons@v1.1.0/svg/duotone-rounded/nfc.svg" width="24">
```
Ou un sprite, pour n'appeler qu'un seul fichier :
```html
<svg width="24" height="24"><use href="https://cdn.jsdelivr.net/gh/Veraup-Inc/veraicons@v1.1.0/sprites/stroke-rounded.svg#timeline"/></svg>
```

## Noms et alias
33 icônes sont des **alias** : un nom métier qui rend le même dessin qu'un glyphe existant
(`add` → `plus`, `delete` → `trash`, `sleep` → `bed`, `work` → `briefcase`…). Un alias est une
icône à part entière — son SVG, son composant React, son `IconData` Flutter et son codepoint
existent bel et bien. `icons.json` indique le glyphe source dans le champ `alias`.

## Structure
```
svg/<style>/<nom>.svg        SVG par style
sprites/<style>.svg          sprite SVG par style (<use href="…#nom">)
fonts/<style>/               TTF, WOFF2, codepoints (6 styles monochromes)
packages/flutter/veraicons  package Flutter
packages/react               package npm (TSX)
packages/web                 CSS + polices pour le web
docs/index.html              catalogue interactif (GitHub Pages)
tools/                       générateur — voir CONTRIBUTING.md
icons.json                   manifeste (noms, catégories, codepoints, alias)
tokens.json                  tokens de design (grille, traits, opacités, profils)
```

## Publier une nouvelle version
1. Modifier `tools/icons.py`, lancer `tools/build.sh`.
2. Mettre à jour `CHANGELOG.md` + versions (`pubspec.yaml`, `package.json`).
3. `git tag vX.Y.Z && git push --tags` — Flutter et jsDelivr pointent sur le tag.
4. React : `cd packages/react && npm publish`.
