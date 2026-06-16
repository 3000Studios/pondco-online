import React from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, ShieldCheck, Mail, Calendar, Compass, ArrowRight } from 'lucide-react'

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
    <div className="space-y-12 max-w-5xl mx-auto py-6 animate-slide-in">
      {/* Dynamic Hero Video Underlayment (Vertical data feed/timeline glow) */}
      <div className="relative rounded-3xl overflow-hidden glass-panel p-8 min-h-[200px] flex items-center shadow-xl border border-slate-800">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-[0.25]"
        >
          <source src="https://assets.mixkit.co/videos/42861/42861-360.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-0" />
        
        <div className="z-10 space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Secure Client Portal</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wider">Project Delivery Progress</h1>
          <p className="text-xs text-slate-400 font-serif max-w-md">Real-time status updates and milestone metrics for California ATCT Contracts.</p>
        </div>
      </div>

      {/* Overview stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="glass-panel rounded-2xl p-6 shadow-lg">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-header mb-1">Contract Status</span>
          <span className="text-xl font-bold font-header text-white uppercase flex items-center gap-1.5">
            <ShieldCheck size={18} className="text-emerald-400" /> Active Delivery
          </span>
        </div>
        <div className="glass-panel rounded-2xl p-6 shadow-lg">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-header mb-1">Current Phase</span>
          <span className="text-xl font-bold font-header text-white uppercase">Design Development</span>
        </div>
        <div className="glass-panel rounded-2xl p-6 shadow-lg">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-header mb-1">Overall Completion</span>
          <span className="text-xl font-bold font-header text-cyan-400 font-mono">42%</span>
        </div>
      </div>

      {/* Progress timeline grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Milestones timeline (Col 1-8) */}
        <div className="md:col-span-8 glass-panel rounded-2xl p-8 space-y-6 shadow-xl">
          <h3 className="text-lg font-bold text-white font-header uppercase tracking-wider border-b border-slate-900 pb-3">Delivery Sprints &amp; Milestones</h3>
          
          <div className="space-y-6 relative border-l border-slate-900 pl-6 ml-3">
            {milestones.map((item, index) => {
              const isApproved = item.status === 'Approved'
              const isInReview = item.status === 'In Review'
              return (
                <div key={index} className="relative">
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
          <div className="glass-panel rounded-2xl p-6 space-y-4 shadow-xl">
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

          {/* Unique Page Picture/Illustration */}
          <div className="glass-panel rounded-2xl p-6 space-y-4 border border-slate-800 shadow-xl text-center">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Milestone Verification</h3>
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-900 flex justify-center">
              <svg className="w-full h-24 text-emerald-400/80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="50" cy="50" r="30" stroke="emerald" />
                <path d="M38 50 L47 59 L65 41" stroke="emerald" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="50" cy="50" r="40" stroke="slate" strokeDasharray="2,2" />
              </svg>
            </div>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Approved Verification Code</p>
          </div>
        </div>
      </div>
    </div>
  )
}
