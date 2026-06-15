import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Sparkles, Clock, CloudSun, ShieldAlert, ChevronRight, Volume2, Play, Users, Briefcase } from 'lucide-react'

export default function Index() {
  const navigate = useNavigate()
  const [currentTime, setCurrentTime] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [activeLoginTab, setActiveLoginTab] = useState('client') // client | internal
  const [loginRole, setLoginRole] = useState('executive') // executive | pm | sector | lead
  const [accessCode, setAccessCode] = useState('')
  const [hoveredVideo, setHoveredVideo] = useState(false)

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
      setCurrentDate(now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }))
    }
    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (activeLoginTab === 'client') {
      // Navigate to client portal progress tracker
      navigate('/client')
    } else {
      // Save role to localStorage to simulate RBAC dashboard
      localStorage.setItem('pondco_user_role', loginRole)
      navigate('/hub')
    }
  }

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden animated-clouds">
      {/* Date, Time, and Weather Overlay - Top Right */}
      <div className="absolute top-0 right-0 z-30 flex items-center space-x-6 bg-slate-950/80 border border-slate-900 px-5 py-2.5 rounded-bl-2xl backdrop-blur-md font-header text-sm tracking-wider">
        <div className="flex items-center space-x-2 text-cyan-400">
          <Clock size={16} />
          <span>{currentTime || '12:00:00 PM'}</span>
        </div>
        <div className="hidden sm:flex items-center space-x-2 text-slate-400">
          <span>{currentDate || 'Mon, Jun 15, 2026'}</span>
        </div>
        <div className="flex items-center space-x-2 text-amber-400 border-l border-slate-800 pl-4">
          <CloudSun size={16} />
          <span>102°F • Coachella Valley</span>
        </div>
      </div>

      {/* Main Grid: Shifted to the Left */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-10 pb-16">
        {/* Left Side Content (Columns 1-7) */}
        <div className="lg:col-span-7 space-y-8 text-left z-10">
          <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider font-header">
            <Sparkles size={14} className="beacon-active text-amber-500" />
            <span>FAA Federal Contract Tower Partner</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-none text-white font-header">
            PONDCO<span className="text-cyan-400 font-light">.ONLINE</span>
          </h1>

          <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
            The unified enterprise command hub for Pond &amp; Company. Connecting A/E architectural modeling, construction oversight, and multi-sector standups with RAG-driven telemetry pipelines and role-based AI agents.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/projects"
              className="font-header flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg shadow-cyan-500/10 transition-all hover:-translate-y-0.5 text-sm uppercase tracking-wider"
            >
              <span>Aviation Command Center</span>
              <ChevronRight size={16} />
            </Link>
            <Link
              to="/services"
              className="font-header flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-lg border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-0.5 text-sm uppercase tracking-wider"
            >
              <span>Our Services</span>
            </Link>
          </div>

          {/* Quick Stats Panel */}
          <div className="grid grid-cols-3 gap-6 max-w-md pt-6 border-t border-slate-900">
            <div>
              <span className="block text-2xl font-bold font-header text-white">2</span>
              <span className="text-xs text-slate-500 font-header uppercase tracking-wider">ATCT Awards</span>
            </div>
            <div>
              <span className="block text-2xl font-bold font-header text-white">$14.8M</span>
              <span className="text-xs text-slate-500 font-header uppercase tracking-wider">Pipeline</span>
            </div>
            <div>
              <span className="block text-2xl font-bold font-header text-white">100%</span>
              <span className="text-xs text-slate-500 font-header uppercase tracking-wider">Gate Safety</span>
            </div>
          </div>
        </div>

        {/* Right Side: Animated Edge glow login card (Columns 8-12) */}
        <div className="lg:col-span-5 z-20">
          <div className="glow-border-container">
            <div className="glow-border-bg" />
            <div className="glow-border-content p-8">
              {/* Tab Selector */}
              <div className="flex border-b border-slate-900 mb-6 font-header">
                <button
                  type="button"
                  onClick={() => setActiveLoginTab('client')}
                  className={`flex-1 pb-3 text-sm font-semibold uppercase tracking-wider border-b-2 transition-all ${
                    activeLoginTab === 'client'
                      ? 'border-cyan-400 text-cyan-400'
                      : 'border-transparent text-slate-500 hover:text-slate-300'
                  }`}
                >
                  Client Portal
                </button>
                <button
                  type="button"
                  onClick={() => setActiveLoginTab('internal')}
                  className={`flex-1 pb-3 text-sm font-semibold uppercase tracking-wider border-b-2 transition-all ${
                    activeLoginTab === 'internal'
                      ? 'border-orange-400 text-orange-400'
                      : 'border-transparent text-slate-500 hover:text-slate-300'
                  }`}
                >
                  Internal SaaS
                </button>
              </div>

              {/* Video/Image hover thumbnail */}
              <div 
                onMouseEnter={() => setHoveredVideo(true)}
                onMouseLeave={() => setHoveredVideo(false)}
                className="relative h-36 bg-slate-900/60 rounded-lg mb-6 border border-slate-800 overflow-hidden group cursor-pointer flex items-center justify-center"
              >
                {hoveredVideo ? (
                  <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-4">
                    <span className="text-xs text-cyan-400 font-header tracking-widest animate-pulse uppercase mb-2">Streaming Airspace Live Feed</span>
                    <div className="flex gap-1.5 items-center justify-center">
                      <div className="w-1.5 h-6 bg-cyan-500 animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-1.5 h-6 bg-cyan-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-1.5 h-6 bg-cyan-500 animate-bounce" style={{ animationDelay: '0.3s' }} />
                    </div>
                  </div>
                ) : (
                  <>
                    <img 
                      src="/assets/f70-french-valley/blueprint.svg" 
                      alt="Blueprint Thumbnail" 
                      className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    <Play className="text-white opacity-80 group-hover:scale-115 transition-transform duration-300 z-10" size={32} />
                    <span className="absolute bottom-2 left-2 text-[10px] text-slate-400 font-header tracking-wider z-10 uppercase flex items-center gap-1.5">
                      <Volume2 size={10} /> Hover to stream video
                    </span>
                  </>
                )}
              </div>

              {/* Login Forms */}
              <form onSubmit={handleLogin} className="space-y-5">
                {activeLoginTab === 'client' ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 font-header uppercase tracking-wider mb-2">Project Access Key</label>
                      <input
                        type="password"
                        placeholder="ENTER ACCESS KEY"
                        value={accessCode}
                        onChange={(e) => setAccessCode(e.target.value)}
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm font-mono text-cyan-400 placeholder-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20"
                      />
                    </div>
                    <div className="text-[10px] text-slate-500">
                      * Key is provided in the Professional Service Agreement project roster.
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 font-header uppercase tracking-wider mb-2">Select Team Role</label>
                      <select
                        value={loginRole}
                        onChange={(e) => setLoginRole(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm font-header text-white focus:outline-none focus:border-orange-500"
                      >
                        <option value="executive">Executive Sponsor (Grady Smith, Jr.)</option>
                        <option value="pm">Project Manager (A/E Director)</option>
                        <option value="sector">Sector Manager (Aviation Operations)</option>
                        <option value="lead">Functional Lead (Site Supervisor)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 font-header uppercase tracking-wider mb-2">Corporate SSO Email</label>
                      <input
                        type="email"
                        placeholder="employee@pondco.com"
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm font-header text-white placeholder-slate-700 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className={`w-full font-header py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 ${
                    activeLoginTab === 'client'
                      ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/10'
                      : 'bg-orange-500 hover:bg-orange-400 text-slate-950 shadow-lg shadow-orange-500/10'
                  }`}
                >
                  {activeLoginTab === 'client' ? (
                    <>
                      <Users size={16} />
                      <span>Enter Client Portal</span>
                    </>
                  ) : (
                    <>
                      <Briefcase size={16} />
                      <span> SS0 Authenticate</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling News / CTA Ticker at the bottom */}
      <div className="w-full bg-slate-950 border-t border-slate-900 py-3 relative z-30 font-header">
        <div className="ticker-wrap flex items-center">
          <div className="bg-red-950 text-red-400 px-3 py-1 rounded border border-red-900/50 text-[10px] font-bold uppercase tracking-wider ml-4 z-10">
            POLICY REQUIREMENT
          </div>
          <div className="ticker-content text-slate-400 text-xs tracking-widest uppercase flex space-x-24 pl-8">
            <span className="flex items-center gap-2">
              <ShieldAlert size={14} className="text-orange-400 animate-pulse" />
              All functional leads must sign off daily configuration workbooks by 5:00 PM EOD.
            </span>
            <span className="flex items-center gap-2">
              <ShieldAlert size={14} className="text-red-400" />
              Mandatory Safety Meeting attendance log must be signed to unlock workbook updates.
            </span>
            <span className="flex items-center gap-2">
              <ShieldAlert size={14} className="text-cyan-400 animate-spin" />
              RAG Knowledge system successfully indexed California ATCT Contract files.
            </span>
            <span className="flex items-center gap-2">
              <ShieldAlert size={14} className="text-orange-400 animate-pulse" />
              All functional leads must sign off daily configuration workbooks by 5:00 PM EOD.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
