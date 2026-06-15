import React from 'react'
import { Calendar, User, ArrowRight } from 'lucide-react'

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
    <div className="space-y-12 max-w-4xl mx-auto py-6 font-header">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase font-header">News &amp; Insights</h1>
        <p className="text-sm text-slate-400 font-serif">Project milestones, press releases, and infrastructure announcements.</p>
      </div>

      <div className="space-y-8">
        {articles.map((art, idx) => (
          <div key={idx} className="glass-panel rounded-2xl p-8 space-y-4 hover:border-slate-700/80 transition-all group">
            <div className="flex items-center space-x-6 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
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
    </div>
  )
}
