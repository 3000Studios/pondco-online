import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, Hammer, Leaf, Wrench, Droplets, ShieldCheck, BookOpen } from 'lucide-react'
import { guides, gearCategories, gearPicks, associatesUrl, guideGear } from './guides.js'

const SITE = 'PondCo'
const ORIGIN = 'https://pondco.online'
const OG_IMAGE = `${ORIGIN}/og-image.png`

function Seo({ title, description, path, type = 'website' }) {
  useEffect(() => {
    document.title = title
    const url = `${ORIGIN}${path || window.location.pathname}`
    const setMeta = (attr, key, content) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`)
      if (!element) { element = document.createElement('meta'); element.setAttribute(attr, key); document.head.append(element) }
      element.content = content
    }
    setMeta('name', 'description', description)
    setMeta('name', 'robots', 'index, follow')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:site_name', SITE)
    setMeta('property', 'og:image', OG_IMAGE)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', OG_IMAGE)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical) }
    canonical.href = url
  }, [title, description, path, type])
  return null
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function PondScene() {
  // Inline SVG water-garden scene — no external assets.
  return (
    <svg viewBox="0 0 640 300" role="img" aria-label="A calm backyard pond with lily pads and reeds" className="h-auto w-full">
      <rect width="640" height="300" fill="#DCEFE3" />
      <circle cx="540" cy="52" r="26" fill="#F2C14E" />
      <path d="M0 120 Q 120 84 260 112 T 640 104 V300 H0 Z" fill="#74B08A" />
      <path d="M0 168 Q 160 140 320 162 T 640 156 V300 H0 Z" fill="#2E7D64" />
      <path d="M0 206 Q 200 182 400 200 T 640 196 V300 H0 Z" fill="#0C6B5C" />
      <ellipse cx="180" cy="238" rx="46" ry="10" fill="#57A773" />
      <ellipse cx="452" cy="252" rx="58" ry="12" fill="#4C956C" />
      <ellipse cx="330" cy="226" rx="30" ry="7" fill="#74B08A" />
      <path d="M452 218 q6 -22 -4 -34 q16 8 12 28 q10 -14 2 -30 q14 16 6 36 Z" fill="#E98FB0" />
      <g stroke="#1F5C4D" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M66 210 q-4 -34 4 -58" /><path d="M84 212 q2 -30 14 -50" /><path d="M50 214 q-10 -26 -22 -40" />
        <path d="M580 214 q-4 -34 4 -58" /><path d="M598 216 q2 -30 14 -50" />
      </g>
      <circle cx="180" cy="236" r="4" fill="#F7F6F0" /><circle cx="452" cy="250" r="5" fill="#F7F6F0" />
      <path d="M120 268 q30 -8 60 0 M420 282 q30 -8 60 0" stroke="#9CCDB4" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function GuideCard({ guide }) {
  return (
    <Link to={`/guides/${guide.slug}`} className="group flex flex-col rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm transition hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">{guide.eyebrow}</p>
      <h3 className="mt-2 text-xl font-bold leading-snug text-emerald-950 group-hover:text-teal-800">{guide.heading}</h3>
      <p className="mt-2 flex-1 leading-7 text-slate-600">{guide.description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">Read the guide <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
    </Link>
  )
}

function HomePage() {
  const paths = [
    { icon: Hammer, title: 'Build a Pond', text: 'Planning, digging, lining, plumbing, and stocking — the complete first build, in order.', to: '/guides/build-a-backyard-pond', cta: 'Start with the build guide' },
    { icon: Leaf, title: 'Maintain It', text: 'Feeding, water quality, seasonal care, and the month-by-month winter routine that keeps fish alive.', to: '/guides/koi-pond-basics', cta: 'Learn the upkeep' },
    { icon: Wrench, title: 'Fix a Problem', text: 'Green water? String algae? Start with an honest ranking of every fix — from free ones to last resorts.', to: '/guides/pond-algae-control', cta: 'Fix the algae' },
  ]
  return (
    <>
      <Seo title="PondCo — The Pond Owner's Hub | Backyard Pond Guides, Gear & Care" description="Straight answers for building, maintaining, and fixing backyard ponds and water gardens — sizing math, seasonal checklists, and honest gear criteria." path="/" />
      <section className="mx-auto max-w-6xl pt-10 sm:pt-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">The Pond Owner's Hub</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-emerald-950 sm:text-5xl">PondCo</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">Straight answers for building, maintaining, and fixing backyard ponds and water gardens — real sizing math, seasonal checklists, and gear advice with the criteria spelled out and the sales pitch left off.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/guides" className="inline-flex min-h-11 items-center rounded-xl bg-teal-800 px-5 py-2 font-semibold text-white hover:bg-teal-700">Browse the guides</Link>
              <Link to="/gear" className="inline-flex min-h-11 items-center rounded-xl border border-teal-800 px-5 py-2 font-semibold text-teal-900 hover:bg-teal-50">Visit the Gear Hub</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-emerald-900/10 shadow-sm"><PondScene /></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl py-12 sm:py-16" aria-labelledby="paths-heading">
        <h2 id="paths-heading" className="text-2xl font-bold text-emerald-950 sm:text-3xl">Start where you are</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {paths.map(({ icon: Icon, title, text, to, cta }) => (
            <Link key={title} to={to} className="group rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm transition hover:shadow-md">
              <Icon className="h-8 w-8 text-teal-700" aria-hidden="true" />
              <h3 className="mt-3 text-xl font-bold text-emerald-950">{title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">{cta} <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-emerald-900/10 bg-[#EAF4EC]">
        <div className="mx-auto max-w-6xl py-12 sm:py-16" aria-labelledby="gear-heading">
          <div className="flex items-start gap-3">
            <Droplets className="mt-1 h-7 w-7 shrink-0 text-teal-800" aria-hidden="true" />
            <div>
              <h2 id="gear-heading" className="text-2xl font-bold text-emerald-950 sm:text-3xl">The Pond Gear Hub</h2>
              <p className="mt-2 max-w-3xl leading-7 text-slate-600">Buying criteria for the six purchases that decide whether a pond works — what to look for, what to avoid, and why the numbers on the box mislead. Product picks are labelled as advertising where they appear; the criteria come first either way.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {gearCategories.map((cat) => (
              <Link key={cat.id} to={`/gear#${cat.id}`} className="rounded-full border border-teal-800/30 bg-white px-4 py-2 text-sm font-semibold text-teal-900 hover:bg-teal-50">{cat.name}</Link>
            ))}
          </div>
          <Link to="/gear" className="mt-6 inline-flex items-center gap-1 font-semibold text-teal-800">Read the full Gear Hub <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl py-12 sm:py-16" aria-labelledby="guides-heading">
        <div className="flex items-center gap-3">
          <BookOpen className="h-7 w-7 text-teal-800" aria-hidden="true" />
          <h2 id="guides-heading" className="text-2xl font-bold text-emerald-950 sm:text-3xl">Latest guides</h2>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl pb-16" aria-labelledby="books-heading">
        <h2 id="books-heading" className="text-2xl font-bold text-emerald-950 sm:text-3xl">Our books on Amazon</h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">The PondCo team's own pond-care books — the handbook in Kindle and paperback, plus the logbook for keeping records. Full details on the <Link className="font-semibold text-teal-800 underline" to="/books">Books page</Link>.</p>
        <BookCards />
      </section>

      <section className="mx-auto max-w-6xl pb-16">
        <div className="flex items-start gap-3 rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm">
          <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-teal-700" aria-hidden="true" />
          <p className="leading-7 text-slate-600"><strong className="text-emerald-950">How PondCo works:</strong> every guide here is written from established pond-keeping practice, states its rules of thumb as rules of thumb, and corrects errors when readers flag them. We do not publish fake reviews, invented ratings, or "best product" lists for products we have not verified. Where affiliate links appear, they are marked as advertising — and they never change the criteria we publish.</p>
        </div>
      </section>
    </>
  )
}

