import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, HardHat, Compass, FileSearch, RefreshCw, Cpu, Layers, ArrowRight } from 'lucide-react'

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
    <div className="space-y-12 max-w-5xl mx-auto py-6">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white font-header">
          PROFESSIONAL SERVICES &amp; SYSTEM CAPABILITIES
        </h1>
        <p className="text-sm text-slate-400">
          Standards-aligned solutions for infrastructure delivery, project controls, and enterprise SaaS integration.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {serviceList.map((service, index) => {
          const Icon = service.icon
          return (
            <div key={index} className="glass-panel rounded-2xl p-8 relative overflow-hidden group hover:border-slate-700/80 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 text-cyan-400 group-hover:text-amber-400 transition-colors">
                  <Icon size={22} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white font-header uppercase tracking-wider">{service.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Call to action */}
      <div className="glass-panel rounded-2xl p-8 text-center max-w-3xl mx-auto space-y-6">
        <h3 className="text-xl font-bold text-white font-header uppercase tracking-wider">Interested in our consulting services?</h3>
        <p className="text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
          Pondco.online designs and deploys custom operating workspaces, RAG databases, and custom AI agents for architecture, engineering, and construction clients.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-header font-bold px-6 py-3 rounded-lg text-xs uppercase tracking-wider"
        >
          <span>Connect with a consultant</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}
