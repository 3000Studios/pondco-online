import React, { useState, useEffect } from 'react'
import { Plane, Compass } from 'lucide-react'

export default function AirspaceMap({ flights, airportCode, title }) {
  const [selectedFlight, setSelectedFlight] = useState(null)
  const [sweepAngle, setSweepAngle] = useState(0)

  // Radar sweep animation angle simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setSweepAngle((prev) => (prev + 3) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="glass-panel rounded-xl p-6 flex flex-col md:flex-row gap-6">
      {/* Radar Canvas Panel */}
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-950/80 rounded-lg border border-slate-900 p-6 min-h-[350px] relative overflow-hidden">
        <div className="absolute top-4 left-4 flex items-center space-x-2 z-10">
          <Compass className="text-cyan-400 animate-spin" style={{ animationDuration: '20s' }} size={18} />
          <span className="text-xs font-mono text-cyan-400 tracking-wider">RADAR ACTIVE // F70_TRM_COMMS</span>
        </div>

        {/* Radar Ring Visuals */}
        <div className="relative w-72 h-72 rounded-full border border-slate-800 flex items-center justify-center">
          <div className="absolute w-56 h-56 rounded-full border border-slate-800/60" />
          <div className="absolute w-40 h-40 rounded-full border border-slate-800/40" />
          <div className="absolute w-24 h-24 rounded-full border border-slate-800/20" />
          
          {/* Axis lines */}
          <div className="absolute w-full h-[1px] bg-slate-800/50" />
          <div className="absolute h-full w-[1px] bg-slate-800/50" />
          
          {/* Center Airport Dot */}
          <div className="absolute w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#00F2FE] flex items-center justify-center">
            <span className="absolute -top-6 text-[10px] font-bold tracking-widest text-cyan-400">{airportCode}</span>
          </div>

          {/* Radar Sweep Line */}
          <div 
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              transform: `rotate(${sweepAngle}deg)`,
              background: 'conic-gradient(from 0deg at 50% 50%, rgba(0, 242, 254, 0.15) 0deg, rgba(0, 242, 254, 0) 60deg)'
            }}
          />

          {/* Flight Targets */}
          {flights.map((flight) => {
            const isSelected = selectedFlight?.id === flight.id
            return (
              <button
                key={flight.id}
                onClick={() => setSelectedFlight(flight)}
                className={`absolute w-6 h-6 flex items-center justify-center transition-all duration-300 hover:scale-125 z-20 ${
                  isSelected ? 'text-amber-400' : 'text-cyan-400'
                }`}
                style={{
                  left: `${flight.coordinates.x}%`,
                  top: `${flight.coordinates.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className={`relative flex items-center justify-center`}>
                  {/* Active target pulse ring */}
                  <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    isSelected ? 'bg-amber-400/20 animate-ping' : 'bg-cyan-400/20 animate-ping'
                  }`} />
                  <Plane 
                    size={16} 
                    style={{ transform: `rotate(${flight.heading - 45}deg)` }} 
                    className="drop-shadow-[0_0_8px_currentColor]"
                  />
                  {/* Call sign text */}
                  <span className="absolute left-6 text-[9px] font-mono tracking-tight text-slate-400 whitespace-nowrap bg-slate-950/80 px-1 rounded border border-slate-800">
                    {flight.id}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Flight Detail Sidebar */}
      <div className="w-full md:w-80 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-900 pt-6 md:pt-0 md:pl-6">
        <div>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Target Telemetry</h3>
          {selectedFlight ? (
            <div className="space-y-4">
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Call Sign / ID</span>
                <span className="text-xl font-bold font-mono text-white flex items-center gap-2">
                  <Plane size={18} className="text-cyan-400" />
                  {selectedFlight.id}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Aircraft</span>
                  <span className="text-sm font-medium text-slate-200">{selectedFlight.aircraft}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Mission Type</span>
                  <span className="text-sm font-medium text-slate-200">{selectedFlight.type}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Altitude</span>
                  <span className="text-sm font-bold font-mono text-cyan-400">{selectedFlight.altitude.toLocaleString()} ft</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Ground Speed</span>
                  <span className="text-sm font-bold font-mono text-cyan-400">{selectedFlight.speed} kts</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Route</span>
                  <span className="text-sm font-medium text-slate-200">{selectedFlight.origin} ➔ {selectedFlight.destination}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Status</span>
                  <span className="text-xs inline-block font-semibold bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded border border-cyan-800/40">
                    {selectedFlight.status}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-slate-600 border border-dashed border-slate-900 rounded-lg">
              <Plane size={24} className="mb-2 opacity-30" />
              <p className="text-xs text-center px-4">Select a flying target on the radar scope to view operational details.</p>
            </div>
          )}
        </div>

        <div className="mt-6 border-t border-slate-900 pt-4 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Total Targets: {flights.length}</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Feed
          </span>
        </div>
      </div>
    </div>
  )
}
