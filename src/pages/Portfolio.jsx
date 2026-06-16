import React from 'react'

export default function Portfolio() {
  const projects = [
    {
      title: 'French Valley Airport ATCT',
      location: 'Murrieta, CA',
      status: 'Schematic Design Complete',
      desc: 'Architectural and engineering services for the schematic design and commissioning of a new airport traffic control tower under the FAA Federal Contract Tower Program.'
    },
    {
      title: 'Jacqueline Cochran Regional ATCT',
      location: 'Thermal, CA',
      status: 'Design Development Phase',
      desc: 'Design and construction oversight of an 82 ft AGL control tower to relieve high-density air traffic peaks in the Coachella Valley region.'
    },
    {
      title: 'Regional Logistics Center',
      location: 'Atlanta, GA',
      status: 'Commissioned',
      desc: 'Full-service civil engineering, utility planning, and construction management for a 1.2M sq ft logistics hub.'
    }
  ]

  return (
    <div className="space-y-12 max-w-5xl mx-auto py-6 font-header animate-slide-in">
      {/* Dynamic Hero Video Underlayment (Isometric Blueprint Grid) */}
      <div className="relative rounded-3xl overflow-hidden glass-panel-accent p-8 min-h-[200px] flex items-center shadow-xl border border-slate-800">
        <div className="absolute inset-0 z-0 bg-[#2b1f0c] opacity-30">
          <div className="absolute inset-0 bg-repeat-x opacity-25 pointer-events-none" style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="200" viewBox="0 0 800 200"><path d="M0 50 L800 150 M0 150 L800 50 M100 0 L100 200 M300 0 L300 200 M500 0 L500 200 M700 0 L700 200" fill="none" stroke="amber" stroke-width="0.5"/></svg>')`
          }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-0" />
        
        <div className="z-10 space-y-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">Sector Experience</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wider">Project Portfolio</h1>
          <p className="text-xs text-slate-400 font-serif max-w-md">A showcase of our architectural, engineering, and infrastructure delivery successes.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Projects Grid (Col 1-8) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <div key={idx} className="glass-panel rounded-3xl p-6 relative overflow-hidden group space-y-4 hover:border-amber-500/50 hover:scale-[1.02] transition-all duration-300 shadow-[0_12px_24px_rgba(0,0,0,0.5)]">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">{p.location}</span>
                  <h3 className="text-base font-bold text-white uppercase tracking-wide mt-1">{p.title}</h3>
                </div>
              </div>
              <p className="text-xs text-slate-400 font-serif leading-relaxed">{p.desc}</p>
              <div className="border-t border-slate-900 pt-3 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider font-mono">
                <span className="text-slate-500">Status</span>
                <span className="text-amber-400">{p.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Unique Page Picture/Illustration (Col 9-12) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel rounded-2xl p-6 space-y-4 border border-slate-800 shadow-xl text-center">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Logistics Grid Layout</h3>
            {/* Unique illustration SVG */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-900 flex justify-center">
              <svg className="w-full h-32 text-amber-500/80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="15" y="15" width="30" height="30" rx="3" stroke="cyan" />
                <rect x="55" y="15" width="30" height="30" rx="3" />
                <rect x="15" y="55" width="30" height="30" rx="3" />
                <rect x="55" y="55" width="30" height="30" rx="3" stroke="cyan" />
                <path d="M45 30 L55 30 M30 45 L30 55" strokeDasharray="2,2" />
              </svg>
            </div>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Infrastructure Hub Blueprint</p>
          </div>
        </div>
      </div>
    </div>
  )
}
