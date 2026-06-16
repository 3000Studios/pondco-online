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
    <div className="space-y-12 max-w-5xl mx-auto py-6 animate-slide-in">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-slate-900 border border-emerald-800/40 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider font-header">
          <span>Integrated Offerings</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white font-header uppercase">
          SERVICES &amp; CAPABILITIES
        </h1>
        <p className="text-sm text-slate-400 font-serif leading-relaxed">
          Standards-aligned solutions for infrastructure delivery, project controls, and enterprise SaaS integration.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {serviceList.map((service, index) => {
          const Icon = service.icon
          return (
            <div key={index} className="glass-panel rounded-3xl p-8 relative overflow-hidden group hover:border-emerald-500/50 hover:scale-[1.01] transition-all duration-300 shadow-[0_12px_24px_rgba(0,0,0,0.5)]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 text-emerald-400 group-hover:text-emerald-300 transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]">
                  <Icon size={22} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white font-header uppercase tracking-wider">{service.title}</h3>
                  <p className="text-xs text-slate-400 font-serif leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Call to action */}
      <div className="glass-panel rounded-3xl p-8 text-center max-w-3xl mx-auto space-y-6 border border-slate-800 shadow-2xl relative">
        <h3 className="text-xl font-bold text-white font-header uppercase tracking-wider">Configure Consulting Services</h3>
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
