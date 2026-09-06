import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const pages = {
  '/': {
    title: 'Aviation Facilities Knowledge | Pondco Online',
    description: 'Plain-language resources for understanding aviation-facility planning, procurement, and project delivery.',
    eyebrow: 'Aviation facilities knowledge base',
    heading: 'Clear context for complex aviation-facility projects.',
    intro: 'Pondco Online publishes practical, plainly written background material for people evaluating aviation-facility planning and delivery. It is an independent information resource, not a substitute for professional engineering, legal, procurement, or safety advice.',
    sections: [
      ['Start with the project question', 'Every airport project begins with constraints: operational need, site conditions, funding rules, schedule, and stakeholder responsibilities. Defining those constraints early makes later design and procurement decisions easier to evaluate.'],
      ['Understand the delivery path', 'Public infrastructure work often moves through discovery, feasibility, scope definition, procurement, design, construction, and closeout. Each phase produces different records and decisions; keeping them traceable helps teams communicate clearly.'],
      ['Use independent review', 'A qualified team should validate technical assumptions, regulatory obligations, and site-specific risks before a project proceeds. Readers should consult the appropriate licensed professionals and public authorities for decisions affecting an active facility.'],
    ],
  },
  '/services': {
    title: 'Aviation Project Delivery Topics | Pondco Online',
    description: 'An overview of common topics in aviation-facility planning and project delivery.',
    eyebrow: 'Project delivery topics',
    heading: 'A practical map of the work behind aviation facilities.',
    intro: 'This overview is educational. It does not describe current projects, client engagements, approvals, or professional services offered by a specific firm.',
    sections: [
      ['Planning and scope', 'Useful scopes identify the operating problem, desired outcome, decision-makers, known constraints, and information still needed. Clear scope language is the foundation for a defensible procurement process.'],
      ['Design coordination', 'Design coordination connects civil, structural, mechanical, electrical, communications, security, and operational requirements. The right disciplines and approvals depend on the facility and jurisdiction.'],
      ['Construction and closeout', 'During construction, teams generally track submittals, changes, inspections, commissioning, records, and handover requirements. The governing contract and authority establish the actual process.'],
    ],
  },
  '/markets': {
    title: 'Public Infrastructure Context | Pondco Online',
    description: 'Background on stakeholder coordination and public infrastructure decision-making.',
    eyebrow: 'Public infrastructure context',
    heading: 'Infrastructure decisions are coordination decisions.',
    intro: 'Airport and public-facility projects connect operators, communities, public agencies, consultants, contractors, and funding bodies. This resource explains the coordination themes commonly involved.',
    sections: [
      ['Operational continuity', 'Facilities are often improved while normal operations continue. Planning should account for access, phasing, communications, safety controls, and contingency planning.'],
      ['Public accountability', 'Public projects benefit from clear records of scope, selection, changes, and outcomes. Requirements vary by jurisdiction, funding source, and procurement method.'],
      ['Long-term stewardship', 'Design choices affect maintainability, resilience, accessibility, and operating cost for years. A documented lifecycle perspective helps decision-makers weigh immediate and future tradeoffs.'],
    ],
  },
  '/portfolio': {
    title: 'How to Evaluate Project Information | Pondco Online',
    description: 'A reader guide for evaluating aviation and infrastructure project information responsibly.',
    eyebrow: 'Reader guide',
    heading: 'How to evaluate project information responsibly.',
    intro: 'Published project summaries should distinguish verified facts from plans, estimates, and illustrative examples. This page explains the signals readers can look for when assessing project information.',
    sections: [
      ['Look for primary sources', 'Where available, use public owner records, procurement notices, permits, and official agency publications to corroborate material claims.'],
      ['Check dates and scope', 'A project title alone rarely explains its current status. Confirm the date, location, phase, delivery method, and the party responsible for each statement.'],
      ['Treat illustrations carefully', 'Concept images, diagrams, schedules, and status graphics may be illustrative. They should not be understood as regulatory approval, final design, or an operational commitment without supporting documentation.'],
    ],
  },
  '/faq': {
    title: 'Aviation Facilities FAQ | Pondco Online',
    description: 'Frequently asked questions about evaluating aviation-facility project information.',
    eyebrow: 'Frequently asked questions',
    heading: 'Aviation-facility questions, answered carefully.',
    intro: 'These answers provide general information only. Requirements and responsibilities differ by airport, owner, jurisdiction, and contract.',
    sections: [
      ['Is this professional advice?', 'No. This site provides educational background. Decisions affecting a project should be made with the appropriate qualified and licensed professionals.'],
      ['How can I verify a project claim?', 'Start with the relevant public owner, agency, procurement record, or project contact. Do not rely solely on a marketing summary or a status graphic.'],
      ['Why do schedules change?', 'Schedules can be affected by funding, permitting, design coordination, procurement, weather, site conditions, materials, approvals, and operational constraints.'],
    ],
  },
  '/insights': {
    title: 'Aviation Facilities Insights | Pondco Online',
    description: 'Original educational notes about aviation-facility planning and delivery.',
    eyebrow: 'Insights',
    heading: 'Useful notes for evaluating aviation-facility work.',
    intro: 'Our editorial standard is simple: explain a topic plainly, identify uncertainty, and avoid presenting assumptions or illustrations as verified project facts.',
    sections: [
      ['A good brief reduces rework', 'A strong project brief makes the operating need, users, constraints, decision authority, and success criteria visible. It gives every later decision a shared point of reference.'],
      ['Data needs context', 'Dashboards and milestones can be helpful, but only when their source, owner, date, and limitations are clear. A polished interface does not validate the underlying data.'],
      ['Public trust is built in the details', 'Clear language, accessible documents, accurate status labels, and a way to reach the publisher help readers assess information responsibly.'],
    ],
  },
}

