# veraicons

317 icônes, 9 styles, une seule source par icône. Grille 24 px, trait 1,5 px.

## Installation
```yaml
dependencies:
  veraicons:
    git:
      url: https://github.com/Veraup-Inc/veraicons.git
      path: packages/flutter/veraicons
      ref: v1.0.0
```

## Styles monochromes (police d'icônes — `Icon()` standard)
```dart
import 'package:veraicons/veraicons.dart';

Icon(VeraUpStrokeRounded.home)
Icon(VeraUpStrokeSharp.calendar)
Icon(VeraUpStrokeStandard.bell)
Icon(VeraUpSolidRounded.wallet, color: Colors.teal)
Icon(VeraUpSolidSharp.church)
Icon(VeraUpSolidStandard.nfc)
```
Classes : `VeraUpStrokeRounded`, `VeraUpStrokeSharp`, `VeraUpStrokeStandard`, `VeraUpSolidRounded`, `VeraUpSolidSharp`, `VeraUpSolidStandard`. Mêmes noms et mêmes codepoints dans les 6 polices, donc on peut changer de style sans toucher au nom.

## Styles deux tons (duotone, twotone, bulk)
```dart
VeraIcon.tone('home', tone: VeraIconTone.duotone, size: 28, color: Colors.teal)
VeraIcon.tone('wallet', tone: VeraIconTone.bulk)
```

## Note
Remplace `PhosphorIcons.house` → `VeraUpStrokeRounded.home`, etc. Liste complète des noms : `VeraIcon.names` ou `VeraUpStrokeRounded.byName`.
