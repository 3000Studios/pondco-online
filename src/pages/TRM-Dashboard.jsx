import React, { useState } from 'react'
import KpiCard from '../components/UI/KpiCard'
import AirspaceMap from '../components/MapView/AirspaceMap'
import mockFlights from '../data/trm-mock-flights.json'
import { Plane, Eye, Wind, Activity, CheckSquare, Layers } from 'lucide-react'

export default function TRMDashboard() {
  const [flights, setFlights] = useState(mockFlights)
  
  // Custom states/details for Jacqueline Cochran Regional (TRM)
  const stats = [
    { title: 'Inbound Jet Traffic', value: '3', unit: 'active', description: 'NetJets & Corporate arrivals', icon: Plane, trend: 'up', trendValue: '1' },
    { title: 'Airspace Class', value: 'CLASS E/D', unit: '', description: 'Tower control transitions', icon: Eye, trend: 'neutral', trendValue: 'Active' },
    { title: 'Surface Wind', value: '110 @ 08', unit: 'kts', description: 'Runway 17 operations in effect', icon: Wind, trend: 'down', trendValue: '2kts' },
    { title: 'Traffic Density', value: 'Moderate', unit: '', description: 'Relieving Palm Springs Int\'l', icon: Activity, trend: 'up', trendValue: 'High' }
  ]

  const milestones = [
    { name: 'Schematic Design Review', status: 'Completed', date: 'June 2026' },
    { name: 'Design Development Phase', status: 'In Progress', date: 'Est. Sep 2026' },
    { name: 'FAA Siting Analysis Approval', status: 'In Progress', date: 'Est. Dec 2026' },
    { name: 'Construction Oversight Bid', status: 'Pending', date: 'Est. Apr 2027' }
  ]

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-900 pb-6 gap-4">
        <div>
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">ATCT Location Profile</span>
          <h1 className="text-3xl font-extrabold text-white flex items-center gap-2">
            Jacqueline Cochran Regional Airport <span className="text-blue-400 font-light font-mono text-xl">(TRM)</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">Thermal, CA • Coachella Valley reliever hub</p>
        </div>
        
        <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
          <span>Elevation: -115 ft MSL (Below Sea Level)</span>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <KpiCard key={index} {...stat} colorClass="text-blue-400" />
        ))}
      </div>

      {/* Radar Airspace Map Component */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Layers size={18} className="text-blue-400" />
          Airspace Traffic & Reliever Stream Radar
        </h2>
        <AirspaceMap flights={flights} airportCode="TRM" title="Jacqueline Cochran Airspace" />
      </div>

      {/* Commissioning Phases & Bid Specs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Milestones Panel */}
        <div className="glass-panel rounded-xl p-6">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <CheckSquare size={16} className="text-blue-400" />
            Project Design Milestones
          </h3>
          <div className="space-y-4">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex justify-between items-center text-xs py-2 border-b border-slate-900/50 last:border-b-0">
                <div>
                  <span className="font-semibold text-white block">{milestone.name}</span>
                  <span className="text-slate-500">{milestone.date}</span>
                </div>
                <span className={`px-2 py-0.5 rounded font-mono ${
                  milestone.status === 'Completed' ? 'bg-emerald-950/45 text-emerald-400 border border-emerald-900/30' : 
                  milestone.status === 'In Progress' ? 'bg-amber-950/45 text-amber-400 border border-amber-900/30' : 
                  'bg-slate-900 text-slate-500 border border-slate-800'
                }`}>
                  {milestone.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Structural Specifications */}
        <div className="glass-panel rounded-xl p-6">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Layers size={16} className="text-blue-400" />
            Tower Structural Specs
          </h3>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-1.5 border-b border-slate-900/50">
              <span className="text-slate-400">Target Cab Height</span>
              <span className="font-semibold text-white font-mono">82 ft AGL</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-900/50">
              <span className="text-slate-400">Cab Console Positions</span>
              <span className="font-semibold text-white font-mono">3 Active Positions</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-900/50">
              <span className="text-slate-400">Regulatory Oversight</span>
              <span className="font-semibold text-white">FAA Order 6480.7E Compliant</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-400">Site Design Lead</span>
              <span className="font-semibold text-white">KSA Engineers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
