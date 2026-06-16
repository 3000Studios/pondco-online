import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Sparkles, Clock, CloudSun, ShieldAlert, ChevronRight, Play, Eye, ShieldCheck, Lock, Activity, Bot, Send, User } from 'lucide-react'
import { app } from '../firebase'

export default function Index() {
  const navigate = useNavigate()
  const [currentTime, setCurrentTime] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [activeLoginTab, setActiveLoginTab] = useState('client') // client | internal
  const [loginRole, setLoginRole] = useState('executive')
  const [accessCode, setAccessCode] = useState('')
  const [loginError, setLoginError] = useState('')
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
      navigate('/client')
    } else {
      localStorage.setItem('pondco_user_role', loginRole)
      navigate('/hub')
    }
  }

  const handleGoogleLogin = () => {
    // Simulate Google account authentication and redirect to internal CRM/Hub dashboard
    localStorage.setItem('pondco_user_role', 'executive')
    navigate('/hub')
  }

  // Interactive Bot chatbot state
  const [messages, setMessages] = useState([
    { text: "Pondco Assistant initialized. How can I assist you with the FAA ATCT project directory or engineering standups today?", sender: "bot" }
  ])
  const [inputVal, setInputVal] = useState('')

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputVal.trim()) return
    const userMsg = inputVal
    setMessages(prev => [...prev, { text: userMsg, sender: "user" }])
    setInputVal('')

    setTimeout(() => {
      let reply = "I am searching the local project registry..."
      if (userMsg.toLowerCase().includes('agent') || userMsg.toLowerCase().includes('people') || userMsg.toLowerCase().includes('directory')) {
        reply = "DIRECTORY MATCHES: \n- Grady Smith, Jr. (SVP Infrastructure)\n- KSA Engineers (Lead Site Design)\n- PM A/E Director (Sector Operations)\n\nConnecting you to secure agent routing portals."
      } else if (userMsg.toLowerCase().includes('sprint') || userMsg.toLowerCase().includes('schedule')) {
        reply = "Sprint Phase 2 is currently active. Next architectural deliverable: August 15, 2026. Please authenticate using your Google SSO login to view."
      } else {
        reply = "Request forwarded to corporate directory. Type 'agents' to list directory contacts or 'schedule' to check tower sprints."
      }
      setMessages(prev => [...prev, { text: reply, sender: "bot" }])
    }, 800)
  }

  return (
    <div className="space-y-16 animate-slide-in relative">
      
      {/* Dynamic Simulated Hero Video Underlayment Wrapper */}
      <div className="relative rounded-3xl overflow-hidden glass-panel-accent p-8 md:p-12 min-h-[480px] flex items-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-slate-700/50">
        <div className="absolute inset-0 z-0 bg-[#061430] opacity-40">
          {/* Simulated live video grid pattern */}
          <div className="absolute inset-0 bg-repeat-x opacity-20 pointer-events-none" style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="200" viewBox="0 0 1000 200"><path d="M100 120 Q150 90 200 110 Q250 80 320 110 L500 120" stroke="cyan" fill="none" strokeWidth="2"/></svg>')`
          }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-0" />

        {/* Local Weather & Time Overlays */}
        <div className="absolute top-4 right-4 z-10 flex flex-wrap gap-4 items-center bg-slate-950/80 border border-slate-800 px-4 py-2.5 rounded-xl backdrop-blur-md text-xs font-header">
          <div className="flex items-center space-x-1.5 text-cyan-400">
            <Clock size={14} />
            <span>{currentTime || '12:00:00 PM'}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-amber-400 border-l border-slate-800 pl-4">
            <CloudSun size={14} />
            <span>{weather.temp} • {weather.location} ({weather.status})</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 w-full relative">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-cyan-800/40 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest font-header">
              <Sparkles size={14} className="beacon-active text-amber-500 animate-pulse" />
              <span>FAA Federal Tower Partner</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-none">
              PONDCO<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">.ONLINE</span>
            </h1>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">
              Connecting A/E architectural modeling, construction oversight, and multi-sector standups with RAG-driven telemetry pipelines and role-based AI agents.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/projects" className="button-3d-cyan text-slate-950 font-bold px-6 py-3 rounded-xl uppercase tracking-wider text-xs flex items-center gap-2">
                <span>Aviation Command Center</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 border border-slate-800/60 shadow-2xl relative">
              <div className="flex border-b border-slate-800 mb-4 font-header text-xs">
                <button
                  onClick={() => { setActiveLoginTab('client'); setLoginError(''); setAccessCode(''); }}
                  className={`flex-1 pb-2 font-bold uppercase tracking-wider border-b-2 transition-all ${
                    activeLoginTab === 'client' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-500'
                  }`}
                >
                  Client Portal
                </button>
                <button
                  onClick={() => { setActiveLoginTab('internal'); setLoginError(''); setAccessCode(''); }}
                  className={`flex-1 pb-2 font-bold uppercase tracking-wider border-b-2 transition-all ${
                    activeLoginTab === 'internal' ? 'border-orange-400 text-orange-400' : 'border-transparent text-slate-500'
                  }`}
                >
                  Internal SaaS
                </button>
              </div>

              {/* Secure Login Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                {activeLoginTab === 'internal' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Select Role</label>
                      <select
                        value={loginRole}
                        onChange={(e) => setLoginRole(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white"
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
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white"
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
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs font-mono text-cyan-400"
                  />
                </div>

                {loginError && (
                  <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider">{loginError}</p>
                )}

                <button type="submit" className="w-full button-3d-cyan text-slate-950 font-bold py-2.5 rounded-lg text-xs uppercase tracking-wider">
                  Authenticate Portal
                </button>
              </form>

              {/* Google OAuth Simulation */}
              <div className="relative my-4 flex items-center justify-center">
                <hr className="w-full border-slate-800" />
                <span className="absolute bg-slate-950 px-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">OR</span>
              </div>

              <button
                onClick={handleGoogleLogin}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg border border-slate-700 text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
              >
                <User size={14} className="text-red-400" />
                <span>Login with Google Account</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Visual Highlights & Interactive Sectors (Hover Context) */}
      <section className="space-y-6">
        <div className="text-left border-l-4 border-cyan-400 pl-4">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">Hover Context View</span>
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">Active Tower Sectors</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            onMouseEnter={() => setHoveredCard('siting')}
            onMouseLeave={() => setHoveredCard(null)}
            className="glass-panel rounded-2xl p-6 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] border border-slate-800 hover:border-cyan-500/50 shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          >
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Tower Siting &amp; Planning</h3>
            <p className="text-xs text-slate-400 mt-2 font-serif leading-relaxed">
              Spatial constraints, airfield safety margins, and line-of-sight modeling for cab elevations.
            </p>
            {hoveredCard === 'siting' && (
              <div className="absolute inset-0 bg-slate-950/90 flex flex-col justify-center p-6 text-xs text-cyan-400 font-header leading-relaxed transition-all duration-300 border border-cyan-500/40">
                <span className="font-bold text-white uppercase mb-1">🔍 ACTIVE CONTEXT:</span>
                <p>French Valley siting analysis completed. Cab height target at 65 ft AGL verified against runway training boundaries.</p>
              </div>
            )}
          </div>

          <div 
            onMouseEnter={() => setHoveredCard('structural')}
            onMouseLeave={() => setHoveredCard(null)}
            className="glass-panel rounded-2xl p-6 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] border border-slate-800 hover:border-cyan-500/50 shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          >
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Structural Engineering</h3>
            <p className="text-xs text-slate-400 mt-2 font-serif leading-relaxed">
              Reinforced concrete foundations, high-strength structural framing, and seismic safety compliance.
            </p>
            {hoveredCard === 'structural' && (
              <div className="absolute inset-0 bg-slate-950/90 flex flex-col justify-center p-6 text-xs text-cyan-400 font-header leading-relaxed transition-all duration-300 border border-cyan-500/40">
                <span className="font-bold text-white uppercase mb-1">🏗️ ACTIVE CONTEXT:</span>
                <p>Design incorporates FAA-STD-008 compliance, custom truss configurations, and heavy structural load-bearing checks.</p>
              </div>
            )}
          </div>

          <div 
            onMouseEnter={() => setHoveredCard('compliance')}
            onMouseLeave={() => setHoveredCard(null)}
            className="glass-panel rounded-2xl p-6 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] border border-slate-800 hover:border-cyan-500/50 shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          >
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">FAA Regulatory Compliance</h3>
            <p className="text-xs text-slate-400 mt-2 font-serif leading-relaxed">
              FAA standard matrices, equipment integrations, and air traffic safety clearance profiles.
            </p>
            {hoveredCard === 'compliance' && (
              <div className="absolute inset-0 bg-slate-950/90 flex flex-col justify-center p-6 text-xs text-cyan-400 font-header leading-relaxed transition-all duration-300 border border-cyan-500/40">
                <span className="font-bold text-white uppercase mb-1">⚖️ ACTIVE CONTEXT:</span>
                <p>Direct integration with FAA Joint Acceptance inspection checkpoints. Pre-requisite safety signoffs verified.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* RAG-Driven Search Engine & Chatbot Assistant */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* RAG Engine (Col 1-7) */}
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Activity size={18} className="text-cyan-400" /> RAG Knowledge Retrieval Simulator
          </h3>
          <p className="text-xs text-slate-400 font-serif leading-relaxed">
            Search public blueprints, design codes, and FAA tower siting specifications dynamically loaded from the repository.
          </p>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-850 flex gap-2">
            <input 
              type="text" 
              placeholder="Query siting rules, heights, structural guidelines..." 
              className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-cyan-400 placeholder-slate-600 focus:outline-none"
            />
            <button className="button-3d-cyan text-slate-950 font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wider">
              Search
            </button>
          </div>
        </div>

        {/* Employee Assistant Chatbot (Col 8-12) */}
        <div className="lg:col-span-5 glass-panel rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-col h-[320px]">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5 mb-2">
            <Bot size={16} className="text-cyan-400 animate-bounce" /> Employee Directory Agent Bot
          </h3>
          
          <div className="flex-1 overflow-y-auto bg-slate-950/80 rounded-xl p-3 border border-slate-900 text-[11px] font-mono space-y-2 mb-3 max-h-[180px]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`p-2 rounded-lg max-w-[85%] ${msg.sender === 'bot' ? 'bg-slate-900 text-cyan-300' : 'bg-cyan-950 text-white self-end ml-auto text-right'}`}>
                {msg.text.split('\n').map((line, lIdx) => <span key={lIdx} className="block">{line}</span>)}
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="flex gap-1.5">
            <input 
              type="text" 
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask for 'agents' or 'schedule'..." 
              className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-700 focus:outline-none"
            />
            <button type="submit" className="bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold p-2 rounded-lg">
              <Send size={12} />
            </button>
          </form>
        </div>
      </section>

    </div>
  )
}
