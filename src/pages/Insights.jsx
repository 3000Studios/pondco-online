import React from 'react'
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react'

export default function Insights() {
  const articles = [
    {
      title: 'Pond Awarded Two Control Towers in California',
      date: 'April 03, 2026',
      author: 'Media Relations',
      summary: 'Riverside County Aviation Division selects Pond & Company for schematic design, bid support, and construction oversight of two new FAA Contract Towers.'
    },
    {
      title: 'Agile Delivery Framework for Public Infrastructure',
      date: 'May 12, 2026',
      author: 'Engagement Management',
      summary: 'How shifting traditional engineering pipelines into validation-gated Agile sprints increases delivery efficiency and eliminates change-order friction.'
    }
  ]

  return (
    <div className="space-y-12 max-w-5xl mx-auto py-6 font-header animate-slide-in">
      {/* Dynamic Hero Video Underlayment (Spinning News Globe/Telemetry) */}
      <div className="relative rounded-3xl overflow-hidden glass-panel-accent p-8 min-h-[200px] flex items-center shadow-xl border border-slate-800">
        <div className="absolute inset-0 z-0 bg-[#0c1b40] opacity-40">
          <div className="absolute inset-0 bg-repeat-x opacity-20 pointer-events-none" style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="200" viewBox="0 0 600 200"><circle cx="300" cy="100" r="80" stroke="cyan" fill="none" stroke-width="1" stroke-dasharray="5,5"/><circle cx="300" cy="100" r="40" stroke="cyan" fill="none" stroke-width="1"/></svg>')`,
            animation: 'radar-sweep 40s linear infinite'
          }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-0" />
        
        <div className="z-10 space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Corporate Releases</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wider">News &amp; Insights</h1>
          <p className="text-xs text-slate-400 font-serif max-w-md">Project milestones, press releases, and infrastructure announcements.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Article Grid (Col 1-8) */}
        <div className="lg:col-span-8 space-y-8">
          {articles.map((art, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-8 space-y-4 hover:border-cyan-500/30 transition-all group shadow-lg">
              <div className="flex items-center space-x-6 text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono">
                <span className="flex items-center gap-1"><Calendar size={12} /> {art.date}</span>
                <span className="flex items-center gap-1"><User size={12} /> {art.author}</span>
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wide group-hover:text-cyan-400 transition-colors">{art.title}</h3>
              <p className="text-xs text-slate-400 font-serif leading-relaxed">{art.summary}</p>
              <button className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors">
                <span>Read Press Release</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Right Side: Unique Page Picture/Illustration (Col 9-12) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel rounded-2xl p-6 space-y-4 border border-slate-800 shadow-xl text-center">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Press Spec Diagram</h3>
            {/* Unique illustration SVG */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-900 flex justify-center">
              <svg className="w-full h-32 text-cyan-400/80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="10" y="10" width="80" height="80" rx="5" />
                <line x1="20" y1="30" x2="80" y2="30" />
                <line x1="20" y1="45" x2="60" y2="45" />
                <line x1="20" y1="60" x2="70" y2="60" />
                <circle cx="75" cy="75" r="8" stroke="amber" strokeDasharray="2,2" />
              </svg>
            </div>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Document registry model schema v1.4</p>
          </div>
        </div>
      </div>
    </div>
  )
}
