# veraicons

```bash
npm i veraicons        # ou : pnpm add veraicons · yarn add veraicons
```

```tsx
import { Home, Wallet, Church } from 'veraicons';

<Home />                                  // stroke-rounded par défaut
<Wallet variant="solid-rounded" size={28} color="#0F766E" />
<Church variant="duotone-rounded" />
```
`variant` : stroke-rounded · stroke-sharp · stroke-standard · solid-rounded · solid-sharp · solid-standard · duotone-rounded · duotone-standard · twotone-rounded · bulk-rounded.
La couleur suit `currentColor`, donc `className="text-teal-600"` fonctionne aussi.

554 icônes, dont 33 alias (`add` → `plus`, `delete` → `trash`…).
Catalogue : https://veraup-inc.github.io/veraicons/