const BOOKS = [
  { asin: 'B0HN64L3ZZ', title: 'The Pond Care Handbook', format: 'Kindle eBook', note: 'The complete backyard pond and water-garden handbook — building, stocking, seasonal care, and fixing problems, in one place.' },
  { asin: 'B0HN56D93D', title: 'The Pond Care Handbook', format: 'Paperback', note: 'The same complete handbook in print — the copy that lives by the pond, not on a phone screen.' },
  { asin: 'B0HN51TGWF', title: 'The Pond Care Logbook', format: 'Paperback', note: 'A working logbook for pond keepers: water tests, treatments, livestock, and seasonal jobs, recorded season after season. Not the same book as the IngramSpark title "The Backyard Pond Log Book".' },
]

function BookCards() {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {BOOKS.map((book) => (
        <article key={book.asin} className="flex flex-col rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm">
          <BookOpen className="h-8 w-8 text-teal-700" aria-hidden="true" />
          <h3 className="mt-4 text-xl font-bold text-emerald-950">{book.title}</h3>
          <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-teal-700">{book.format}</p>
          <p className="mt-3 flex-1 leading-7 text-slate-600">{book.note}</p>
          <a className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-teal-700 px-5 font-semibold text-white hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-700" href={associatesUrl(book.asin)} target="_blank" rel="nofollow sponsored noopener">Buy on Amazon (paid link)</a>
        </article>
      ))}
    </div>
  )
}

