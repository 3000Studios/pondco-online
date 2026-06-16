import React, { useState } from 'react'
import { Calendar, User, ArrowRight, ShieldCheck } from 'lucide-react'

export default function Insights() {
  const [selectedArticle, setSelectedArticle] = useState(null)

  const articles = [
    {
      title: 'Pond Awarded Two Control Towers in California',
      date: 'April 03, 2026',
      author: 'Media Relations',
      summary: 'Riverside County Aviation Division selects Pond & Company for schematic design, bid support, and construction oversight of two new FAA Contract Towers.',
      detail: {
        subtitle: 'Contract Scope & Funding Allocation',
        body: 'Pond & Company has finalized contractual terms for the design and construction support of two FAA-standard control towers at French Valley Airport (F70) and Jacqueline Cochran Airport (TRM). The program is funded under municipal aviation infrastructure grants with strict FAA accepting inspection checkpoints.',
        sprints: 'Sprint 12: Ground Clearance (Complete) | Sprint 13: Cab Siting (In Progress)',
        suppliers: 'KSA Civil Planners, California Department of Transportation'
      }
    },
    {
      title: 'Agile Delivery Framework for Public Infrastructure',
      date: 'May 12, 2026',
      author: 'Engagement Management',
      summary: 'How shifting traditional engineering pipelines into validation-gated Agile sprints increases delivery efficiency and eliminates change-order friction.',
      detail: {
        subtitle: 'Validation-Gated Agile Engineering',
        body: 'By introducing validation gates (where Revit BIM models and civil calculations require sign-off logs prior to pipeline phase updates), Pond has decreased structural revision cycles by 40% and improved subconsultant scheduling alignment.',
        sprints: 'BIM Concourse coordination complete, safety locks integrated',
        suppliers: 'Pond Integrated A/E Dev Team, FAA Joint Acceptance Committee'
      }
    }
  ]

  return (
    <div className="space-y-12 max-w-5xl mx-auto py-6 font-header animate-slide-in">
      
      {/* Hero with Autoplay video background */}
      <div className="relative rounded-3xl overflow-hidden glass-panel p-8 min-h-[220px] flex items-center shadow-2xl border border-slate-800/85">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-[0.25]"
        >
          <source src="https://raw.githubusercontent.com/noorkhokhar99/yolo-object-detect/main/airport.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-0" />
        
        <div className="z-10 space-y-2">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block animate-pulse">Corporate Releases</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wider text-raised-hd animate-slide-header">News &amp; Insights</h1>
          <p className="text-xs text-slate-300 font-serif max-w-md">Project milestones, press releases, and infrastructure announcements.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Article Grid (Col 1-8) */}
        <div className="lg:col-span-8 space-y-8">
          {articles.map((art, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-8 space-y-4 hover:border-blue-500/30 transition-all group shadow-lg">
              <div className="flex items-center space-x-6 text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono">
                <span className="flex items-center gap-1"><Calendar size={12} /> {art.date}</span>
                <span className="flex items-center gap-1"><User size={12} /> {art.author}</span>
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wide group-hover:text-blue-400 transition-colors">{art.title}</h3>
              <p className="text-xs text-slate-400 font-serif leading-relaxed">{art.summary}</p>
              <button 
                onClick={() => setSelectedArticle(art)}
                className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors focus:outline-none"
              >
                <span>Read Press Release</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Right Side: Compliance diagram (Col 9-12) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel rounded-2xl p-6 space-y-4 border border-slate-800 shadow-xl text-center">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Press Spec Diagram</h3>
            {/* Unique illustration SVG */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-900 flex justify-center">
              <svg className="w-full h-32 text-blue-400/80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
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

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md px-4">
          <div className="glass-panel rounded-3xl p-6 max-w-md w-full border border-slate-800 space-y-6 shadow-2xl relative text-left animate-slide-header">
            <div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1">
                <ShieldCheck size={12} />
                <span>Verified Press Release Document</span>
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-wider">{selectedArticle.title}</h3>
              <span className="text-[9px] font-mono text-slate-500 uppercase">{selectedArticle.date} • {selectedArticle.author}</span>
            </div>
            
            <div className="space-y-4 text-xs font-serif text-slate-300 leading-relaxed">
              <h4 className="font-bold text-white uppercase tracking-wider font-header text-[10px]">{selectedArticle.detail.subtitle}</h4>
              <p>{selectedArticle.detail.body}</p>
            </div>
            
            <div className="space-y-3 border-t border-slate-900 pt-4 text-[11px]">
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Associated Sprints</span>
                <p className="text-slate-400">{selectedArticle.detail.sprints}</p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Involved Partners</span>
                <p className="text-slate-400">{selectedArticle.detail.suppliers}</p>
              </div>
            </div>

            <button 
              onClick={() => setSelectedArticle(null)}
              className="w-full button-3d-cyan text-white font-bold py-2.5 btn-hexagon text-xs uppercase tracking-wider block text-center"
            >
              Close Press Release
            </button>
          </div>
        </div>
      )}

    </div>
  )
}
