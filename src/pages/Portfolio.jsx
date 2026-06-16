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
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-slate-900 border border-amber-800/40 text-amber-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
          <span>Project History</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">Project Portfolio</h1>
        <p className="text-sm text-slate-400 font-serif leading-relaxed">
          A showcase of our architectural, engineering, and infrastructure delivery successes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    </div>
  )
}
