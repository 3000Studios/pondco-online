import React from 'react'
import { HelpCircle, ShieldAlert } from 'lucide-react'

export default function FAQ() {
  const faqs = [
    { q: 'What does Pondco.online provide?', a: 'Pondco.online functions as the digital operating and presentation layer for Pond & Company\'s structural architecture, airfield design, and SaaS-based project controls.' },
    { q: 'How does the Client Portal progress tracker work?', a: 'Clients log in with a unique Project Access Key provided in their Service Agreement, granting secure, high-level views of milestone timelines and deliverables without exposing internal hours or risk registers.' },
    { q: 'What are the two airport control tower contracts?', a: 'Pond was awarded the architectural and engineering design for towers at French Valley Airport (F70) in Murrieta, CA, and Jacqueline Cochran Regional Airport (TRM) in Thermal, CA, under the FAA Federal Contract Tower Program.' }
  ]

  return (
    <div className="space-y-12 max-w-5xl mx-auto py-6 font-header animate-slide-in">
      {/* Dynamic Hero Video Underlayment (Query Help Bubble / Signal Wave Telemetry) */}
      <div className="relative rounded-3xl overflow-hidden glass-panel-accent p-8 min-h-[200px] flex items-center shadow-xl border border-slate-800">
        <div className="absolute inset-0 z-0 bg-[#081a38] opacity-50">
          <div className="absolute inset-0 bg-repeat-x opacity-20 pointer-events-none" style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="200" viewBox="0 0 800 200"><path d="M0 100 Q200 40 400 100 T800 100" fill="none" stroke="cyan" stroke-width="1.5" stroke-dasharray="10,5"/></svg>')`
          }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-0" />
        
        <div className="z-10 space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Operational FAQ</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wider">Frequently Asked Questions</h1>
          <p className="text-xs text-slate-400 font-serif max-w-md">Public information, compliance standards, and portal integration details.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: FAQs (Col 1-8) */}
        <div className="lg:col-span-8 space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-6 space-y-2 hover:border-cyan-500/30 transition-all shadow-lg">
              <h3 className="text-base font-bold text-white uppercase tracking-wide flex items-center gap-2">
                <HelpCircle size={16} className="text-cyan-400" />
                {faq.q}
              </h3>
              <p className="text-xs text-slate-400 font-serif leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Right Side: Unique Page Picture/Illustration (Col 9-12) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel rounded-2xl p-6 space-y-4 border border-slate-800 shadow-xl text-center">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">FAA Compliance Schema</h3>
            {/* Unique illustration SVG */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-900 flex justify-center">
              <svg className="w-full h-32 text-orange-400/80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="50" cy="50" r="35" stroke="cyan" />
                <path d="M50 15 L50 85 M15 50 L85 50" strokeDasharray="3,3" />
                <polygon points="50,25 55,45 75,50 55,55 50,75 45,55 25,50 45,45" fill="none" stroke="amber" />
              </svg>
            </div>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Visual clearance boundaries</p>
          </div>
        </div>
      </div>
    </div>
  )
}
