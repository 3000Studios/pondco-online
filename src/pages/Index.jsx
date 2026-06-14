import React from 'react'
import { Link } from 'react-router-dom'
import { Building2, Compass, ArrowRight, ShieldCheck, MapPin, Award, CheckCircle2 } from 'lucide-react'

export default function Index() {
  return (
    <div className="space-y-16">
      {/* Hero Header */}
      <section className="text-center space-y-6 max-w-4xl mx-auto py-12">
        <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
          <Award size={14} />
          <span> Riverside County Contract Awarded</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-500 bg-clip-text text-transparent">
          Airport Traffic Control Tower Design Hub
        </h1>
        
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Operational engineering, architectural schema modeling, and real-time airspace telemetry interfaces for F70 and TRM towers under the FAA Federal Contract Tower Program.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link 
            to="/f70" 
            className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium px-6 py-3 rounded-lg shadow-lg shadow-cyan-500/10 transition-all hover:-translate-y-0.5"
          >
            <span>French Valley (F70) Module</span>
            <ArrowRight size={16} />
          </Link>
          <Link 
            to="/trm" 
            className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3 rounded-lg border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-0.5"
          >
            <span>Jacqueline Cochran (TRM) Module</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* French Valley Card */}
        <div className="glass-panel rounded-2xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all" />
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400 font-bold">F70</span>
            <div>
              <h3 className="text-xl font-bold text-white">French Valley Airport</h3>
              <p className="text-xs text-slate-400">Murrieta, CA • General Aviation Reliever</p>
            </div>
          </div>
          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            Architectural design for general aviation flight flow optimization. Focuses on local pattern tracking, pilot-tower workflows, and modular spatial layout integration.
          </p>
          <ul className="space-y-3 mb-8 text-xs text-slate-300">
            <li className="flex items-center space-x-2">
              <CheckCircle2 size={14} className="text-cyan-400" />
              <span>General Aviation Flight Flow Safety Tuning</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle2 size={14} className="text-cyan-400" />
              <span>Compact, Modular Cab Structural Design</span>
            </li>
          </ul>
          <Link to="/f70" className="inline-flex items-center space-x-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
            <span>Access F70 Control Module</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Jacqueline Cochran Card */}
        <div className="glass-panel rounded-2xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all" />
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 font-bold">TRM</span>
            <div>
              <h3 className="text-xl font-bold text-white">Jacqueline Cochran Regional</h3>
              <p className="text-xs text-slate-400">Thermal, CA • Coachella Valley Hub</p>
            </div>
          </div>
          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            Infrastructure capacity scale-up targeting high traffic density peaks during major regional events. Focuses on reliever airfield safety.
          </p>
          <ul className="space-y-3 mb-8 text-xs text-slate-300">
            <li className="flex items-center space-x-2">
              <CheckCircle2 size={14} className="text-blue-400" />
              <span>Reliever Airfield Traffic Density Management</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle2 size={14} className="text-blue-400" />
              <span>Expansive Field-of-View Cab Structural Layout</span>
            </li>
          </ul>
          <Link to="/trm" className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
            <span>Access TRM Control Module</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Contract & Partnerships Profile */}
      <section className="glass-panel rounded-2xl p-8 max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl font-bold text-white border-b border-slate-900 pb-4">Architectural Spec & Partnerships</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Building2 size={18} />
              <span className="font-semibold text-sm">Pond & Company</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Prime contractor leading architecture, engineering design development, and tower commissioning.
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-indigo-400">
              <Compass size={18} />
              <span className="font-semibold text-sm">KSA (Pape-Dawson)</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strategic partner spearheading comprehensive site engineering, utilities planning, and runway boundary layout.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-emerald-400">
              <ShieldCheck size={18} />
              <span className="font-semibold text-sm">FAA Contract Tower Program</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Standardized regulatory design rules verifying structural compliance and visual range clearance metrics.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
