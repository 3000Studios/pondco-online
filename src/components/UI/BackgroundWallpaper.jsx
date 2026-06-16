import React from 'react'

export default function BackgroundWallpaper() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#02040a] pointer-events-none">
      {/* Night Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#091026] to-[#02040a]" />

      {/* Twinkling Stars */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[10%] left-[20%] w-0.5 h-0.5 bg-white rounded-full animate-ping" />
        <div className="absolute top-[25%] left-[75%] w-1 h-1 bg-white rounded-full opacity-60" style={{ animationDuration: '3s', animationIterationCount: 'infinite' }} />
        <div className="absolute top-[40%] left-[45%] w-0.5 h-0.5 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute top-[15%] left-[85%] w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[70%] left-[15%] w-1 h-1 bg-blue-400 rounded-full opacity-40" />
      </div>

      {/* Moving Clouds on Loop */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {/* Cloud Layer 1 */}
        <div 
          className="absolute top-[15%] w-[200%] h-40 bg-repeat-x"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="200" viewBox="0 0 1000 200"><path d="M100 120 Q150 90 200 110 Q250 80 320 110 Q380 90 420 120 L500 120 Q550 90 600 110 Q650 80 720 110 Q780 90 820 120 Z" fill="white" opacity="0.15"/></svg>')`,
            animation: 'move-clouds 80s linear infinite'
          }}
        />
        {/* Cloud Layer 2 */}
        <div 
          className="absolute top-[5%] w-[200%] h-32 bg-repeat-x"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="200" viewBox="0 0 1000 200"><path d="M50 150 Q100 120 150 140 Q200 110 270 140 Q330 120 370 150 L450 150 Q500 120 550 140 Q600 110 670 140 Q730 120 770 150 Z" fill="cyan" opacity="0.08"/></svg>')`,
            animation: 'move-clouds 120s linear infinite',
            animationDelay: '-20s'
          }}
        />
      </div>

      {/* Siting Landscape (Mountain Silhouette & Runway) */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none">
        {/* Horizon Mountains */}
        <svg className="absolute bottom-0 w-full h-full text-[#080d1a] opacity-60" preserveAspectRatio="none" viewBox="0 0 1440 200">
          <path fill="currentColor" d="M0 200 L0 160 L120 130 L250 170 L480 110 L680 150 L890 90 L1150 160 L1300 120 L1440 160 L1440 200 Z" />
        </svg>

        {/* Foreground Ridge */}
        <svg className="absolute bottom-0 w-full h-1/2 text-[#03060f]" preserveAspectRatio="none" viewBox="0 0 1440 100">
          <path fill="currentColor" d="M0 100 L0 60 L320 80 L720 40 L1100 70 L1440 50 L1440 100 Z" />
        </svg>

        {/* Airport Runway & Taxiway Lights */}
        <div className="absolute bottom-6 left-1/4 right-1/4 h-2 bg-[#050914] rounded shadow-inner transform perspective-1000 rotateX-30 flex justify-between px-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-60" />
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-60" />
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        {/* Animated Planes (Taking Off) */}
        <div className="absolute bottom-12 left-0 right-0 h-24 overflow-hidden pointer-events-none">
          <div className="absolute flex items-center space-x-1 animate-plane-takeoff" style={{ left: '-10%', bottom: '20px' }}>
            {/* Tiny Plane Icon / Light */}
            <span className="w-2 h-2 rounded-full bg-white shadow-lg animate-ping" />
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <svg className="w-4 h-4 text-cyan-400 transform -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
          </div>
        </div>

        {/* Airport Control Tower Silhouette */}
        <div className="absolute bottom-0 right-[15%] w-16 h-48 flex flex-col items-center justify-end pointer-events-none z-10">
          {/* Beacon Light */}
          <span className="w-3 h-3 rounded-full bg-red-600 beacon-active mb-[-2px] z-20" />
          {/* Cab (F70/TRM Style Glass Top) */}
          <div className="w-12 h-8 bg-gradient-to-b from-cyan-950/90 to-slate-900 border border-cyan-800/40 rounded-t-lg relative flex items-center justify-center shadow-lg shadow-cyan-500/10">
            <span className="w-1.5 h-4 bg-cyan-500/20 absolute left-2 rounded" />
            <span className="w-1.5 h-4 bg-cyan-500/20 absolute right-2 rounded" />
          </div>
          {/* Tower Shaft */}
          <div className="w-6 h-36 bg-gradient-to-b from-slate-900 to-[#02040a] border-x border-slate-800/60 relative">
            {/* Decorative Shaft Lights */}
            <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500 animate-pulse" />
            <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
