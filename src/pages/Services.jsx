import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, HardHat, Compass, RefreshCw, Cpu, Layers, ArrowRight } from 'lucide-react'

export default function Services() {
  const serviceList = [
    {
      title: 'Planning & Siting Analysis',
      icon: Compass,
      desc: 'Conducting FAA Order 6480.7E compliant airport traffic control tower sighting assessments, spatial analysis, and visual clearance boundary mapping.'
    },
    {
      title: 'Integrated Architecture & Engineering',
      icon: Layers,
      desc: 'Delivering full-service structural, mechanical, electrical, and plumbing engineering schemas from initial concept design through final cab console layouts.'
    },
    {
      title: 'Program & Construction Management',
      icon: HardHat,
      desc: 'Managing bid-support workflows, contractor onboarding, field inspections, safety reviews, and on-site construction oversight.'
    },
    {
      title: 'Project Controls & Cost Estimating',
      icon: ShieldCheck,
      desc: 'Continuous scheduling governance, resource allocation mapping, LOE calculations, and change-order risk assessments.'
    },
    {
      title: 'RAG Knowledge Bases & AI Automation',
      icon: Cpu,
      desc: 'Building vector-embedding data pipelines that ingest blueprint specs, meeting logs, and hours trackers to power role-based employee AI assistants.'
    },
    {
      title: 'Enterprise Data Migration',
      icon: RefreshCw,
      desc: 'Developing secure schema models for transition of historical bids, Gantt schedules, materials registers, and stakeholder approvals.'
    }
  ]

  return (
    <div className="space-y-12 max-w-5xl mx-auto py-6 font-header animate-slide-in">
      {/* Dynamic Hero Video Underlayment (Pulsing Network Mesh/Nodes) */}
      <div className="relative rounded-3xl overflow-hidden glass-panel-accent p-8 min-h-[200px] flex items-center shadow-xl border border-slate-800">
        <div className="absolute inset-0 z-0 bg-[#0a261a] opacity-40">
          <div className="absolute inset-0 bg-repeat-x opacity-25 pointer-events-none" style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="200" viewBox="0 0 800 200"><line x1="50" y1="50" x2="150" y2="150" stroke="emerald" stroke-width="1"/><line x1="150" y1="150" x2="250" y2="50" stroke="emerald" stroke-width="1"/><circle cx="50" cy="50" r="4" fill="white" className="animate-pulse"/><circle cx="150" cy="150" r="4" fill="cyan"/><circle cx="250" cy="50" r="4" fill="white" className="animate-pulse"/></svg>')`
          }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-0" />
        
        <div className="z-10 space-y-2">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Integrated Capabilities</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wider">Services &amp; Capabilities</h1>
          <p className="text-xs text-slate-400 font-serif max-w-md">Standards-aligned solutions for infrastructure delivery, project controls, and enterprise SaaS integration.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Services Grid (Col 1-8) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceList.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="glass-panel rounded-3xl p-8 relative overflow-hidden group hover:border-emerald-500/50 hover:scale-[1.01] transition-all duration-300 shadow-[0_12px_24px_rgba(0,0,0,0.5)]">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 text-emerald-400 group-hover:text-emerald-300 transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]">
                    <Icon size={22} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">{service.title}</h3>
                    <p className="text-xs text-slate-400 font-serif leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Right Side: Unique Page Picture/Illustration (Col 9-12) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel rounded-2xl p-6 space-y-4 border border-slate-800 shadow-xl text-center">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">A/E Engineering Nodes</h3>
            {/* Unique illustration SVG */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-900 flex justify-center">
              <svg className="w-full h-32 text-emerald-400/80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="20" y="20" width="60" height="60" rx="4" />
                <circle cx="50" cy="50" r="15" stroke="amber" />
                <line x1="20" y1="20" x2="80" y2="80" strokeDasharray="3,3" />
                <line x1="80" y1="20" x2="20" y2="80" strokeDasharray="3,3" />
              </svg>
            </div>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Structural Matrix Model</p>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="glass-panel rounded-3xl p-8 text-center max-w-3xl mx-auto space-y-6 border border-slate-800 shadow-2xl relative">
        <h3 className="text-xl font-bold text-white uppercase tracking-wider">Configure Consulting Services</h3>
        <p className="text-xs text-slate-400 max-w-lg mx-auto leading-relaxed font-serif">
          Pondco.online designs and deploys custom operating workspaces, RAG databases, and custom AI agents for architecture, engineering, and construction clients.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-header font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-[0_4px_12px_rgba(16,185,129,0.3)] transition-transform duration-200 active:translate-y-px"
        >
          <span>Connect with a consultant</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}
