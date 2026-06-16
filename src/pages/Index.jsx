import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Sparkles, Clock, CloudSun, ShieldAlert, ChevronRight, Play, Eye, ShieldCheck, Lock, Activity, Bot, Send, User, Building, Landmark, Compass, Plane, Shield } from 'lucide-react'
import { app } from '../firebase'

export default function Index() {
  const navigate = useNavigate()
  const [currentTime, setCurrentTime] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [activeLoginTab, setActiveLoginTab] = useState('client') // client | internal
  const [loginRole, setLoginRole] = useState('executive')
  const [accessCode, setAccessCode] = useState('')
  const [email, setEmail] = useState('')
  const [loginError, setLoginError] = useState('')
  const [showGoogleModal, setShowGoogleModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  
  // Weather state (serving local visitor dynamically)
  const [weather, setWeather] = useState({ temp: '102°F', location: 'Coachella Valley, CA', status: 'Sunny' })

  // Geolocation trigger
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&current_weather=true`)
            const data = await res.json()
            if (data && data.current_weather) {
              const fahr = Math.round((data.current_weather.temperature * 9/5) + 32)
              setWeather({
                temp: `${fahr}°F`,
                location: 'Local Position',
                status: 'Clear Sky'
              })
            }
          } catch (e) {
            console.log("Could not resolve local weather from API, using default.")
          }
        },
        () => console.log("Geolocation blocked or unavailable. Using default weather.")
      )
    }
  }, [])

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
    setLoginError('')
    if (accessCode !== '1234') {
      setLoginError('INVALID ACCESS KEY. AUTHENTICATION FAILED.')
      return
    }
    if (activeLoginTab === 'client') {
      setShowLoginModal(false)
      navigate('/client')
    } else {
      let resolvedRole = loginRole
      if (email.toLowerCase() === 'mr.jwswain@gmail.com') {
        resolvedRole = 'owner'
      } else if (email.toLowerCase() === 'kyle.freedman@pondco.com') {
        resolvedRole = 'admin'
      }
      localStorage.setItem('pondco_user_role', resolvedRole)
      localStorage.setItem('pondco_user_email', email)
      setShowLoginModal(false)
      navigate('/hub')
    }
  }

  const selectGoogleAccount = (selectedEmail, selectedRole) => {
    localStorage.setItem('pondco_user_role', selectedRole)
    localStorage.setItem('pondco_user_email', selectedEmail)
    setShowGoogleModal(false)
    setShowLoginModal(false)
    navigate('/hub')
  }

  return (
    <div className="space-y-16 animate-slide-in relative">
      
      {/* Dynamic Local Weather & Time Header Bar */}
      <div className="flex justify-between items-center bg-slate-900/60 border border-slate-800/80 px-6 py-3.5 rounded-2xl backdrop-blur-md text-xs font-header shadow-lg">
        <div className="flex items-center space-x-2 text-slate-400">
          <Sparkles size={14} className="text-amber-500 animate-pulse" />
          <span>FAA Federal Infrastructure Partner</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1.5 text-blue-400 font-bold">
            <Clock size={14} />
            <span>{currentTime || '12:00:00 PM'}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-slate-300 border-l border-slate-800 pl-6">
            <CloudSun size={14} className="text-amber-400" />
            <span>{weather.temp} • {weather.location} ({weather.status})</span>
          </div>
        </div>
      </div>

      {/* Main Hero & Spotlight Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left: Delivering Excellence Hero */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left p-8 md:p-12 rounded-3xl glass-panel relative overflow-hidden shadow-2xl border border-slate-800/60">
          <div className="absolute inset-0 bg-[#061430]/10 opacity-30 pointer-events-none" />
          
          <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none">
            Delivering Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Aviation &amp; Government</span> Infrastructure
          </h1>
          
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl font-serif">
            Pondco Online: innovating design, engineering, and project management for critical public sector facilities.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/services" className="button-3d-cyan text-white font-bold px-8 py-3.5 btn-hexagon uppercase tracking-wider text-xs flex items-center gap-2">
              <span>View Our Services</span>
              <ChevronRight size={14} />
            </Link>
            <button 
              onClick={() => setShowLoginModal(true)}
              className="button-3d-orange text-white font-bold px-8 py-3.5 btn-hexagon uppercase tracking-wider text-xs flex items-center gap-2"
            >
              <span>Access Secure Portals</span>
              <Lock size={14} />
            </button>
          </div>
        </div>

        {/* Right: Aviation Project Spotlight Card */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-6 border border-slate-850 shadow-2xl flex flex-col justify-between space-y-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 bg-blue-950/80 text-blue-400 border border-blue-900/40 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3">
              <Sparkles size={10} />
              <span>Aviation Project Spotlight</span>
            </div>
            
            <h3 className="text-xl font-black text-white uppercase tracking-wide">
              ATL International Terminal Expansion
            </h3>
            
            {/* Terminal Image Placeholder */}
            <div className="w-full h-44 rounded-xl overflow-hidden my-3 bg-slate-950 border border-slate-900 relative">
              <div className="absolute inset-0 bg-[#0f172a] flex items-center justify-center opacity-40">
                <Plane size={48} className="text-blue-950/80 rotate-45" />
              </div>
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80" 
                alt="ATL Terminal" 
                className="w-full h-full object-cover opacity-75 hover:scale-105 transition-transform duration-700" 
              />
            </div>
            
            <p className="text-xs text-slate-400 font-serif leading-relaxed">
              Comprehensive design and structural engineering for a 35-gate expansion, optimizing passenger flow and security.
            </p>
          </div>

          <Link to="/projects" className="button-3d-cyan text-white text-center font-bold py-3.5 btn-hexagon text-xs uppercase tracking-wider block">
            Learn More
          </Link>
        </div>

      </div>

      {/* Project Delivery Progress Pipeline */}
      <section className="space-y-6">
        <div className="text-left border-l-4 border-blue-600 pl-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Real-time Milestones</span>
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">Project Delivery Progress Pipeline</h2>
        </div>

        <div className="glass-panel rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            
            {/* Siting Assessment */}
            <div className="relative p-4 rounded-xl bg-slate-950/40 border border-blue-900/30 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono block mb-1">● APPROVED</span>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Siting Assessment</h3>
                <p className="text-[11px] text-slate-400 font-serif leading-relaxed mt-1">
                  Airfield geometry, FAA safety margins, and elevation compliance checks.
                </p>
              </div>
              <span className="text-[10px] text-slate-500 font-mono mt-2">Completed May 10</span>
            </div>

            {/* Schematic Design */}
            <div className="relative p-4 rounded-xl bg-slate-950/40 border border-blue-900/30 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono block mb-1">● APPROVED</span>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Schematic Design</h3>
                <p className="text-[11px] text-slate-400 font-serif leading-relaxed mt-1">
                  Drafting foundational layouts and structural footprint drawings.
                </p>
              </div>
              <span className="text-[10px] text-slate-500 font-mono mt-2">Completed Jun 02</span>
            </div>

            {/* Design Development */}
            <div className="relative p-4 rounded-xl bg-slate-950/70 border border-blue-500/40 flex flex-col justify-between space-y-3 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-mono block mb-1 animate-pulse">● IN REVIEW</span>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Design Development</h3>
                <p className="text-[11px] text-slate-300 font-serif leading-relaxed mt-1">
                  Comprehensive BIM modeling, detailing and engineering calculations.
                </p>
              </div>
              <span className="text-[10px] text-blue-400 font-mono mt-2 font-bold">Est. Aug 15</span>
            </div>

            {/* Construction Support */}
            <div className="relative p-4 rounded-xl bg-slate-950/20 border border-slate-900 flex flex-col justify-between space-y-3 opacity-60">
              <div>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest font-mono block mb-1">SCHEDULED</span>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Construction Support</h3>
                <p className="text-[11px] text-slate-500 font-serif leading-relaxed mt-1">
                  On-site inspections, quality controls, and compliance monitoring.
                </p>
              </div>
              <span className="text-[10px] text-slate-600 font-mono mt-2">Est. Oct 12</span>
            </div>

            {/* Commissioning */}
            <div className="relative p-4 rounded-xl bg-slate-950/20 border border-slate-900 flex flex-col justify-between space-y-3 opacity-60">
              <div>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest font-mono block mb-1">PENDING</span>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Commissioning</h3>
                <p className="text-[11px] text-slate-500 font-serif leading-relaxed mt-1">
                  Final inspections, system handover, and FAA certification support.
                </p>
              </div>
              <span className="text-[10px] text-slate-600 font-mono mt-2">Est. Feb 22</span>
            </div>

          </div>
        </div>
      </section>

      {/* Core Services & Success Stories Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Our Core Services & Partners */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="glass-panel rounded-3xl p-8 border border-slate-800 space-y-6">
            <div className="text-left border-l-4 border-blue-600 pl-4 mb-4">
              <h2 className="text-2xl font-black text-white uppercase tracking-wider">Our Core Services</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-950/50 border border-blue-800/40 flex items-center justify-center text-blue-400">
                  <Plane size={20} />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wide">Aviation Architecture</h3>
                <p className="text-xs text-slate-400 font-serif leading-relaxed">
                  Aviation architecture, airfields or aviation architecture.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-950/50 border border-blue-800/40 flex items-center justify-center text-blue-400">
                  <Compass size={20} />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wide">Civil Engineering</h3>
                <p className="text-xs text-slate-400 font-serif leading-relaxed">
                  Comprehensive design, civil engineering, civil engineering.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-950/50 border border-blue-800/40 flex items-center justify-center text-blue-400">
                  <Building size={20} />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wide">Program Management</h3>
                <p className="text-xs text-slate-400 font-serif leading-relaxed">
                  Innovating governing, design-build, and program management.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-950/50 border border-blue-800/40 flex items-center justify-center text-blue-400">
                  <Shield size={20} />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wide">Security Systems</h3>
                <p className="text-xs text-slate-400 font-serif leading-relaxed">
                  Automating design, programmatic, and security systems.
                </p>
              </div>

            </div>
          </div>

          {/* Government Partners Grid */}
          <div className="glass-panel rounded-3xl p-6 border border-slate-800 space-y-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest font-header text-center">Government Partners</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center justify-items-center opacity-75">
              <div className="bg-slate-950/60 border border-slate-900 rounded-xl px-4 py-3 text-center w-full font-bold text-xs text-slate-300 font-header uppercase tracking-wider shadow">GSA</div>
              <div className="bg-slate-950/60 border border-slate-900 rounded-xl px-4 py-3 text-center w-full font-bold text-xs text-slate-300 font-header uppercase tracking-wider shadow">USACE</div>
              <div className="bg-slate-950/60 border border-slate-900 rounded-xl px-4 py-3 text-center w-full font-bold text-xs text-slate-300 font-header uppercase tracking-wider shadow">FAA</div>
              <div className="bg-slate-950/60 border border-slate-900 rounded-xl px-4 py-3 text-center w-full font-bold text-xs text-slate-300 font-header uppercase tracking-wider shadow">DOT</div>
            </div>
          </div>

        </div>

        {/* Right: Recent Success Stories */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-8 border border-slate-800 space-y-6">
          <div className="text-left border-l-4 border-blue-600 pl-4 mb-4">
            <h2 className="text-2xl font-black text-white uppercase tracking-wider">Success Stories</h2>
          </div>

          <div className="space-y-6">
            
            {/* Story 1 */}
            <div className="group space-y-3 border-b border-slate-900 pb-6 last:border-b-0 last:pb-0">
              <div className="w-full h-36 rounded-xl overflow-hidden bg-slate-950 border border-slate-900 relative">
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=500&q=80" 
                  alt="Newark Terminal B" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <h3 className="text-base font-bold text-white uppercase tracking-wide group-hover:text-blue-400 transition-colors">Newark Terminal B</h3>
              <p className="text-xs text-slate-400 font-serif leading-relaxed">
                Comprehensive design and structural engineering for a 35-gate expansion, optimizing passenger flow and security.
              </p>
            </div>

            {/* Story 2 */}
            <div className="group space-y-3">
              <div className="w-full h-36 rounded-xl overflow-hidden bg-slate-950 border border-slate-900 relative">
                <img 
                  src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=500&q=80" 
                  alt="DFW Runway Rehab" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <h3 className="text-base font-bold text-white uppercase tracking-wide group-hover:text-blue-400 transition-colors">DFW Runway Rehab</h3>
              <p className="text-xs text-slate-400 font-serif leading-relaxed">
                Comprehensive design and structural engineering for a 35-gate expansion, optimizing runways and airfield taxiways.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Auth Modals */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md">
          <div className="glass-panel rounded-3xl p-6 max-w-sm w-full border border-slate-800 space-y-4 shadow-2xl relative text-left">
            <div className="flex border-b border-slate-800 mb-2 font-header text-xs">
              <button
                onClick={() => { setActiveLoginTab('client'); setLoginError(''); setAccessCode(''); }}
                className={`flex-1 pb-2 font-bold uppercase tracking-wider border-b-2 transition-all ${
                  activeLoginTab === 'client' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-500'
                }`}
              >
                Client Portal
              </button>
              <button
                onClick={() => { setActiveLoginTab('internal'); setLoginError(''); setAccessCode(''); }}
                className={`flex-1 pb-2 font-bold uppercase tracking-wider border-b-2 transition-all ${
                  activeLoginTab === 'internal' ? 'border-orange-500 text-orange-400' : 'border-transparent text-slate-500'
                }`}
              >
                Internal SaaS
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {activeLoginTab === 'internal' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Select Role</label>
                    <select
                      value={loginRole}
                      onChange={(e) => setLoginRole(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none"
                    >
                      <option value="executive">Executive Sponsor (Grady Smith, Jr.)</option>
                      <option value="pm">Project Manager (A/E Director)</option>
                      <option value="sector">Sector Manager (Aviation Operations)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">SSO Email</label>
                    <input
                      type="email"
                      placeholder="employee@pondco.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Access Key</label>
                <input
                  type="password"
                  placeholder="ENTER ACCESS KEY"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs font-mono text-blue-400 focus:outline-none"
                />
              </div>

              {loginError && (
                <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider">{loginError}</p>
              )}

              <button type="submit" className="w-full button-3d-cyan text-white font-bold py-3.5 btn-hexagon text-xs uppercase tracking-wider">
                Authenticate Portal
              </button>
            </form>

            <div className="relative my-3 flex items-center justify-center">
              <hr className="w-full border-slate-800" />
              <span className="absolute bg-slate-950 px-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">OR</span>
            </div>

            <button
              type="button"
              onClick={() => setShowGoogleModal(true)}
              className="w-full py-3 bg-slate-900 hover:bg-slate-850 text-white font-bold btn-hexagon border border-slate-700 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <User size={14} className="text-red-400" />
              <span>Login with Google Account</span>
            </button>

            <button 
              type="button"
              onClick={() => setShowLoginModal(false)}
              className="w-full text-center text-xs text-slate-500 hover:text-slate-300 font-bold uppercase tracking-wider pt-2 block"
            >
              Close Gateway
            </button>
          </div>
        </div>
      )}

      {showGoogleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md">
          <div className="glass-panel rounded-3xl p-8 max-w-sm w-full border border-slate-800 space-y-6 text-center shadow-2xl relative">
            <h3 className="text-lg font-black text-white uppercase tracking-wider">Choose Google Account</h3>
            <p className="text-xs text-slate-400 font-serif">Select an identity to authenticate into Pondco.online:</p>
            
            <div className="space-y-3">
              <button 
                type="button"
                onClick={() => selectGoogleAccount('Mr.jwswain@gmail.com', 'owner')}
                className="w-full p-3 bg-slate-900 hover:bg-slate-850 rounded-xl border border-slate-800 text-xs font-header text-left flex justify-between items-center transition-all hover:border-blue-500/40"
              >
                <div>
                  <span className="font-bold text-white block">Mr. jwswain</span>
                  <span className="text-[10px] text-slate-500 font-mono">Mr.jwswain@gmail.com</span>
                </div>
                <span className="text-[9px] uppercase tracking-wider font-bold bg-blue-950 text-blue-400 px-2 py-0.5 rounded border border-blue-900/50">Owner</span>
              </button>
              
              <button 
                type="button"
                onClick={() => selectGoogleAccount('kyle.freedman@pondco.com', 'admin')}
                className="w-full p-3 bg-slate-900 hover:bg-slate-850 rounded-xl border border-slate-800 text-xs font-header text-left flex justify-between items-center transition-all hover:border-blue-500/40"
              >
                <div>
                  <span className="font-bold text-white block">Kyle Freedman</span>
                  <span className="text-[10px] text-slate-500 font-mono">kyle.freedman@pondco.com</span>
                </div>
                <span className="text-[9px] uppercase tracking-wider font-bold bg-orange-950 text-orange-400 px-2 py-0.5 rounded border border-orange-900/50">Admin</span>
              </button>
              
              <button 
                type="button"
                onClick={() => selectGoogleAccount('guest@pondco.com', 'executive')}
                className="w-full p-3 bg-slate-900 hover:bg-slate-850 rounded-xl border border-slate-850 text-xs font-header text-left flex justify-between items-center transition-all hover:border-slate-800"
              >
                <div>
                  <span className="font-bold text-white block">Simulated Guest</span>
                  <span className="text-[10px] text-slate-500 font-mono">guest@pondco.com</span>
                </div>
                <span className="text-[9px] uppercase tracking-wider font-bold bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-slate-900">Executive</span>
              </button>
            </div>

            <button 
              type="button"
              onClick={() => setShowGoogleModal(false)}
              className="text-xs text-slate-500 hover:text-slate-300 font-bold uppercase tracking-wider pt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  )
}
