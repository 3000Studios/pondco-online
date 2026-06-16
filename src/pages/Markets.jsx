import React from 'react'
import { Shield, Plane, Activity, Compass, Flame, Cpu } from 'lucide-react'

export default function Markets() {
  const marketList = [
    { name: 'Aviation Infrastructure', icon: Plane, desc: 'FAA Federal Contract Tower program design, airfield planning, and runway safety zoning.' },
    { name: 'Government & Defense', icon: Shield, desc: 'Federal, state, and municipal engineering contracts and secure facility development.' },
    { name: 'Transportation & Logistics', icon: Compass, desc: 'Highway systems, bridge structures, and regional transit terminal designs.' },
    { name: 'Energy & Utilities', icon: Flame, desc: 'Power generation facilities, grid distribution systems, and clean energy planning.' },
    { name: 'Industrial & Manufacturing', icon: Cpu, desc: 'Process engineering, heavy manufacturing plants, and warehousing facilities.' },
    { name: 'Life Sciences & Biotech', icon: Activity, desc: 'Research laboratories, cleanrooms, and pharmaceutical production facilities.' }
  ]

  return (
    <div className="space-y-12 max-w-5xl mx-auto py-6 font-header animate-slide-in">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-slate-900 border border-indigo-800/40 text-indigo-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
          <span>Global Markets</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">Markets We Coordinate</h1>
        <p className="text-sm text-slate-400 font-serif leading-relaxed">
          Providing full-service architecture, engineering, and program management across diverse public and private sectors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {marketList.map((m, idx) => {
          const Icon = m.icon
          return (
            <div key={idx} className="glass-panel rounded-3xl p-6 relative overflow-hidden group hover:border-indigo-500/50 hover:scale-[1.01] transition-all duration-300 shadow-[0_12px_24px_rgba(0,0,0,0.5)]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 text-indigo-400 group-hover:text-indigo-300 transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]">
                  <Icon size={20} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">{m.name}</h3>
                  <p className="text-xs text-slate-400 font-serif leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
