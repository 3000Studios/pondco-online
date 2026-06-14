import React, { useState } from 'react'
import KpiCard from '../components/UI/KpiCard'
import AirspaceMap from '../components/MapView/AirspaceMap'
import mockFlights from '../data/f70-mock-flights.json'
import { Plane, Eye, Wind, Activity, CheckSquare, Layers } from 'lucide-react'

export default function F70Dashboard() {
  const [flights, setFlights] = useState(mockFlights)
  
  // Custom states/details for French Valley (F70)
  const stats = [
    { title: 'Pattern Activity', value: '1', unit: 'active', description: 'N172SP training pattern', icon: Plane, trend: 'down', trendValue: '1' },
    { title: 'Airspace Status', value: 'CLASS G', unit: '', description: 'Class G airspace active', icon: Eye, trend: 'neutral', trendValue: 'Stable' },
    { title: 'Surface Wind', value: '240 @ 12', unit: 'kts', description: 'Gusting to 18kts', icon: Wind, trend: 'up', trendValue: '3kts' },
    { title: 'Safety Rating', value: '99.4', unit: '%', description: 'Runway safety clearance index', icon: Activity, trend: 'up', trendValue: '0.2%' }
  ]

  const milestones = [
    { name: 'Schematic Design Review', status: 'Completed', date: 'May 2026' },
    { name: 'Design Development Phase', status: 'In Progress', date: 'Est. Aug 2026' },
    { name: 'FAA Safe-Effectiveness Study', status: 'Scheduled', date: 'Est. Nov 2026' },
    { name: 'Construction Bid Support', status: 'Pending', date: 'Est. Feb 2027' }
  ]

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-900 pb-6 gap-4">
        <div>
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">ATCT Location Profile</span>
          <h1 className="text-3xl font-extrabold text-white flex items-center gap-2">
            French Valley Airport <span className="text-cyan-400 font-light font-mono text-xl">(F70)</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">Murrieta, CA • Public-use general aviation relief airfield</p>
        </div>
        
        <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>Elevation: 1,350 ft MSL</span>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <KpiCard key={index} {...stat} colorClass="text-cyan-400" />
        ))}
      </div>

      {/* Radar Airspace Map Component */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Layers size={18} className="text-cyan-400" />
          Live Radar Simulator & Target Tracks
        </h2>
        <AirspaceMap flights={flights} airportCode="F70" title="French Valley Airspace" />
      </div>

      {/* Commissioning Phases & Bid Specs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Milestones Panel */}
        <div className="glass-panel rounded-xl p-6">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <CheckSquare size={16} className="text-cyan-400" />
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
            <Layers size={16} className="text-cyan-400" />
            Tower Structural Specs
          </h3>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-1.5 border-b border-slate-900/50">
              <span className="text-slate-400">Target Cab Height</span>
              <span className="font-semibold text-white font-mono">65 ft AGL</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-900/50">
              <span className="text-slate-400">Cab Console Positions</span>
              <span className="font-semibold text-white font-mono">2 Active Positions</span>
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