function BooksPage() {
  return (
    <>
      <Seo title="Our Books | PondCo" description="PondCo's own books on Amazon: The Pond Care Handbook (Kindle eBook and paperback) and The Pond Care Logbook (paperback)." path="/books" />
      <section className="mx-auto max-w-6xl py-12 sm:py-16">
        <h1 className="text-3xl font-bold text-emerald-950 sm:text-4xl">Our books</h1>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">Written and published by the PondCo team (3000 Studios) and sold on Amazon. Buy buttons are Amazon Associates links, labelled (paid link) — as an Amazon Associate I earn from qualifying purchases, at no extra cost to you.</p>
        <BookCards />
      </section>
    </>
  )
}

function GuidesIndex() {
  return (
    <>
      <Seo title="Pond Guides | PondCo" description="All PondCo guides: building a backyard pond, algae control, pump sizing math, koi basics, liners vs preformed shells, and winterizing checklists." path="/guides" />
      <section className="mx-auto max-w-6xl py-12 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">Guides</p>
        <h1 className="mt-3 text-4xl font-bold text-emerald-950">Pond guides, written to be used</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Six complete guides covering the whole life of a backyard pond — the build, the two problems everyone hits, the math behind the gear, and the seasonal routine. Each one stands alone; together they are the handbook.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}
        </div>
      </section>
    </>
  )
}

