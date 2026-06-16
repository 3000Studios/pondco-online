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
      {/* Dynamic Hero Video Underlayment (Earth Coordinate Lines/Global Telemetry) */}
      <div className="relative rounded-3xl overflow-hidden glass-panel-accent p-8 min-h-[200px] flex items-center shadow-xl border border-slate-800">
        <div className="absolute inset-0 z-0 bg-[#140e32] opacity-40">
          <div className="absolute inset-0 bg-repeat-x opacity-25 pointer-events-none" style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="200" viewBox="0 0 800 200"><ellipse cx="400" cy="100" rx="300" ry="80" stroke="indigo" fill="none" stroke-width="1"/><ellipse cx="400" cy="100" rx="200" ry="50" stroke="indigo" fill="none" stroke-width="1"/><line x1="400" y1="0" x2="400" y2="200" stroke="indigo" stroke-width="1"/></svg>')`
          }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-0" />
        
        <div className="z-10 space-y-2">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block">Global Solutions</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wider">Markets We Coordinate</h1>
          <p className="text-xs text-slate-400 font-serif max-w-md">Providing full-service architecture, engineering, and program management across public and private sectors.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Markets Grid (Col 1-8) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
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

        {/* Right Side: Unique Page Picture/Illustration (Col 9-12) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel rounded-2xl p-6 space-y-4 border border-slate-800 shadow-xl text-center">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Corporate Market Share</h3>
            {/* Unique illustration SVG */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-900 flex justify-center">
              <svg className="w-full h-32 text-indigo-400/80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="50" cy="50" r="30" stroke="cyan" />
                <path d="M50 20 L50 50 L80 50" stroke="amber" />
                <path d="M50 50 L30 70" />
                <circle cx="50" cy="20" r="3" fill="indigo" />
                <circle cx="80" cy="50" r="3" fill="cyan" />
                <circle cx="30" cy="70" r="3" fill="amber" />
              </svg>
            </div>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Consolidated Sectors Registry</p>
          </div>
        </div>
      </div>
    </div>
  )
}
