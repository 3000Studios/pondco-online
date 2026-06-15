import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, AlertTriangle, ShieldCheck, Mail, Calendar, Compass, ArrowRight } from 'lucide-react'

export default function ClientProgress() {
  const milestones = [
    { name: 'Schematic Design Delivery', status: 'Approved', date: 'May 10, 2026', type: 'Design' },
    { name: 'FAA Siting Analysis', status: 'Approved', date: 'June 02, 2026', type: 'Regulatory' },
    { name: 'Design Development Package', status: 'In Review', date: 'Est. Aug 15, 2026', type: 'Design' },
    { name: 'Construction Bid Support', status: 'Scheduled', date: 'Est. Oct 12, 2026', type: 'Oversight' },
    { name: 'Commissioning Phase', status: 'Pending', date: 'Est. Feb 22, 2027', type: 'FAA Program' }
  ]

  const leadership = [
    { name: 'Grady Smith, Jr.', role: 'Senior Vice President of Infrastructure', email: 'smithg@pondco.com', company: 'Pond & Company' },
    { name: 'KSA Engineers', role: 'Site Design & Engineering Lead', email: 'aviation@ksaeng.com', company: 'Pape-Dawson Company' },
    { name: 'FAA Program Manager', role: 'Federal Contract Tower Oversight', email: 'atct.program@faa.gov', company: 'Federal Aviation Administration' }
  ]

  return (
    <div className="space-y-12 max-w-5xl mx-auto py-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-900 pb-6 gap-4">
        <div>
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest block font-header">Secure Client Portal</span>
          <h1 className="text-3xl font-black text-white font-header uppercase tracking-wider">Project Delivery Progress</h1>
          <p className="text-xs text-slate-400 mt-1">Real-time status updates and milestone metrics for California ATCT Contracts.</p>
        </div>

        <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>SSO Verified Session</span>
        </div>
      </div>

      {/* Overview stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="glass-panel rounded-2xl p-6">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-header mb-1">Contract Status</span>
          <span className="text-xl font-bold font-header text-white uppercase flex items-center gap-1.5">
            <ShieldCheck size={18} className="text-emerald-400" /> Active Delivery
          </span>
        </div>
        <div className="glass-panel rounded-2xl p-6">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-header mb-1">Current Phase</span>
          <span className="text-xl font-bold font-header text-white uppercase">Design Development</span>
        </div>
        <div className="glass-panel rounded-2xl p-6">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-header mb-1">Overall Completion</span>
          <span className="text-xl font-bold font-header text-cyan-400">42%</span>
        </div>
      </div>

      {/* Progress timeline grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Milestones timeline (Col 1-8) */}
        <div className="md:col-span-8 glass-panel rounded-2xl p-8 space-y-6">
          <h3 className="text-lg font-bold text-white font-header uppercase tracking-wider border-b border-slate-900 pb-3">Delivery Sprints &amp; Milestones</h3>
          
          <div className="space-y-6 relative border-l border-slate-900 pl-6 ml-3">
            {milestones.map((item, index) => {
              const isApproved = item.status === 'Approved'
              const isInReview = item.status === 'In Review'
              return (
                <div key={index} className="relative">
                  {/* Circle indicator */}
                  <span className={`absolute -left-[31px] top-1 w-4.5 h-4.5 rounded-full border-4 border-slate-950 flex items-center justify-center ${
                    isApproved ? 'bg-emerald-500' : isInReview ? 'bg-amber-500 animate-pulse' : 'bg-slate-800'
                  }`} />
                  
                  <div className="flex justify-between items-start text-xs">
                    <div className="space-y-1">
                      <span className="font-bold font-header text-sm text-white block uppercase tracking-wide">{item.name}</span>
                      <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-900">{item.type}</span>
                    </div>
                    <div className="text-right space-y-1 font-mono">
                      <span className={`px-2 py-0.5 rounded font-bold uppercase ${
                        isApproved ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-900/30' : 
                        isInReview ? 'bg-amber-950/50 text-amber-400 border border-amber-900/30' : 
                        'bg-slate-900 text-slate-500'
                      }`}>
                        {item.status}
                      </span>
                      <span className="block text-[10px] text-slate-500 mt-1">{item.date}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Leadership & contacts (Col 9-12) */}
        <div className="md:col-span-4 space-y-6">
          <div className="glass-panel rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-white font-header uppercase tracking-wider border-b border-slate-900 pb-3">Project Leadership</h3>
            
            <div className="space-y-4">
              {leadership.map((person, index) => (
                <div key={index} className="space-y-1">
                  <span className="font-bold font-header text-white block uppercase tracking-wide">{person.name}</span>
                  <span className="text-[10px] font-header text-cyan-400 block font-semibold">{person.role}</span>
                  <span className="text-[10px] font-header text-slate-500 block uppercase tracking-wider">{person.company}</span>
                  <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1 mt-1">
                    <Mail size={10} /> {person.email}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Action items */}
          <div className="glass-panel rounded-2xl p-6 space-y-3 font-header text-xs">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Pending Client Action Items</h3>
            <div className="p-3 bg-amber-950/30 border border-amber-900/40 rounded-lg text-amber-400 flex items-start gap-2">
              <AlertTriangle size={16} className="shrink-0 mt-0.5" />
              <div>
                <span className="font-bold uppercase block text-[10px] tracking-wider">Pending Signature</span>
                <p className="text-[10px] leading-relaxed mt-0.5">Siting survey validation requires executive representative sign-off by June 20, 2026.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