function Seo({ title, description, noIndex = false }) {
  useEffect(() => {
    document.title = title
    const setMeta = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`)
      if (!element) { element = document.createElement('meta'); element.name = name; document.head.append(element) }
      element.content = content
    }
    setMeta('description', description)
    setMeta('robots', noIndex ? 'noindex, nofollow' : 'index, follow')
  }, [title, description, noIndex])
  return null
}

function ContentPage({ page }) {
  return <>
    <Seo title={page.title} description={page.description} />
    <article className="mx-auto max-w-3xl space-y-10 py-12 sm:py-20">
      <header className="space-y-5"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">{page.eyebrow}</p><h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl">{page.heading}</h1><p className="max-w-2xl text-lg leading-8 text-slate-300">{page.intro}</p></header>
      <div className="space-y-8">{page.sections.map(([heading, text]) => <section key={heading} className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 sm:p-8"><h2 className="text-2xl font-semibold text-white">{heading}</h2><p className="mt-3 leading-7 text-slate-300">{text}</p></section>)}</div>
    </article>
  </>
}

function LegalPage({ title, children }) {
  return <><Seo title={`${title} | Pondco Online`} description={`${title} for Pondco Online.`} /><article className="mx-auto max-w-3xl space-y-6 py-12 sm:py-20"><h1 className="text-4xl font-bold text-white">{title}</h1><div className="space-y-5 leading-7 text-slate-300">{children}</div></article></>
}

function NotFound() { return <LegalPage title="Page not found"><p>The page you requested is not published. Return to the <Link className="text-sky-300 underline" to="/">home page</Link>.</p></LegalPage> }

function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])
  const links = [['Home', '/'], ['Topics', '/services'], ['Context', '/markets'], ['FAQ', '/faq'], ['Insights', '/insights']]
  return <div className="min-h-screen bg-slate-950 text-slate-100"><header className="border-b border-slate-800 bg-slate-950/95"><nav className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Primary navigation"><Link className="font-bold tracking-wide text-white" to="/">PONDCO <span className="text-sky-300">ONLINE</span></Link><button className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-slate-700 text-white md:hidden" type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}<span className="sr-only">Menu</span></button><div className="hidden items-center gap-5 md:flex">{links.map(([label, to]) => <Link className="text-sm text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-300" key={to} to={to}>{label}</Link>)}</div></nav>{open && <div id="mobile-nav" className="border-t border-slate-800 px-4 py-3 md:hidden">{links.map(([label, to]) => <Link className="block min-h-11 py-3 text-slate-200" key={to} to={to}>{label}</Link>)}</div>}</header><main className="px-4 sm:px-6"><Routes>{Object.entries(pages).map(([path, page]) => <Route key={path} path={path} element={<ContentPage page={page} />} />)}<Route path="/about" element={<LegalPage title="About Pondco Online"><p>Pondco Online is an independent educational website about aviation-facility planning, project delivery, and how to evaluate infrastructure information. It does not present itself as an airport operator, public agency, or licensed professional practice.</p><p>We publish explanatory material and label general information as such. Readers should verify project-specific claims with the relevant owner or authority.</p></LegalPage>} /><Route path="/contact" element={<LegalPage title="Contact"><p>For a correction, accessibility request, or question about material published on this site, use the site owner’s established contact channel. This site does not publish an unverified email address, phone number, or postal address.</p><p>If you are seeking project-specific information, contact the relevant airport owner, public agency, or procurement authority directly.</p></LegalPage>} /><Route path="/privacy" element={<LegalPage title="Privacy Policy"><p>We do not sell personal information. This site currently does not include advertising code, account registration, contact forms, or analytics that intentionally collect visitor-identifying information.</p><p>Standard web hosting and security services may process limited technical request data, such as IP address, browser type, and request time, to deliver and protect the site. We do not use that information to build advertising audiences.</p><p>If advertising or analytics is enabled later, this policy and any required consent experience will be updated before those technologies are activated.</p></LegalPage>} /><Route path="/terms" element={<LegalPage title="Terms of Use"><p>The material on Pondco Online is provided for general educational purposes. It is not engineering, architectural, legal, procurement, safety, financial, or other professional advice.</p><p>Do not rely on this site as a substitute for project records, regulatory requirements, or advice from qualified professionals. We may revise or remove content when accuracy, context, or clarity requires it.</p></LegalPage>} /><Route path="/cookies" element={<LegalPage title="Cookie Notice"><p>Pondco Online does not currently place advertising or analytics cookies. Essential hosting and security services may use strictly necessary technical mechanisms to provide and protect the site.</p><p>Before enabling non-essential cookies, personalized advertising, or analytics, we will provide an appropriate consent choice where required.</p></LegalPage>} /><Route path="*" element={<NotFound />} /></Routes></main><footer className="border-t border-slate-800"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6"><p>© {new Date().getFullYear()} Pondco Online</p><div className="flex flex-wrap gap-x-5 gap-y-2"><Link to="/about">About</Link><Link to="/contact">Contact</Link><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/cookies">Cookies</Link></div></div></footer></div>
}

export default function App() { return <BrowserRouter><Layout /></BrowserRouter> }
