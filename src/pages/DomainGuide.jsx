import React, { useState } from 'react'
import { Rocket, ShieldCheck, Mail, Database, HelpCircle, Code, Globe, Sparkles } from 'lucide-react'

export default function DomainGuide() {
  const [activeTab, setActiveTab] = useState('option1')

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 py-8">
        <div className="inline-flex items-center space-x-2 bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
          <Sparkles size={14} />
          <span>Domain Activation Strategy</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
          Deploying <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono">pondco.online</span>
        </h1>
        <p className="text-base text-slate-400 max-w-2xl mx-auto">
          Congrats on the new domain, <strong className="text-slate-200">pondco.online</strong>! Here is your curated blueprint to bundle coding, hosting, deploying, and marketing for free.
        </p>
      </div>

      {/* Tabs Selector */}
      <div className="flex justify-center border-b border-slate-900 pb-px">
        <div className="flex space-x-2 bg-slate-950 p-1.5 rounded-xl border border-slate-900">
          <button
            onClick={() => setActiveTab('option1')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'option1'
                ? 'bg-cyan-950 text-cyan-400 border border-cyan-800/30 shadow'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
            }`}
          >
            <Code size={16} />
            <span>Option 1: Modern Web App</span>
          </button>
          <button
            onClick={() => setActiveTab('option2')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'option2'
                ? 'bg-blue-950/80 text-blue-400 border border-blue-800/30 shadow'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
            }`}
          >
            <Database size={16} />
            <span>Option 2: Full-Stack Backend</span>
          </button>
          <button
            onClick={() => setActiveTab('option3')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'option3'
                ? 'bg-purple-950/80 text-purple-400 border border-purple-800/30 shadow'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
            }`}
          >
            <Globe size={16} />
            <span>Option 3: No-Code All-in-Ones</span>
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="glass-panel rounded-2xl p-8 min-h-[350px]">
        {activeTab === 'option1' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-cyan-400 mb-2">
              <Rocket size={24} />
              <h2 className="text-xl font-bold text-white">The Modern Web App Route (Highly Recommended)</h2>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              If you are writing custom code (like React, Vue, Next.js, or HTML/CSS/JS) and want seamless deployments, you can combine GitHub with a modern frontend cloud.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="bg-slate-950/60 border border-slate-900 rounded-xl p-5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">1. Code & Automate</div>
                <h3 className="text-md font-bold text-white">GitHub</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Free unlimited private repositories. Use GitHub Actions for automation, and press the <code className="bg-slate-900 px-1.5 py-0.5 rounded text-cyan-400">.</code> (period) key to launch web-based VS Code.
                </p>
              </div>

              <div className="bg-slate-950/60 border border-slate-900 rounded-xl p-5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">2. Host & Deploy</div>
                <h3 className="text-md font-bold text-white">Vercel or Netlify</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Generous free lifetime tiers with 100GB of bandwidth. Connects directly to GitHub to publish changes instantly with free custom SSL on <code className="text-cyan-400">pondco.online</code>.
                </p>
              </div>

              <div className="bg-slate-950/60 border border-slate-900 rounded-xl p-5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">3. Market & Analyze</div>
                <h3 className="text-md font-bold text-white">Integration Add-ons</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Utilize free transactional/marketing tools like <strong className="text-slate-200">Resend</strong> or <strong className="text-slate-200">Loop</strong> via integration portals, complete with built-in analytics.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'option2' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-blue-400 mb-2">
              <Database size={24} />
              <h2 className="text-xl font-bold text-white">The Full-Stack "Backend Included" Route</h2>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              If your domain requires a heavy backend (databases, user authentication, complex logic) rather than just a public webpage:
            </p>

            <div className="bg-slate-950/60 border border-slate-900 rounded-xl p-6 space-y-4 mt-4">
              <h3 className="text-lg font-bold text-white">Firebase (Google's Platform)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Firebase satisfies a large chunk of your deployment checklists in a single consolidated framework:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
                <div className="space-y-1">
                  <span className="font-semibold text-blue-400 block">Host & Deploy</span>
                  <p className="text-slate-400 leading-relaxed">Global CDN and free custom domain connection for pondco.online with SSL.</p>
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-blue-400 block">Serverless Logic</span>
                  <p className="text-slate-400 leading-relaxed">Write backend logic using Cloud Functions with no server maintenance.</p>
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-blue-400 block">Market & Retain</span>
                  <p className="text-slate-400 leading-relaxed">Includes Cloud Messaging and Google Analytics to track user conversion funnels.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'option3' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-purple-400 mb-2">
              <Globe size={24} />
              <h2 className="text-xl font-bold text-white">The Business / No-Code / SaaS All-in-Ones</h2>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              If you don't want to manage servers and want marketing tools natively built into the same dashboard where your site lives:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-slate-950/60 border border-slate-900 rounded-xl p-5 space-y-3">
                <h3 className="text-md font-bold text-white">HubSpot Free or Zoho Free</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Best for landing pages and blogs. Email marketing, custom contact forms, live chat, and CRM databases are fully unified out of the box.
                </p>
              </div>

              <div className="bg-slate-950/60 border border-slate-900 rounded-xl p-5 space-y-3">
                <h3 className="text-md font-bold text-white">Odoo</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Offers a "One App Free" rule. Selecting the Website app is completely free, including hosting, custom domain mapping, and a full website builder.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Summary Recommendation Section */}
      <section className="glass-panel rounded-2xl p-8 border border-slate-800 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Mail className="text-emerald-400" />
          Summary Recommendation
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          To get the absolute most power for free with <strong className="text-slate-300">pondco.online</strong>, pair <strong className="text-slate-300">GitHub</strong> (for coding) with <strong className="text-slate-300">Vercel/Netlify</strong> (for hosting/deploying), and drop in a free marketing tool like <strong className="text-slate-300">Mailchimp</strong> or <strong className="text-slate-300">Brevo</strong> (formerly Sendinblue) which give you up to thousands of free marketing emails per month.
        </p>
      </section>
    </div>
  )
}
