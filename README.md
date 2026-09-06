# VeraUp Icons

Bibliothèque d'icônes officielle de VeraUp Inc. — **317 icônes, 9 styles**, une seule source par icône.

Styles : `stroke-rounded` · `stroke-sharp` · `stroke-standard` · `solid-rounded` · `solid-sharp` · `solid-standard` · `duotone-rounded` · `twotone-rounded` · `bulk-rounded`.
Grille 24 px, trait 1,5 px, couleur via `currentColor`. Catalogue interactif : `docs/index.html` (publié sur GitHub Pages).

> Remplace `veraup/veraup-icons` ci-dessous par le chemin réel de ton dépôt.

## Flutter
```yaml
dependencies:
  veraup_icons:
    git:
      url: https://github.com/veraup/veraup-icons.git
      path: packages/flutter/veraup_icons
      ref: v1.0.0
```
```dart
import 'package:veraup_icons/veraup_icons.dart';

Icon(VeraUpStrokeRounded.home)
Icon(VeraUpSolidRounded.wallet, color: Colors.teal)
VeraIcon.tone('church', tone: VeraIconTone.duotone, size: 28)
```

## React / Next.js
```bash
npm i @veraup/icons-react            # après `npm publish` depuis packages/react
```
```tsx
import { Home, Wallet } from '@veraup/icons-react';
<Home /> <Wallet variant="bulk-rounded" size={28} />
```

## Site web (HTML/CSS, Laravel, WordPress…) — via jsDelivr, sans build
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/veraup/veraup-icons@v1.0.0/packages/web/veraup-icons.css">
<i class="vi-stroke-rounded vi-home"></i>
<i class="vi-solid-rounded vi-wallet" style="color:#0F766E;font-size:28px"></i>
```
Un SVG isolé :
```html
<img src="https://cdn.jsdelivr.net/gh/veraup/veraup-icons@v1.0.0/svg/duotone-rounded/nfc.svg" width="24">
```

## Structure
```
svg/<style>/<nom>.svg        SVG par style
fonts/<style>/               TTF, WOFF2, codepoints (6 styles monochromes)
packages/flutter/veraup_icons  package Flutter
packages/react               package npm (TSX)
packages/web                 CSS + polices pour le web
docs/index.html              catalogue interactif (GitHub Pages)
tools/                       générateur — voir CONTRIBUTING.md
icons.json                   manifeste (noms, catégories, codepoints)
```

## Publier une nouvelle version
1. Modifier `tools/icons.py`, lancer `tools/build.sh`.
2. Mettre à jour `CHANGELOG.md` + versions (`pubspec.yaml`, `package.json`).
3. `git tag vX.Y.Z && git push --tags` — Flutter et jsDelivr pointent sur le tag.
4. React : `cd packages/react && npm publish`.
