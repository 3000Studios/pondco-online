// Generates static HTML for /guides and /guides/:slug into public/, following
// the same pattern as the existing hand-written static pages in public/
// (about.html, privacy.html, contact.html, ...). Source of truth is
// src/guides.js, so guide edits flow into the static pages on every build.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { guides, gearCategories, gearPicks, associatesUrl } from '../src/guides.js'

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
  <link rel="stylesheet" href="/acss-3000.css" />
  <style>:root{--acss-brand:oklch(0.56 0.11 192);--acss-brand-2:oklch(0.62 0.12 155)}</style>
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
  <div class="acss-progress" aria-hidden="true"></div>
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

// --- Static Gear Hub + homepage, same pattern as the guide pages above ---
// Copy mirrors src/App.jsx (GearPage / HomePage). Gear data source of truth
// stays src/guides.js (gearCategories, gearPicks, guides); the three start
// paths and the book list mirror App.jsx HomePage/BOOKS.

function pickList(catId) {
  const picks = gearPicks[catId] || []
  if (!picks.length) return ''
  const items = picks
    .map(
      (pick) =>
        `        <li><a href="${esc(associatesUrl(pick.asin))}" target="_blank" rel="nofollow sponsored noopener">${esc(pick.name)} (paid link)</a> — ${esc(pick.note)}</li>`,
    )
    .join('\n')
  return `
      <p><strong>Product picks — advertising.</strong> As an Amazon Associate I earn from qualifying purchases. These picks follow the criteria above; the commission never changes them.</p>
      <ul>
${items}
      </ul>`
}

const gearBody = `      <p class="eyebrow">Gear Hub</p>
      <h1>Pond Gear Hub</h1>
      <p>Six categories decide whether a pond works: the pump, the liner, the filter system, the UV clarifier, the skimmer, and aeration. For each one, here is what actually matters, what to avoid, and how the marketing numbers mislead — the same criteria whether or not a product link ever appears beside them.</p>
      <p><strong>Advertising disclosure:</strong> the product picks on this page are Amazon Associates links, labelled (paid link). As an Amazon Associate I earn from qualifying purchases. The criteria above were written before any link was chosen and do not change for a product that pays a commission.</p>
${gearCategories
  .map(
    (cat) => `    <section class="card">
      <h2>${esc(cat.name)}</h2>
      <p>${esc(cat.blurb)}</p>
      <h3>What to look for</h3>
      <ul>
${cat.criteria.map((item) => `        <li>${esc(item)}</li>`).join('\n')}
      </ul>
      <h3>What to avoid</h3>
      <ul>
${cat.avoid.map((item) => `        <li>${esc(item)}</li>`).join('\n')}
      </ul>${pickList(cat.id)}
    </section>`,
  )
  .join('\n')}`

fs.writeFileSync(
  path.join(publicDir, 'gear.html'),
  page({
    title: 'Pond Gear Hub — Honest Buying Criteria | PondCo',
    description:
      'Buying criteria for pond pumps, liners, filter systems, UV clarifiers and sterilizers, skimmers, and aeration kits: what to look for, what to avoid, and how the ratings mislead.',
    canonical: `${ORIGIN}/gear`,
    body: gearBody,
  }),
)

const homePaths = [
  { title: 'Build a Pond', text: 'Planning, digging, lining, plumbing, and stocking — the complete first build, in order.', to: '/guides/build-a-backyard-pond', cta: 'Start with the build guide' },
  { title: 'Maintain It', text: 'Feeding, water quality, seasonal care, and the month-by-month winter routine that keeps fish alive.', to: '/guides/koi-pond-basics', cta: 'Learn the upkeep' },
  { title: 'Fix a Problem', text: 'Green water? String algae? Start with an honest ranking of every fix — from free ones to last resorts.', to: '/guides/pond-algae-control', cta: 'Fix the algae' },
]

const homeBooks = [
  { asin: 'B0HN64L3ZZ', title: 'The Pond Care Handbook', format: 'Kindle eBook', note: 'The complete backyard pond and water-garden handbook — building, stocking, seasonal care, and fixing problems, in one place.' },
  { asin: 'B0HN56D93D', title: 'The Pond Care Handbook', format: 'Paperback', note: 'The same complete handbook in print — the copy that lives by the pond, not on a phone screen.' },
  { asin: 'B0HN51TGWF', title: 'The Pond Care Logbook', format: 'Paperback', note: 'A working logbook for pond keepers: water tests, treatments, livestock, and seasonal jobs, recorded season after season. Not the same book as the IngramSpark title "The Backyard Pond Log Book".' },
]

const homeBody = `      <p class="eyebrow">The Pond Owner's Hub</p>
      <h1>PondCo</h1>
      <p>Straight answers for building, maintaining, and fixing backyard ponds and water gardens — real sizing math, seasonal checklists, and gear advice with the criteria spelled out and the sales pitch left off.</p>
      <p><a href="/guides">Browse the guides</a> · <a href="/gear">Visit the Gear Hub</a></p>
      <h2>Start where you are</h2>
${homePaths
  .map(
    (p) => `    <section class="card">
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.text)}</p>
      <p><a href="${esc(p.to)}">${esc(p.cta)}</a></p>
    </section>`,
  )
  .join('\n')}
    <section class="card">
      <h2>The Pond Gear Hub</h2>
      <p>Buying criteria for the six purchases that decide whether a pond works — what to look for, what to avoid, and why the numbers on the box mislead. Product picks are labelled as advertising where they appear; the criteria come first either way.</p>
      <p>${gearCategories.map((cat) => `<a href="/gear#${esc(cat.id)}">${esc(cat.name)}</a>`).join(' · ')}</p>
      <p><a href="/gear">Read the full Gear Hub</a></p>
    </section>
      <h2>Latest guides</h2>
${guides
  .map(
    (guide) => `    <section class="card">
      <p class="eyebrow">${esc(guide.eyebrow)}</p>
      <h3><a href="/guides/${esc(guide.slug)}">${esc(guide.heading)}</a></h3>
      <p>${esc(guide.description)}</p>
      <p><a href="/guides/${esc(guide.slug)}">Read the guide</a></p>
    </section>`,
  )
  .join('\n')}
      <h2>Our books on Amazon</h2>
      <p>The PondCo team's own pond-care books — the handbook in Kindle and paperback, plus the logbook for keeping records. Full details on the <a href="/books">Books page</a>.</p>
${homeBooks
  .map(
    (book) => `    <section class="card">
      <h3>${esc(book.title)}</h3>
      <p class="eyebrow">${esc(book.format)}</p>
      <p>${esc(book.note)}</p>
      <p><a href="${esc(associatesUrl(book.asin))}" target="_blank" rel="nofollow sponsored noopener">Buy on Amazon (paid link)</a></p>
    </section>`,
  )
  .join('\n')}
    <section class="card">
      <p><strong>How PondCo works:</strong> every guide here is written from established pond-keeping practice, states its rules of thumb as rules of thumb, and corrects errors when readers flag them. We do not publish fake reviews, invented ratings, or "best product" lists for products we have not verified. Where affiliate links appear, they are marked as advertising — and they never change the criteria we publish.</p>
    </section>`

fs.writeFileSync(
  path.join(publicDir, 'home.html'),
  page({
    title: "PondCo — The Pond Owner's Hub | Backyard Pond Guides, Gear & Care",
    description:
      'Straight answers for building, maintaining, and fixing backyard ponds and water gardens — sizing math, seasonal checklists, and honest gear criteria.',
    canonical: `${ORIGIN}/`,
    body: homeBody,
  }),
)

console.log('generate-guide-pages: wrote gear.html + home.html')
