import React, { useState } from 'react'
import AirspaceMap from '../components/MapView/AirspaceMap'
import f70Flights from '../data/f70-mock-flights.json'
import trmFlights from '../data/trm-mock-flights.json'
import { Plane, Compass, Layers, Wind, Eye } from 'lucide-react'

export default function AviationProjects() {
  const [activeAirport, setActiveAirport] = useState('F70')

  const airportDetails = {
    F70: {
      name: 'French Valley Airport',
      code: 'F70',
      location: 'Murrieta, CA',
      elevation: '1,350 ft MSL',
      type: 'General Aviation Reliever',
      wind: '240 @ 12kts',
      flights: f70Flights,
      blueprint: '/assets/f70-french-valley/blueprint.svg',
      desc: 'Architectural and engineering design for general aviation traffic. Emphasizes visual clearance, training patterns, and construction safety plans in partnership with KSA Engineers (site design lead).'
    },
    TRM: {
      name: 'Jacqueline Cochran Regional',
      code: 'TRM',
      location: 'Thermal, CA',
      elevation: '-115 ft MSL (Below Sea Level)',
      type: 'Regional Jet Reliever',
      wind: '110 @ 08kts',
      flights: trmFlights,
      blueprint: '/assets/trm-jacqueline-cochran/blueprint.svg',
      desc: 'High-density reliever hub operations serving the Coachella Valley. Features an expanded 360-degree cab field-of-view layout, structural engineering for extreme temperatures, and FAA siting reviews.'
    }
  }

  const current = airportDetails[activeAirport]

  return (
    <div className="space-y-10 max-w-6xl mx-auto py-6">
      {/* Top Banner & Switcher */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-900 pb-6 gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-white font-header uppercase tracking-wider flex items-center gap-3">
            <Plane size={28} className="text-cyan-400" />
            Aviation Command Center
          </h1>
          <p className="text-xs text-slate-400 mt-1">Real-time FAA Federal Contract Tower program design and telemetry trackers.</p>
        </div>

        {/* Option Selectors */}
        <div className="flex space-x-2 bg-slate-950 p-1 rounded-xl border border-slate-900 font-header">
          <button
            onClick={() => setActiveAirport('F70')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              activeAirport === 'F70'
                ? 'bg-cyan-950 text-cyan-400 border border-cyan-800/40'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            French Valley (F70)
          </button>
          <button
            onClick={() => setActiveAirport('TRM')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              activeAirport === 'TRM'
                ? 'bg-blue-950 text-blue-400 border border-blue-800/40'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            Jacqueline Cochran (TRM)
          </button>
        </div>
      </div>

      {/* Main Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Description & Specifications (Col 1-4) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel rounded-2xl p-6 space-y-4">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-header">Selected Facility</span>
            <h2 className="text-2xl font-black text-white font-header uppercase tracking-wider">{current.name}</h2>
            <div className="flex items-center gap-1.5 font-header text-xs text-slate-400 font-bold uppercase">
              <Compass size={14} className="text-cyan-400" />
              <span>{current.location} • {current.type}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-serif">{current.desc}</p>
          </div>

          <div className="glass-panel rounded-2xl p-6 space-y-3 font-header text-xs">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Live Weather &amp; Runway Telemetry</h3>
            <div className="flex justify-between py-1.5 border-b border-slate-900/50">
              <span className="text-slate-500">Surface Wind</span>
              <span className="font-bold font-mono text-white flex items-center gap-1.5">
                <Wind size={12} className="text-amber-500" />
                {current.wind}
              </span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-900/50">
              <span className="text-slate-500">Elevation</span>
              <span className="font-bold font-mono text-white">{current.elevation}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-500">Airspace Status</span>
              <span className="font-bold text-emerald-400 uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active / CLEAR
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: AirspaceMap Component (Col 5-12) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="space-y-3">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-header">Scope Telemetry Monitor</span>
            <AirspaceMap flights={current.flights} airportCode={current.code} title={current.name} />
          </div>
        </div>
      </div>

      {/* Schematic Blueprint Gallery */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white font-header uppercase tracking-wider flex items-center gap-2">
          <Layers size={18} className="text-cyan-400" />
          Architectural Elevation Schematics
        </h3>
        <div className="glass-panel rounded-2xl p-4 overflow-hidden h-[450px] bg-slate-950 flex items-center justify-center border border-slate-900 relative">
          <div className="absolute top-4 right-4 z-10 flex items-center space-x-2 bg-slate-950/80 border border-slate-900 px-3 py-1 rounded-full text-[10px] font-mono text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 beacon-active" />
            <span>FAA Siting Schematic</span>
          </div>
          <object 
            data={current.blueprint} 
            type="image/svg+xml" 
            className="w-full h-full opacity-90 transition-opacity duration-300"
            aria-label={`${current.code} Schematic Blueprint`}
          >
            <img src={current.blueprint} alt={`${current.code} Blueprint`} className="w-full h-full object-contain" />
          </object>
        </div>
      </div>
    </div>
  )
}
