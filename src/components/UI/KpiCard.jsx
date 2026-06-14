import React from 'react'

export default function KpiCard({ title, value, unit = '', description, icon: Icon, trend, trendValue, colorClass = 'text-cyan-400' }) {
  return (
    <div className="glass-panel rounded-xl p-6 relative overflow-hidden transition-all duration-300 hover:border-slate-700/80 hover:shadow-lg hover:shadow-black/20 group">
      {/* Background glow hover effect */}
      <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-slate-900/50 rounded-full blur-2xl group-hover:bg-slate-800/40 transition-all duration-300" />
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">{title}</span>
          <div className="flex items-baseline mt-1 space-x-1">
            <span className="text-3xl font-bold font-sans tracking-tight text-white">{value}</span>
            {unit && <span className="text-sm font-medium text-slate-400">{unit}</span>}
          </div>
        </div>
        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-slate-700 transition-all duration-300 text-slate-400 group-hover:text-white">
          <Icon size={20} className={colorClass} />
        </div>
      </div>
      
      <div className="flex justify-between items-center text-xs mt-2">
        <span className="text-slate-400">{description}</span>
        {trend && (
          <span className={`px-2 py-0.5 rounded font-medium ${
            trend === 'up' ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-900/30' : 
            trend === 'down' ? 'bg-rose-950/50 text-rose-400 border border-rose-900/30' : 
            'bg-slate-900 text-slate-400'
          }`}>
            {trend === 'up' ? '+' : ''}{trendValue}
          </span>
        )}
      </div>
    </div>
  )
}
