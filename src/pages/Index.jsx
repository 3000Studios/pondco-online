import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Sparkles, Clock, CloudSun, ShieldAlert, ChevronRight, Volume2, Play, Users, Briefcase, Eye, ShieldCheck, Activity, Database, HelpCircle, FileText, ArrowRight, Video, Lock, Send, Layers } from 'lucide-react'

export default function Index() {
  const navigate = useNavigate()
  const [currentTime, setCurrentTime] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [activeLoginTab, setActiveLoginTab] = useState('client') // client | internal
  const [loginRole, setLoginRole] = useState('executive')
  const [accessCode, setAccessCode] = useState('')
  const [loginError, setLoginError] = useState('')
  const [hoveredVideo, setHoveredVideo] = useState(false)
  const [activePortfolioTab, setActivePortfolioTab] = useState('aviation') // aviation | government | infrastructure

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

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden space-y-20">
      
      {/* 1. HERO SECTION & TIME/WEATHER OVERLAY */}
      <div className="relative pt-10">
        <div className="absolute top-0 right-0 z-30 flex items-center space-x-6 bg-slate-950/90 border border-slate-900 px-5 py-2.5 rounded-bl-2xl backdrop-blur-md font-header text-sm tracking-wider">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
          {/* Left Hero (Col 1-7) */}
          <div className="lg:col-span-7 space-y-8 text-left z-10">
            <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider font-header">
              <Sparkles size={14} className="beacon-active text-amber-500" />
              <span>FAA Federal Contract Tower Partner</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-none text-white font-header uppercase">
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
          </div>

          {/* Right Edge Glow Login (Col 8-12) */}
          <div className="lg:col-span-5 z-20">
            <div className="glow-border-container">
              <div className="glow-border-bg" />
              <div className="glow-border-content p-8">
                <div className="flex border-b border-slate-900 mb-6 font-header">
                  <button
                    type="button"
                    onClick={() => { setActiveLoginTab('client'); setLoginError(''); setAccessCode(''); }}
                    className={`flex-1 pb-3 text-sm font-semibold uppercase tracking-wider border-b-2 transition-all ${
                      activeLoginTab === 'client' ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    Client Portal
                  </button>
                  <button
                    type="button"
                    onClick={() => { setActiveLoginTab('internal'); setLoginError(''); setAccessCode(''); }}
                    className={`flex-1 pb-3 text-sm font-semibold uppercase tracking-wider border-b-2 transition-all ${
                      activeLoginTab === 'internal' ? 'border-orange-400 text-orange-400' : 'border-transparent text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    Internal SaaS
                  </button>
                </div>

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

                <form onSubmit={handleLogin} className="space-y-5">
                  {activeLoginTab === 'internal' && (
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
                        <label className="block text-xs font-semibold text-slate-400 font-header uppercase tracking-wider mb-2">SSO Email</label>
                        <input
                          type="email"
                          placeholder="employee@pondco.com"
                          required
                          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm font-header text-white placeholder-slate-700 focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>
                  )}

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

                  {loginError && (
                    <p className="text-red-500 text-xs font-header font-bold uppercase tracking-wider mt-1 text-left">{loginError}</p>
                  )}

                  <button
                    type="submit"
                    className={`w-full font-header py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 ${
                      activeLoginTab === 'client'
                        ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'
                        : 'bg-orange-500 hover:bg-orange-400 text-slate-950'
                    }`}
                  >
                    <span>Authenticate Portal</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. FEATURED AVIATION WINS */}
      <section className="space-y-6">
        <div className="text-left border-l-4 border-cyan-400 pl-4">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest font-header block">Active Contracts</span>
          <h2 className="text-3xl font-black text-white font-header uppercase">FAA Federal Contract Tower Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
            <h3 className="text-lg font-bold text-white font-header uppercase tracking-wider mb-2">French Valley Airport (F70)</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-serif mb-4">
              Murrieta, California. Siting analysis and spatial coordinate validation completed. Design supports active general aviation training patterns with a target cab floor height of 65 ft AGL.
            </p>
            <Link to="/projects" className="text-cyan-400 hover:text-cyan-300 font-header text-xs font-bold uppercase tracking-wider flex items-center gap-1">
              View Siting Schematic <ArrowRight size={14} />
            </Link>
          </div>

          <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
            <h3 className="text-lg font-bold text-white font-header uppercase tracking-wider mb-2">Jacqueline Cochran Regional (TRM)</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-serif mb-4">
              Thermal, California. Reliever hub planning for the Coachella Valley. Incorporates an expanded 360-degree field-of-view cab height of 82 ft AGL to clear regional hangar profiles.
            </p>
            <Link to="/projects" className="text-cyan-400 hover:text-cyan-300 font-header text-xs font-bold uppercase tracking-wider flex items-center gap-1">
              View Siting Schematic <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. VIDEO SHOWCASE AREA */}
      <section className="space-y-6">
        <div className="text-left border-l-4 border-cyan-400 pl-4">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest font-header block">Drone &amp; Media Center</span>
          <h2 className="text-3xl font-black text-white font-header uppercase">Infrastructure Video Reels</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel rounded-2xl p-4 aspect-video flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-slate-950/60 z-10 flex items-center justify-center">
              <Play className="text-white hover:scale-110 transition-transform cursor-pointer" size={40} />
            </div>
            <span className="text-[10px] font-bold text-slate-400 font-header tracking-wider uppercase z-20">F70 Field Progress Reel</span>
          </div>

          <div className="glass-panel rounded-2xl p-4 aspect-video flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-slate-950/60 z-10 flex items-center justify-center">
              <Play className="text-white hover:scale-110 transition-transform cursor-pointer" size={40} />
            </div>
            <span className="text-[10px] font-bold text-slate-400 font-header tracking-wider uppercase z-20">TRM Structural Walkthrough</span>
          </div>

          <div className="glass-panel rounded-2xl p-4 aspect-video flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-slate-950/60 z-10 flex items-center justify-center">
              <Play className="text-white hover:scale-110 transition-transform cursor-pointer" size={40} />
            </div>
            <span className="text-[10px] font-bold text-slate-400 font-header tracking-wider uppercase z-20">Pond A/E Operations Showcase</span>
          </div>
        </div>
      </section>

      {/* 4. PROJECT INTELLIGENCE LAYER */}
      <section className="glass-panel rounded-2xl p-8 space-y-6 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
        <h2 className="text-3xl font-black text-white font-header uppercase tracking-wider">Project Intelligence Engine</h2>
        <p className="text-sm text-slate-400 font-serif leading-relaxed max-w-3xl">
          Pondco.online introduces a centralized, RAG-driven context model connecting scheduling workbooks, Daily scrum inputs, and change-orders. Real-time validation checks compute win chances, flag design discrepancies, and log compliance trails automatically.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4 text-xs font-header">
          <div className="space-y-1">
            <span className="font-bold text-white block uppercase tracking-wide">RAG Search</span>
            <span className="text-slate-500 block leading-relaxed">Indexed blueprint specs &amp; contracts.</span>
          </div>
          <div className="space-y-1">
            <span className="font-bold text-white block uppercase tracking-wide">AI Agents</span>
            <span className="text-slate-500 block leading-relaxed">Role-specific PM and Compliance bots.</span>
          </div>
          <div className="space-y-1">
            <span className="font-bold text-white block uppercase tracking-wide">Validation Gates</span>
            <span className="text-slate-500 block leading-relaxed">Pipeline rules prevent out-of-order phase shifts.</span>
          </div>
          <div className="space-y-1">
            <span className="font-bold text-white block uppercase tracking-wide">Hours Tracker</span>
            <span className="text-slate-500 block leading-relaxed">Rolls up functional lead task time.</span>
          </div>
        </div>
      </section>

      {/* 5. SERVICES OVERVIEW */}
      <section className="space-y-6">
        <div className="text-left border-l-4 border-cyan-400 pl-4">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest font-header block">Consulting Specialties</span>
          <h2 className="text-3xl font-black text-white font-header uppercase">Engineering &amp; Planning Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white font-header uppercase">Integrated Planning</h3>
            <p className="text-xs text-slate-400 font-serif leading-relaxed">FAA compliance matrices, tower siting reviews, and environmental assessments.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white font-header uppercase">Project Controls</h3>
            <p className="text-xs text-slate-400 font-serif leading-relaxed">Margin governance, LOE scheduling updates, and change-order tracking.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white font-header uppercase">AI &amp; Data Integration</h3>
            <p className="text-xs text-slate-400 font-serif leading-relaxed">Legacy database migration models, vector search setups, and agent orchestration.</p>
          </div>
        </div>
      </section>

      {/* 6. SAAS PLATFORM PREVIEW */}
      <section className="glass-panel rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white font-header uppercase tracking-wider">Private Operating Console Preview</h2>
        
        <div className="border border-slate-900 rounded-xl bg-slate-950/60 p-4 font-mono text-xs text-cyan-400">
          <span className="block text-slate-500 border-b border-slate-900 pb-2 mb-2 font-header font-bold uppercase tracking-wider text-[10px]">// ACTIVE CONSOLE RUNTIME</span>
          <div className="space-y-2 font-serif text-slate-300">
            <p className="font-header font-bold text-white uppercase text-[11px]">Active Opportunities (2):</p>
            <p>1. French Valley Siting Phase 2 ➔ Win Chance: 75% | Status: Proposal Development</p>
            <p>2. Jacqueline Cochran Cab Outfitting ➔ Win Chance: 45% | Status: Pursuit Go / No-Go</p>
            <p className="text-red-400 font-header font-bold uppercase text-[10px] mt-4">System Alerts:</p>
            <p className="text-red-400">🚨 DELINQUENT SAFETY SIGNATURE: Aviation Project Director log pending. Operations locked.</p>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Link to="/hub" className="text-cyan-400 hover:text-cyan-300 font-header text-xs font-bold uppercase tracking-wider flex items-center gap-1">
            Access SaaS Hub Console <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* 7. PAST WORK / PORTFOLIO */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-900 pb-4 gap-4">
          <h2 className="text-3xl font-black text-white font-header uppercase">Sector Experience</h2>
          
          <div className="flex space-x-2 bg-slate-950 p-1 rounded-xl border border-slate-900 font-header text-xs">
            <button 
              onClick={() => setActivePortfolioTab('aviation')}
              className={`px-3 py-1 rounded-lg uppercase tracking-wider font-bold transition-all ${
                activePortfolioTab === 'aviation' ? 'bg-cyan-950 text-cyan-400' : 'text-slate-500'
              }`}
            >
              Aviation
            </button>
            <button 
              onClick={() => setActivePortfolioTab('government')}
              className={`px-3 py-1 rounded-lg uppercase tracking-wider font-bold transition-all ${
                activePortfolioTab === 'government' ? 'bg-cyan-950 text-cyan-400' : 'text-slate-500'
              }`}
            >
              Government
            </button>
            <button 
              onClick={() => setActivePortfolioTab('infrastructure')}
              className={`px-3 py-1 rounded-lg uppercase tracking-wider font-bold transition-all ${
                activePortfolioTab === 'infrastructure' ? 'bg-cyan-950 text-cyan-400' : 'text-slate-500'
              }`}
            >
              Infrastructure
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left font-header">
          {activePortfolioTab === 'aviation' && (
            <>
              <div className="glass-panel rounded-2xl p-6">
                <span className="text-[10px] text-slate-500 block uppercase tracking-wider">F70 ATCT Contract</span>
                <h3 className="text-base font-bold text-white uppercase mt-1">French Valley Airport Control Tower</h3>
              </div>
              <div className="glass-panel rounded-2xl p-6">
                <span className="text-[10px] text-slate-500 block uppercase tracking-wider">TRM ATCT Contract</span>
                <h3 className="text-base font-bold text-white uppercase mt-1">Jacqueline Cochran Regional Tower</h3>
              </div>
            </>
          )}
          {activePortfolioTab === 'government' && (
            <>
              <div className="glass-panel rounded-2xl p-6">
                <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Federal Program</span>
                <h3 className="text-base font-bold text-white uppercase mt-1">FAA Contract Tower Siting Reviews</h3>
              </div>
              <div className="glass-panel rounded-2xl p-6">
                <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Municipal Utilities</span>
                <h3 className="text-base font-bold text-white uppercase mt-1">Airfield Electrical Substations</h3>
              </div>
            </>
          )}
          {activePortfolioTab === 'infrastructure' && (
            <>
              <div className="glass-panel rounded-2xl p-6">
                <span className="text-[10px] text-slate-500 block uppercase tracking-wider">A/E Planning</span>
                <h3 className="text-base font-bold text-white uppercase mt-1">Regional Reliever Capacity Sizing</h3>
              </div>
              <div className="glass-panel rounded-2xl p-6">
                <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Civil Engineering</span>
                <h3 className="text-base font-bold text-white uppercase mt-1">Runway Safety Boundary Layouts</h3>
              </div>
            </>
          )}
        </div>
      </section>

      {/* 8. ENTERPRISE GOVERNANCE */}
      <section className="glass-panel rounded-2xl p-8 space-y-6">
        <h2 className="text-3xl font-black text-white font-header uppercase tracking-wider">Enterprise Delivery Governance</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs font-header">
          <div className="space-y-2">
            <span className="font-bold text-white block uppercase tracking-wide">1. Blueprinting Phase</span>
            <p className="text-slate-500 leading-relaxed font-serif">Initial round-table requirements logging and scope mapping by sector managers.</p>
          </div>
          <div className="space-y-2">
            <span className="font-bold text-white block uppercase tracking-wide">2. Sprint Planning</span>
            <p className="text-slate-500 leading-relaxed font-serif">Sprints organized according to approved Gantt baselines and resource hours.</p>
          </div>
          <div className="space-y-2">
            <span className="font-bold text-white block uppercase tracking-wide">3. Monday Standups</span>
            <p className="text-slate-500 leading-relaxed font-serif">Cross-sector standup reviews covering blockers, budget margin, and pipeline status.</p>
          </div>
          <div className="space-y-2">
            <span className="font-bold text-white block uppercase tracking-wide">4. Change-Order Control</span>
            <p className="text-slate-500 leading-relaxed font-serif">Explicit scope validations preventing unapproved task execution.</p>
          </div>
        </div>
      </section>

      {/* 9. SECURITY AND COMPLIANCE */}
      <section className="glass-panel rounded-2xl p-8 space-y-4">
        <h2 className="text-lg font-bold text-white font-header uppercase tracking-wider flex items-center gap-2">
          <Lock className="text-cyan-400 animate-pulse" /> Security and Compliance Matrix
        </h2>
        <p className="text-xs text-slate-400 font-serif leading-relaxed">
          Due to the sensitivity of federal and local aviation infrastructure data, access is protected by role-based authentication keys. Public pages use exclusively approved press-release copy. Internal documents, blueprint plans, and RAG data retrieval pathways are fully audited and permission-scoped.
        </p>
      </section>

      {/* 10. CONTACT / PORTAL ACCESS PATHWAYS */}
      <section className="glass-panel rounded-2xl p-8 text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-white font-header uppercase tracking-wider">Establish Project Connection</h2>
        <p className="text-xs text-slate-400 font-serif max-w-md mx-auto leading-relaxed">
          Contact Pondco.online to configure client portal progress tracker instances, configure RAG databases, or request internal employee credentials.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-xs font-header">
          <Link to="/client" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-2.5 rounded-lg uppercase tracking-wider transition-colors">
            Client Portal Setup
          </Link>
          <Link to="/hub" className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-lg border border-slate-800 uppercase tracking-wider transition-colors">
            Employee SSO Request
          </Link>
        </div>
      </section>

      {/* COMPLIANCE TICKER AT BOTTOM */}
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
