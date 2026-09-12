import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { cpSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const here = import.meta.dirname
const repo = resolve(here, '../..')

/**
 * Le site a besoin des sprites à côté de lui : le catalogue les charge en
 * relatif (`./sprites/<style>.svg`) pour rester autonome, sans dépendre du CDN.
 */
function copySprites(outDir: string): Plugin {
  return {
    name: 'veraicons-copy-sprites',
    apply: 'build',
    closeBundle() {
      const from = resolve(repo, 'sprites')
      if (!existsSync(from)) throw new Error(`sprites introuvables : ${from}`)
      cpSync(from, resolve(outDir, 'sprites'), { recursive: true })
    },
  }
}

export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    return {
      plugins: [react(), dts({ include: ['src'], exclude: ['src/main.tsx'], rollupTypes: true })],
      build: {
        emptyOutDir: true,
        lib: { entry: resolve(here, 'src/index.ts'), formats: ['es'], fileName: 'veraicons-gallery' },
        rollupOptions: { external: ['react', 'react-dom', 'react/jsx-runtime'] },
      },
    }
  }
  const outDir = resolve(repo, 'docs')
  return {
    plugins: [react(), copySprites(outDir)],
    base: './',
    build: { outDir, emptyOutDir: true },
  }
})
