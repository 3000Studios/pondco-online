// Generates static HTML for /guides and /guides/:slug into public/, following
// the same pattern as the existing hand-written static pages in public/
// (about.html, privacy.html, contact.html, ...). Source of truth is
// src/guides.js, so guide edits flow into the static pages on every build.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { guides } from '../src/guides.js'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = path.join(repoRoot, 'public')
const ORIGIN = 'https://pondco.online'

function esc(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function page({ title, description, canonical, type = 'website', body }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${esc(canonical)}" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:type" content="${type}" />
  <meta property="og:url" content="${esc(canonical)}" />
  <meta property="og:site_name" content="PondCo" />
  <meta property="og:image" content="${ORIGIN}/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(description)}" />
  <meta name="twitter:image" content="${ORIGIN}/og-image.png" />
  <meta name="google-adsense-account" content="ca-pub-5800977493749262">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5800977493749262" crossorigin="anonymous"></script>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #F7F6F0; color: #334155; line-height: 1.7; margin: 0; padding: 2rem 1.5rem; }
    .container { max-width: 800px; margin: 0 auto; }
    header { border-bottom: 1px solid #D8E6DC; padding-bottom: 1rem; margin-bottom: 2rem; display: flex; justify-content: space-between; }
    a { color: #0C6B5C; text-decoration: none; }
    a:hover { text-decoration: underline; }
    h1, h2, h3 { color: #06231F; }
    .eyebrow { font-size: 0.85rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #0F766E; }
    .card { background: #fff; border: 1px solid #E2E8F0; border-radius: 1rem; padding: 1.5rem; margin-bottom: 1.5rem; }
    footer { border-top: 1px solid #D8E6DC; margin-top: 3rem; padding-top: 1.5rem; text-align: center; font-size: 0.9rem; color: #64748B; }
    footer a { margin: 0 0.5rem; }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <a href="/">Return Home</a>
      <a href="/guides">All Guides</a>
    </header>
    <main>
${body}
    </main>
    <footer>
      <a href="/guides">Guides</a><a href="/gear">Gear Hub</a><a href="/about">About</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/cookies">Cookies</a>
      <p>As an Amazon Associate I earn from qualifying purchases.</p>
      <p>&copy; 2026 PondCo (pondco.online)</p>
    </footer>
  </div>
</body>
</html>
`
}

function guideBody(guide) {
  const sections = (guide.sections || [])
    .map((section) => {
      const paras = (section.p || []).map((p) => `      <p>${esc(p)}</p>`).join('\n')
      const list = section.ul
        ? `\n      <ul>\n${section.ul.map((item) => `        <li>${esc(item)}</li>`).join('\n')}\n      </ul>`
        : ''
      return `    <section class="card">\n      <h2>${esc(section.h)}</h2>\n${paras}${list}\n    </section>`
    })
    .join('\n')
  return `      <p class="eyebrow">${esc(guide.eyebrow)}</p>
      <h1>${esc(guide.heading)}</h1>
      <p>${esc(guide.intro)}</p>
${sections}
    <section class="card">
      <h2>Keep going</h2>
      <p>Browse <a href="/guides">all PondCo guides</a>, or check the <a href="/gear">Gear Hub</a> before your next purchase.</p>
    </section>`
}

const guidesIndexBody = `      <p class="eyebrow">Guides</p>
      <h1>Pond guides, written to be used</h1>
${guides
  .map(
    (guide) => `    <section class="card">
      <p class="eyebrow">${esc(guide.eyebrow)}</p>
      <h2><a href="/guides/${esc(guide.slug)}">${esc(guide.heading)}</a></h2>
      <p>${esc(guide.description)}</p>
      <p><a href="/guides/${esc(guide.slug)}">Read the guide</a></p>
    </section>`,
  )
  .join('\n')}`

fs.mkdirSync(path.join(publicDir, 'guides'), { recursive: true })
fs.writeFileSync(
  path.join(publicDir, 'guides.html'),
  page({
    title: 'Pond Guides | PondCo',
    description:
      'All PondCo guides: building a backyard pond, algae control, pump sizing math, koi basics, liners vs preformed shells, and winterizing checklists.',
    canonical: `${ORIGIN}/guides`,
    body: guidesIndexBody,
  }),
)
for (const guide of guides) {
  fs.writeFileSync(
    path.join(publicDir, 'guides', `${guide.slug}.html`),
    page({
      title: `${guide.title} | PondCo`,
      description: guide.description,
      canonical: `${ORIGIN}/guides/${guide.slug}`,
      type: 'article',
      body: guideBody(guide),
    }),
  )
}
console.log(`generate-guide-pages: wrote guides.html + ${guides.length} guide pages`)
