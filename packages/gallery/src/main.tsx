import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { IconGallery } from './IconGallery'

// Le site du dépôt sert ses propres sprites, à côté de l'index : il reste
// consultable sans dépendre du CDN.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IconGallery spriteBase="./sprites" />
  </StrictMode>,
)
