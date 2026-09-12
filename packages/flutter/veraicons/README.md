# veraicons

554 icônes en 10 styles, une seule source par icône. Grille 24 px, trait 1,5 px.

## Installation
```bash
flutter pub add veraicons --git-url=https://github.com/Veraup-Inc/veraicons.git \
  --git-path=packages/flutter/veraicons --git-ref=v1.3.0
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
Classes : `VeraUpStrokeRounded`, `VeraUpStrokeSharp`, `VeraUpStrokeStandard`, `VeraUpSolidRounded`, `VeraUpSolidSharp`, `VeraUpSolidStandard`. Mêmes noms et mêmes codepoints dans les 6 polices,
donc on change de style sans toucher au nom.

## Styles deux tons
```dart
VeraIcon.tone('home', tone: VeraIconTone.duotone, size: 28, color: Colors.teal)
VeraIcon.tone('life-season', tone: VeraIconTone.bulk)
```
Tons disponibles : duotone, duotoneStandard, twotone, bulk.

## Noms
554 noms, dont 33 alias (`add` → `plus`, `delete` → `trash`…).
Liste complète : `VeraIcon.names` ou `VeraUpStrokeRounded.byName`.
Catalogue : https://veraup-inc.github.io/veraicons/
