// Post-build step (runs after `vite build`):
// The static homepage generated into public/home.html (copied to
// dist/home.html by Vite) becomes dist/index.html, so `/` serves real
// content HTML instead of the empty SPA shell. The Vite app shell is
// preserved as dist/app-shell.html and public/_redirects points the SPA
// fallback at it, so app-only routes (e.g. /books) keep working.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(repoRoot, 'dist')
const shellPath = path.join(distDir, 'index.html')
const homePath = path.join(distDir, 'home.html')

if (!fs.existsSync(homePath)) {
  console.error('inject-home: dist/home.html not found — did generate-guide-pages.mjs run?')
  process.exit(1)
}

fs.copyFileSync(shellPath, path.join(distDir, 'app-shell.html'))
fs.copyFileSync(homePath, shellPath)
console.log('inject-home: / now serves the static homepage; SPA shell preserved at /app-shell.html')