function GuidePage({ guide }) {
  return (
    <>
      <Seo title={`${guide.title} | ${SITE}`} description={guide.description} path={`/guides/${guide.slug}`} type="article" />
      <article className="mx-auto max-w-3xl py-12 sm:py-16">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">{guide.eyebrow}</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-emerald-950">{guide.heading}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">{guide.intro}</p>
        </header>
        <div className="mt-10 space-y-6">
          {guide.sections.map((section) => (
            <section key={section.h} className="rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-emerald-950">{section.h}</h2>
              {(section.p || []).map((para, i) => <p key={i} className="mt-3 leading-7 text-slate-600">{para}</p>)}
              {section.ul && (
                <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-600">
                  {section.ul.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-[#EAF4EC] p-6">
          <h2 className="text-xl font-bold text-emerald-950">Keep going</h2>
          <p className="mt-2 leading-7 text-slate-600">Browse <Link className="font-semibold text-teal-800 underline" to="/guides">all PondCo guides</Link>, or check the <Link className="font-semibold text-teal-800 underline" to="/gear">Gear Hub</Link> before your next purchase.</p>
        </div>
        {(guideGear[guide.slug] || []).length > 0 && (
          <div className="mt-10 rounded-xl border border-teal-800/30 bg-[#F7F6F0] p-4">
            <p className="text-sm leading-6 text-slate-600"><strong className="text-emerald-950">Gear in this guide — advertising:</strong> links below are Amazon Associates links, labelled (paid link). As an Amazon Associate I earn from qualifying purchases.</p>
            {(guideGear[guide.slug] || []).map((catId) => {
              const cat = gearCategories.find((c) => c.id === catId)
              return (
                <div key={catId} className="mt-4">
                  <p className="text-sm font-semibold text-emerald-950">{cat ? cat.name : catId}</p>
                  <ul className="mt-2 space-y-3">
                    {(gearPicks[catId] || []).map((pick) => (
                      <li key={pick.asin} className="text-sm leading-6 text-slate-600">
                        <a className="font-semibold text-teal-800 underline" href={associatesUrl(pick.asin)} target="_blank" rel="nofollow sponsored noopener">{pick.name} (paid link)</a> — {pick.note}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        )}
      </article>
    </>
  )
}

function GearPage() {
  return (
    <>
      <Seo title="Pond Gear Hub — Honest Buying Criteria | PondCo" description="Buying criteria for pond pumps, liners, filter systems, UV clarifiers and sterilizers, skimmers, and aeration kits: what to look for, what to avoid, and how the ratings mislead." path="/gear" />
      <section className="mx-auto max-w-4xl py-12 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">Gear Hub</p>
        <h1 className="mt-3 text-4xl font-bold text-emerald-950">Pond Gear Hub</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">Six categories decide whether a pond works: the pump, the liner, the filter system, the UV clarifier, the skimmer, and aeration. For each one, here is what actually matters, what to avoid, and how the marketing numbers mislead — the same criteria whether or not a product link ever appears beside them.</p>
        <p className="mt-4 leading-7 text-slate-600"><strong className="text-emerald-950">Advertising disclosure:</strong> the product picks on this page are Amazon Associates links, labelled (paid link). As an Amazon Associate I earn from qualifying purchases. The criteria above were written before any link was chosen and do not change for a product that pays a commission.</p>
        <div className="mt-10 space-y-8">
          {gearCategories.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-24 rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-emerald-950">{cat.name}</h2>
              <p className="mt-3 leading-7 text-slate-600">{cat.blurb}</p>
              <h3 className="mt-5 font-semibold text-emerald-950">What to look for</h3>
              <ul className="mt-2 list-disc space-y-2 pl-6 leading-7 text-slate-600">
                {cat.criteria.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <h3 className="mt-5 font-semibold text-emerald-950">What to avoid</h3>
              <ul className="mt-2 list-disc space-y-2 pl-6 leading-7 text-slate-600">
                {cat.avoid.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              {/* affiliate-slot: AMAZON ASSOCIATES — tag amazon300008-20; every link labelled (paid link) */}
              <div data-affiliate-slot="AMAZON-ASSOCIATES" data-category={cat.id} className="mt-6 rounded-xl border border-teal-800/40 bg-[#F7F6F0] p-4">
                <p className="text-sm leading-6 text-slate-600"><strong className="text-emerald-950">Product picks — advertising.</strong> As an Amazon Associate I earn from qualifying purchases. These picks follow the criteria above; the commission never changes them.</p>
                <ul className="mt-3 space-y-3">
                  {(gearPicks[cat.id] || []).map((pick) => (
                    <li key={pick.asin} className="text-sm leading-6 text-slate-600">
                      <a className="font-semibold text-teal-800 underline" href={associatesUrl(pick.asin)} target="_blank" rel="nofollow sponsored noopener">{pick.name} (paid link)</a> — {pick.note}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  )
}

function LegalPage({ title, description, path, children }) {
  return (
    <>
      <Seo title={`${title} | ${SITE}`} description={description || `${title} — PondCo, The Pond Owner's Hub.`} path={path} />
      <article className="mx-auto max-w-3xl py-12 sm:py-16">
        <h1 className="text-4xl font-bold text-emerald-950">{title}</h1>
        <div className="mt-6 space-y-5 leading-7 text-slate-600">{children}</div>
      </article>
    </>
  )
}

function AboutPage() {
  return (
    <LegalPage title="About PondCo" description="PondCo is an independent pond-owner resource: plain-language guides on building, maintaining, and fixing backyard ponds and water gardens." path="/about">
      <p>PondCo is an independent pond-owner resource. We publish plain-language, practical guides for people who build, keep, or are thinking about a backyard pond or water garden — the planning, the digging, the gear, the seasonal work, and the problems everyone eventually meets.</p>
      <p><strong>What we publish</strong></p>
      <p>Complete guides that show their working: the volume and pump-sizing math with real numbers, the temperature thresholds for feeding fish, the ranking of algae fixes by whether they address the cause. When a figure is a rule of thumb rather than a measured fact, we label it as one. When practice varies by climate, we say so.</p>
      <p><strong>What we are not</strong></p>
      <p>PondCo is not a pond contractor, a retailer, or a substitute for professional advice on your specific water feature. We do not sell ponds or equipment ourselves. If a guide touches on electrical work, local codes, or anything structural, the right move is a qualified local professional — our material helps you talk to them, not replace them.</p>
      <p><strong>How we handle products and money</strong></p>
      <p>PondCo is reader-supported. The site carries advertising (served by Google AdSense). Product links, when published, are Amazon Associates links, clearly marked as advertising, which can earn a commission at no extra cost to you. Editorial decisions — what the criteria are, what a guide recommends — are made independently of advertising and affiliate relationships. We do not publish fake reviews, invented ratings, or endorsements we cannot stand behind.</p>
      <p><strong>Corrections</strong></p>
      <p>We correct errors when we find them. If you spot something wrong or outdated, email us and we will investigate and fix it.</p>
      <p><strong>Contact</strong></p>
      <p>Questions, corrections, or topic suggestions: <a className="font-semibold text-teal-800 underline" href="mailto:info@pondco.online">info@pondco.online</a>. See the <Link className="font-semibold text-teal-800 underline" to="/contact">contact page</Link> for details.</p>
    </LegalPage>
  )
}

function ContactPage() {
  return (
    <LegalPage title="Contact" description="Contact PondCo by email at info@pondco.online — corrections, topic suggestions, and questions about the guides." path="/contact">
      <p>The way to reach PondCo is by email: <a className="font-semibold text-teal-800 underline" href="mailto:info@pondco.online">info@pondco.online</a>. We read everything and reply to substantive messages as promptly as we can.</p>
      <p><strong>Corrections</strong></p>
      <p>If a guide has something wrong — a threshold, a formula, an outdated practice — tell us which page and which passage, and what the correct information is. Corrections backed by a source (a manufacturer specification, an extension-service publication, your own measured results) are the fastest to verify and fix.</p>
      <p><strong>Topic suggestions</strong></p>
      <p>Tell us what you are trying to do with your pond and where you got stuck. Specific beats general: "how do I size a filter for a 2,000-gallon pond with eight koi" shapes a guide; "more pond stuff" does not.</p>
      <p><strong>What we cannot do</strong></p>
      <p>We cannot diagnose your specific pond's problem in detail by email, design a pond for your yard, or advise on electrical or construction work — those need local professionals who can see the site. We also do not operate a phone line or a shop; email is the channel.</p>
      <p><strong>Privacy note</strong></p>
      <p>If you email us, we use your message and address only to respond and, where relevant, to improve the site. We do not sell contact information or add correspondents to marketing lists. See the <Link className="font-semibold text-teal-800 underline" to="/privacy">privacy policy</Link>.</p>
    </LegalPage>
  )
}

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" description="How PondCo handles information: what is collected, how Google AdSense advertising cookies work, and your choices." path="/privacy">
      <p>Last updated: October 2026</p>
      <p>PondCo is a reading resource. We do not require accounts and we do not ask for personal information to read the guides. This policy explains what information is collected when you use the site, how it is used, and the choices you have.</p>
      <p><strong>Information we collect</strong></p>
      <p>If you contact us by email at info@pondco.online, we receive your message and email address, which we use only to respond and, where relevant, to improve the site. We do not sell contact information and we do not add correspondents to marketing lists. Like most websites, our hosting infrastructure may process standard technical data — such as IP addresses and request logs — for security, reliability, and troubleshooting.</p>
      <p><strong>Third-party advertising and Google AdSense</strong></p>
      <p>We use third-party advertising companies, including Google AdSense, to serve advertisements when you visit this website. These companies may use cookies to serve ads based on your prior visits to this website or other sites on the Internet.</p>
      <p>• Google's use of advertising cookies enables it and its partners to serve ads based on visits to our site and other sites on the web.</p>
      <p>• You may opt out of personalised advertising by visiting Google Ads Settings, or opt out of some third-party vendors' use of cookies for personalised advertising at www.aboutads.info.</p>
      <p>• You can also control cookies through your browser settings; see our cookie notice for details.</p>
      <p>Advertising is served by these third parties under their own privacy policies. PondCo does not control the data practices of advertising networks beyond the site-level choices described here.</p>
      <p><strong>Affiliate links</strong></p>
      <p>Some pages contain affiliate links, including Amazon Associates links. If you click one, Amazon or its affiliate network may set a cookie so a resulting purchase can be attributed. Those cookies are set by the merchant or its affiliate network, under their own policies; PondCo does not receive your personal information from them.</p>
      <p><strong>Data protection</strong></p>
      <p>We implement reasonable administrative and technical measures to protect information we handle, including encryption in transit and access controls on site infrastructure. No method of transmission over the Internet is completely secure, and we cannot guarantee absolute security.</p>
      <p><strong>Children's privacy</strong></p>
      <p>This site publishes general educational material and is not directed at children. We do not knowingly collect personal information from children.</p>
      <p><strong>Changes to this policy</strong></p>
      <p>If we change this policy, we will update the "Last updated" date above and publish the revised version on this page.</p>
      <p><strong>Contact</strong></p>
      <p>For questions about this policy, contact: info@pondco.online.</p>
    </LegalPage>
  )
}

function TermsPage() {
  return (
    <LegalPage title="Terms of Use" description="Terms of use for PondCo: educational purpose, accuracy, acceptable use, advertising and affiliate disclosure, and liability." path="/terms">
      <p>Last updated: October 2026</p>
      <p>By accessing PondCo, you agree to these terms. If you do not agree, please do not use the site.</p>
      <p><strong>Educational purpose; not professional advice</strong></p>
      <p>All content on this site is published for general educational purposes. It is not landscaping, construction, electrical, veterinary, or other professional advice, and it does not create any professional or advisory relationship. Pond work can involve electricity near water, heavy materials, and livestock; decisions affecting a real pond should be made with appropriate qualified professionals and in line with local codes. You are solely responsible for how you use the information here.</p>
      <p><strong>Accuracy</strong></p>
      <p>We write from established pond-keeping practice and correct errors when we find them. Even so, practices evolve and general guidance cannot capture every climate, product, or jurisdictional variation. Verify important figures — chemical doses, electrical requirements, product specifications — against the primary source (the product label, the governing code, the manufacturer documentation) before relying on them.</p>
      <p><strong>Acceptable use</strong></p>
      <p>You may read, link to, and share our content for personal and educational purposes. You agree not to: disrupt the site's operation or security; scrape the site aggressively in ways that degrade service for others; misrepresent our content as your own; or use the site for any unlawful purpose.</p>
      <p><strong>Intellectual property</strong></p>
      <p>Articles and original material on PondCo are the property of the site's operator and are protected by applicable intellectual property laws. Brief quotations with attribution and a link are welcome. Republication of substantial portions requires prior permission — contact info@pondco.online.</p>
      <p><strong>Third-party content, advertising, and affiliate links</strong></p>
      <p>The site displays advertising served by third-party networks, including Google AdSense, and may link to external websites, including merchant sites via affiliate links. We do not control third-party sites, products, or advertising content, and we are not responsible for them. Advertising does not constitute an endorsement. Where a link is an affiliate link, it may earn the site a commission at no additional cost to you.</p>
      <p><strong>Limitation of liability</strong></p>
      <p>To the maximum extent permitted by law, PondCo and its operator are not liable for any damages arising from your use of, or inability to use, the site or its content. The site is provided "as is" without warranties of any kind, express or implied.</p>
      <p><strong>Changes</strong></p>
      <p>We may update these terms from time to time. Continued use of the site after changes are published constitutes acceptance of the revised terms.</p>
      <p><strong>Contact</strong></p>
      <p>Questions about these terms: info@pondco.online.</p>
    </LegalPage>
  )
}

function CookiesPage() {
  return (
    <LegalPage title="Cookie Notice" description="The cookies used on PondCo — strictly necessary, advertising (Google AdSense), and affiliate attribution — and how to control them." path="/cookies">
      <p>Last updated: October 2026</p>
      <p>Cookies are small text files stored on your device by your browser. They can remember preferences, keep a session working, measure usage, or — in the case of advertising cookies — help show ads relevant to your interests.</p>
      <p><strong>Cookies in use</strong></p>
      <p>Strictly necessary. Essential hosting and security services may use strictly necessary technical mechanisms to provide and protect the site. These are required for the site to function.</p>
      <p>Advertising cookies. We use third-party advertising services, including Google AdSense, which may place cookies to serve ads based on your prior visits to this site and other sites on the Internet. These cookies are set by the advertising providers, not by PondCo, and are governed by the providers' own policies.</p>
      <p>Affiliate cookies. If you click an affiliate link (where present and marked), Amazon or the merchant's affiliate network may set a cookie to attribute a purchase. PondCo does not set these cookies.</p>
      <p><strong>Your choices</strong></p>
      <p>• Browser settings. All major browsers let you block or delete cookies, entirely or per site. Blocking advertising cookies will generally result in less relevant ads rather than no ads.</p>
      <p>• Google Ads Settings. You can opt out of Google's personalised advertising there.</p>
      <p>• Industry opt-outs. You can opt out of interest-based advertising from participating companies at www.aboutads.info.</p>
      <p><strong>Changes</strong></p>
      <p>If our use of cookies changes, we will update this notice and the "Last updated" date above.</p>
      <p><strong>Contact</strong></p>
      <p>Questions about this notice: info@pondco.online.</p>
    </LegalPage>
  )
}

function NotFound() {
  return (
    <LegalPage title="Page not found" description="The page you requested is not published on PondCo.">
      <p>The page you requested is not published. Return to the <Link className="font-semibold text-teal-800 underline" to="/">home page</Link> or browse the <Link className="font-semibold text-teal-800 underline" to="/guides">guides</Link>.</p>
    </LegalPage>
  )
}

function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])
  const links = [['Home', '/'], ['Guides', '/guides'], ['Books', '/books'], ['Gear Hub', '/gear'], ['About', '/about'], ['Contact', '/contact']]
  return (
    <div className="min-h-screen bg-[#F7F6F0] text-slate-800">
      <header className="border-b border-emerald-900/10 bg-white/95">
        <nav className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Primary navigation">
          <Link className="text-lg font-bold tracking-wide text-emerald-950" to="/">PONDCO <span className="font-semibold text-teal-700">· The Pond Owner's Hub</span></Link>
          <button className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-emerald-900/20 text-emerald-950 md:hidden" type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}<span className="sr-only">Menu</span></button>
          <div className="hidden items-center gap-5 md:flex">{links.map(([label, to]) => <Link className="text-sm font-medium text-slate-600 hover:text-emerald-950 focus:outline-none focus:ring-2 focus:ring-teal-700" key={to} to={to}>{label}</Link>)}</div>
        </nav>
        {open && <div id="mobile-nav" className="border-t border-emerald-900/10 px-4 py-3 md:hidden">{links.map(([label, to]) => <Link className="block min-h-11 py-3 font-medium text-slate-700" key={to} to={to}>{label}</Link>)}</div>}
      </header>
      <main className="px-4 sm:px-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guides" element={<GuidesIndex />} />
          {guides.map((guide) => <Route key={guide.slug} path={`/guides/${guide.slug}`} element={<GuidePage guide={guide} />} />)}
          <Route path="/books" element={<BooksPage />} />
          <Route path="/gear" element={<GearPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="border-t border-emerald-900/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-md">
              <p className="font-bold text-emerald-950">PondCo — The Pond Owner's Hub</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">An independent, reader-supported resource for backyard pond and water-garden owners. PondCo is supported by advertising and, where marked, affiliate links that may earn a commission at no extra cost to you. Recommendations are never bought.</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">As an Amazon Associate I earn from qualifying purchases.</p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600" aria-label="Footer">
              <Link to="/guides">Guides</Link><Link to="/books">Books</Link><Link to="/gear">Gear Hub</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/cookies">Cookies</Link>
            </nav>
          </div>
          <p className="mt-8 text-sm text-slate-400">© {new Date().getFullYear()} PondCo (pondco.online). All guides are educational; verify product and chemical instructions against the manufacturer's label.</p>
        </div>
      </footer>
    </div>
  )
}

export default function App() { return <BrowserRouter><ScrollToTop /><Layout /></BrowserRouter> }
