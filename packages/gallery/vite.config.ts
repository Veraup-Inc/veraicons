import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { createReadStream, cpSync, existsSync } from 'node:fs'
import { basename, resolve } from 'node:path'

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

/**
 * En développement, les sprites ne sont copiés nulle part : sans ce middleware
 * Vite répondait son index.html à `/sprites/<style>.svg`, avec un 200. Le
 * catalogue croyait avoir chargé un sprite et affichait des cases vides.
 */
function serveSprites(): Plugin {
  return {
    name: 'veraicons-serve-sprites',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ?? ''
        if (!url.startsWith('/sprites/')) return next()
        const file = resolve(repo, 'sprites', basename(url.split('?')[0]))
        if (!existsSync(file)) return next()
        res.setHeader('Content-Type', 'image/svg+xml')
        createReadStream(file).pipe(res)
      })
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
    plugins: [react(), serveSprites(), copySprites(outDir)],
    base: './',
    build: { outDir, emptyOutDir: true },
  }
})
