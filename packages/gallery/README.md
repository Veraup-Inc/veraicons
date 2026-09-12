# veraicons-gallery

Le catalogue VeraUp Icons, en composant React. C'est **la même chose** qui rend
le site du dépôt et qui s'intègre dans un volet développeur : un seul code, donc
aucune version à maintenir en double.

- Site public : <https://veraup-inc.github.io/veraicons/>
- 554 icônes · 10 styles · recherche · panneau de détails avec extraits à copier

## Poser le catalogue dans une page

```bash
npm i veraicons-gallery
```

```tsx
import { IconGallery } from 'veraicons-gallery'
import 'veraicons-gallery/style.css'

export default function DevIcons() {
  return <IconGallery />
}
```

C'est tout. Par défaut les dessins viennent de jsDelivr, figés sur la version du
paquet : rien à héberger, rien à copier.

## Props

| Prop | Défaut | À quoi ça sert |
|---|---|---|
| `spriteBase` | CDN jsDelivr figé sur la version | Où chercher les sprites. Mettez un chemin local si vous préférez les servir vous-même. |
| `defaultVariant` | `'stroke-rounded'` | Style affiché à l'ouverture. |
| `hideHeader` | `false` | Masque le titre et le compteur quand votre page a déjà les siens. |
| `onSelect` | — | Reçoit `(nom, style)` au clic. Fourni, il remplace le panneau de détails : à vous de décider quoi faire. |
| `className` | — | Ajouté à la racine, pour vos propres règles. |

### Choisir une icône plutôt que la documenter

```tsx
<IconGallery
  hideHeader
  defaultVariant="solid-rounded"
  onSelect={(name) => setCategoryIcon(name)}
/>
```

## Apparence

Tout est préfixé `vig-` et passe par des variables CSS : le composant ne déborde
pas sur la page qui l'accueille. Il suit le thème clair/sombre du système, et
vous pouvez forcer l'un ou l'autre avec `data-theme` :

```tsx
<div data-theme="dark"><IconGallery /></div>
```

Pour réaccorder la palette à votre charte, redéfinissez les variables :

```css
.vig {
  --vig-accent: #7c3aed;
  --vig-bg: #ffffff;
}
```

## Ce qu'il télécharge

Le catalogue n'affiche qu'un style à la fois. Embarquer 554 icônes × 10 styles
ferait plus de 4 Mo de JavaScript ; le composant va plutôt chercher le sprite du
style courant (~300 Ko), que le navigateur garde ensuite en cache. Le paquet
lui-même pèse **47 ko** (9,6 ko compressés).

Les identifiants du sprite sont préfixés à l'injection : deux catalogues sur la
même page ne se disputent pas les mêmes `id`.

## Aussi exporté

```ts
import { ICONS, ICON_NAMES, CATEGORIES, VARIANTS, VERSION } from 'veraicons-gallery'
import type { Variant, IconMeta, Category } from 'veraicons-gallery'
```

Utile pour construire votre propre interface : `ICONS` donne la catégorie, le
codepoint et, le cas échéant, le glyphe dont l'icône est un alias.

`IconTile`, `VariantTabs`, `IconPanel` et le hook `useSprite` sont exportés
séparément si vous voulez recomposer autrement.

## Synchro avec les icônes

`src/generated.ts` est **écrit par `tools/build_packages.py`**. Ajouter une icône
et lancer `tools/build.sh` met donc à jour la bibliothèque, les sprites et le
catalogue d'un seul coup. La CI vérifie que ce fichier est à jour et refuse un
commit où il serait en retard.

Ne le modifiez pas à la main.

## Développer

```bash
npm install
npm run dev          # serveur local
npm run typecheck
npm run build        # dist/ (bibliothèque) + ../../docs (site)
```

Le site n'est pas versionné : la CI le reconstruit à chaque déploiement, il ne
peut donc pas être en retard sur les icônes.
