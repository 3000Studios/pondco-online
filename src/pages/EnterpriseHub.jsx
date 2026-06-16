import React, { useState } from 'react'
import { ShieldCheck, Layers, FileText, CheckCircle2, XCircle, AlertTriangle, Users, BookOpen, Send, Plane, Calendar, Clock, HardHat, PhoneCall } from 'lucide-react'

export default function EnterpriseHub() {
  const role = localStorage.getItem('pondco_user_role') || 'executive'
  const [activePortalTab, setActivePortalTab] = useState('pipeline') // pipeline | safety | rag | agent | comms

  // Private Sprints & Deployments Calendar Data
  const sprintSchedules = [
    { name: 'Sprint 12: Ground Siting Clearance', status: 'Completed', date: 'June 02, 2026', owner: 'KSA Civil Team' },
    { name: 'Sprint 13: Cab Height Line-of-Sight', status: 'In Progress', date: 'June 18, 2026', owner: 'Aviation PM' },
    { name: 'Sprint 14: FAA Commissioning Review', status: 'Scheduled', date: 'July 10, 2026', owner: 'Grady Smith, Jr.' },
    { name: 'Deploy: Production ATCT Blueprint Pack', status: 'Scheduled', date: 'Aug 15, 2026', owner: 'Lead Architect' }
  ]
  
  // Pipeline State
  const [opportunities, setOpportunities] = useState([
    {
      id: 'OPP-F70',
      name: 'French Valley Siting Analysis Phase 2',
      client: 'Riverside County Aviation Division',
      sector: 'Aviation',
      value: 1250000,
      phase: 'Proposal Development',
      winChance: 75,
      completionChance: 90,
      strategicFit: true,
      technicalReview: true,
      pricingReview: false,
      sectorSignOffs: { Aviation: true, Infrastructure: false }
    },
    {
      id: 'OPP-TRM',
      name: 'Jacqueline Cochran Cab Outfitting',
      client: 'Riverside County Aviation Division',
      sector: 'Aviation',
      value: 2400000,
      phase: 'Pursuit Go / No-Go',
      winChance: 45,
      completionChance: 60,
      strategicFit: true,
      technicalReview: false,
      pricingReview: false,
      sectorSignOffs: { Aviation: true }
    }
  ])
  
  const [pipelineError, setPipelineError] = useState(null)
  
  // Safety Meeting Registry State
  const [employees, setEmployees] = useState([
    { name: 'Grady Smith, Jr.', role: 'Senior VP Infrastructure', signedSafety: true },
    { name: 'KSA Partner Lead', role: 'Civil Engineering Manager', signedSafety: true },
    { name: 'Aviation Project Director', role: 'Primary PM', signedSafety: false }
  ])
  const [safetyLogDate, setSafetyLogDate] = useState('2026-06-15 08:00 AM')
  const [delinquentLock, setDelinquentLock] = useState(true)

  // RAG Search state
  const [ragQuery, setRagQuery] = useState('')
  const [ragResult, setRagResult] = useState(null)

  // AI Agent state
  const [selectedAgent, setSelectedAgent] = useState('pm') // pm | executive | compliance
  const [agentChats, setAgentChats] = useState({
    pm: [
      { sender: 'agent', text: 'PM Agent Active. Tracking schedule variances for F70 and TRM towers. Siting surveys are 100% complete. Design Development is currently 42% complete.' }
    ],
    executive: [
      { sender: 'agent', text: 'Executive Agent Ready. Current portfolio health is STABLE. Total active California ATCT pipeline is valued at $3.65M.' }
    ],
    compliance: [
      { sender: 'agent', text: 'Compliance Agent Ready. Auditing configuration workbooks. System detected 1 safety sign-off pending for Aviation Project Director. Daily work logs will be locked until signed.' }
    ]
  })
  const [agentInput, setAgentInput] = useState('')

  // Simulated Messaging Chat State
  const [peerMessages, setPeerMessages] = useState([
    { sender: 'Grady Smith, Jr.', text: 'Ensure the KSA teaming files are fully indexed in the RAG database.' }
  ])
  const [chatInput, setChatInput] = useState('')
  const [inCall, setInCall] = useState(false)

  // Handlers
  const handleAdvancePhase = (oppId) => {
    setPipelineError(null)
    const opp = opportunities.find(o => o.id === oppId)
    
    if (opp.phase === 'Pursuit Go / No-Go' && !opp.strategicFit) {
      setPipelineError(`[GATE LOCKED] Cannot advance Opportunity ${oppId} to Capture Planning: Strategic Fit score and sector manager review are required.`)
      return
    }
    
    if (opp.phase === 'Proposal Development' && !opp.pricingReview) {
      setPipelineError(`[GATE LOCKED] Cannot advance Opportunity ${oppId} to Technical Review: Pricing model, margin review, and LOE completion must be certified.`)
      return
    }

    setOpportunities(prev => prev.map(o => {
      if (o.id === oppId) {
        const nextPhase = o.phase === 'Pursuit Go / No-Go' ? 'Proposal Development' : 'Technical Review'
        return { ...o, phase: nextPhase }
      }
      return o
    }))
  }

  const handleSignSafety = () => {
    setEmployees(prev => prev.map(emp => {
      if (emp.name === 'Aviation Project Director') {
        return { ...emp, signedSafety: true }
      }
      return emp
    }))
    setDelinquentLock(false)
  }

  const handleRagSearch = (e) => {
    e.preventDefault()
    if (!ragQuery.trim()) return

    if (ragQuery.toLowerCase().includes('siting') || ragQuery.toLowerCase().includes('f70') || ragQuery.toLowerCase().includes('trm')) {
      setRagResult({
        answer: 'Based on the FAA Federal Contract Tower Siting Analysis reports, the visual clearance line of sight (LOS) for French Valley Airport (F70) requires a cab floor height of 65 ft AGL. For Jacqueline Cochran Regional Airport (TRM), the optimal height is 82 ft AGL to clear the main hangar roofs.',
        citations: [
          { doc: 'FAA-Siting-Analysis-F70.pdf', chunk: 'Para 12.4' },
          { doc: 'TRM-ATCT-Structural-Plan.dwg', chunk: 'Sheet A-3' }
        ]
      })
    } else if (ragQuery.toLowerCase().includes('ksa') || ragQuery.toLowerCase().includes('pape')) {
      setRagResult({
        answer: 'KSA (a Pape-Dawson company) is designated as the Site Design and Civil Engineering partner for both the F70 and TRM control towers, leading utility coordination and airfield boundary alignment.',
        citations: [
          { doc: 'Pondco-KSA-Teaming-Agreement.pdf', chunk: 'Section 3.1' }
        ]
      })
    } else {
      setRagResult({
        answer: 'Query returned no direct matching chunks in vector index. Try querying "F70 Siting height" or "KSA Partnership".',
        citations: []
      })
    }
  }

  const handleSendAgentMessage = (e) => {
    e.preventDefault()
    if (!agentInput.trim()) return

    const userMsg = { sender: 'user', text: agentInput }
    setAgentChats(prev => ({
      ...prev,
      [selectedAgent]: [...prev[selectedAgent], userMsg]
    }))

    setTimeout(() => {
      let replyText = `I have received your request regarding "${agentInput}". Checking our RAG database for active project details...`
      if (agentInput.toLowerCase().includes('status')) {
        replyText = `F70 and TRM Design packages are on track. Verification checks indicate all schematic deliverables are archived.`
      } else if (agentInput.toLowerCase().includes('blocker')) {
        replyText = `Current blocker detected: Daily safety signatures pending. This prevents functional leads from completing workbooks.`
      }
      
      setAgentChats(prev => ({
        ...prev,
        [selectedAgent]: [...prev[selectedAgent], { sender: 'agent', text: replyText }]
      }))
    }, 1000)

    setAgentInput('')
  }

  const handleSendPeerMessage = (e) => {
    e.preventDefault()
    if (!chatInput.trim()) return
    setPeerMessages(prev => [...prev, { sender: 'You', text: chatInput }])
    setChatInput('')
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto py-6 font-header">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-900 pb-6 gap-4">
        <div>
          <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest block">Enterprise Operating Workspace</span>
          <h1 className="text-3xl font-black text-white uppercase tracking-wider flex items-center gap-2">
            PONDCO SaaS Hub <span className="text-orange-400 text-xs font-bold bg-orange-950 px-2.5 py-1 rounded border border-orange-900/50">SSO: {role.toUpperCase()}</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">Unified database tracking acquisition, safety compliance registries, and RAG knowledge assets.</p>
        </div>

        <div className="flex space-x-2 bg-slate-950 p-1 rounded-xl border border-slate-900 font-header">
          <button
            onClick={() => setActivePortalTab('pipeline')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              activePortalTab === 'pipeline' ? 'bg-orange-950 text-orange-400 border border-orange-900/50' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            Win/Loss Pipeline
          </button>
          <button
            onClick={() => setActivePortalTab('safety')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              activePortalTab === 'safety' ? 'bg-orange-950 text-orange-400 border border-orange-900/50' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            Safety &amp; Workbook
          </button>
          <button
            onClick={() => setActivePortalTab('rag')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              activePortalTab === 'rag' ? 'bg-orange-950 text-orange-400 border border-orange-900/50' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            RAG Base
          </button>
          <button
            onClick={() => setActivePortalTab('agent')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              activePortalTab === 'agent' ? 'bg-orange-950 text-orange-400 border border-orange-900/50' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            AI Agents
          </button>
          <button
            onClick={() => setActivePortalTab('comms')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              activePortalTab === 'comms' ? 'bg-orange-950 text-orange-400 border border-orange-900/50' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            Communications
          </button>
        </div>
      </div>

      {/* SPRINT & DEPLOYMENT BOARD WIDGET */}
      <section className="glass-panel rounded-3xl p-6 border border-slate-800 shadow-2xl space-y-4">
        <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Calendar size={18} className="text-cyan-400" /> In-House Sprint &amp; Deployment Cadence
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {sprintSchedules.map((sprint, idx) => (
            <div key={idx} className="bg-slate-950/60 border border-slate-900 p-4 rounded-xl space-y-2 hover:border-cyan-500/30 transition-all cursor-pointer">
              <div className="flex justify-between items-center text-[9px] uppercase tracking-wider font-bold">
                <span className="text-slate-500">{sprint.owner}</span>
                <span className={`px-2 py-0.5 rounded ${
                  sprint.status === 'Completed' ? 'bg-emerald-950 text-emerald-400' :
                  sprint.status === 'In Progress' ? 'bg-amber-950 text-amber-400 animate-pulse' :
                  'bg-slate-900 text-slate-400'
                }`}>{sprint.status}</span>
              </div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wide">{sprint.name}</h4>
              <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                <Clock size={12} />
                <span>{sprint.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Tab Area */}
      <div className="min-h-[450px]">
        {/* TAB 1: WIN/LOSS PIPELINE */}
        {activePortalTab === 'pipeline' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2">
                <Layers size={20} className="text-orange-400" /> Business Acquisition Lanes
              </h2>
            </div>

            {pipelineError && (
              <div className="p-4 bg-red-950/40 border border-red-900/50 rounded-xl text-red-400 text-xs flex items-center gap-3 animate-pulse">
                <AlertTriangle size={18} className="shrink-0" />
                <span>{pipelineError}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {opportunities.map((opp) => (
                <div key={opp.id} className="glass-panel rounded-2xl p-6 relative overflow-hidden group space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">{opp.id} • {opp.sector}</span>
                      <h3 className="text-base font-bold text-white uppercase tracking-wide mt-1">{opp.name}</h3>
                    </div>
                    <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-slate-950 text-slate-400 border border-slate-900">
                      {opp.phase}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-serif">{opp.client}</p>

                  <div className="grid grid-cols-2 gap-4 border-t border-slate-900 pt-4 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">Win Probability</span>
                      <span className="font-bold font-mono text-cyan-400">{opp.winChance}%</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">Est. Value</span>
                      <span className="font-bold font-mono text-amber-500">${opp.value.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-900 pt-4 flex justify-between items-center">
                    <button
                      onClick={() => handleAdvancePhase(opp.id)}
                      className="w-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-bold text-xs uppercase tracking-wider py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      Advance Phase <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: SAFETY LOCKOUT & CONFIG WORKBOOK */}
        {activePortalTab === 'safety' && (
          <div className="space-y-6">
            <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck size={20} className="text-orange-400" /> Mandatory Safety &amp; Workbooks
            </h2>

            {delinquentLock ? (
              <div className="p-4 bg-red-950/40 border border-red-900/60 rounded-xl text-red-400 text-xs space-y-3">
                <div className="flex items-center gap-3 font-bold uppercase tracking-wider">
                  <AlertTriangle size={20} className="beacon-active" />
                  <span>EMPLOYEE WORKBOOKS LOCKED: Safety Sign-off DELINQUENT</span>
                </div>
                <p className="font-serif">
                  Aviation Project Director has not signed off on the daily safety standup at {safetyLogDate}. Operational workbooks and configuration updates are locked until all assigned staff execute signatures.
                </p>
                <button
                  onClick={handleSignSafety}
                  className="bg-red-500 hover:bg-red-400 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wider transition-colors"
                >
                  Simulate PM Safety Signature
                </button>
              </div>
            ) : (
              <div className="p-4 bg-emerald-950/30 border border-emerald-900/40 rounded-xl text-emerald-400 text-xs flex items-center gap-3">
                <CheckCircle2 size={20} />
                <span className="font-bold uppercase tracking-wider">All safety signatures verified. Workbooks unlocked.</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="glass-panel rounded-2xl p-6 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-3">Project Roster &amp; Signature Status</h3>
                <div className="space-y-3">
                  {employees.map((emp, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs">
                      <div>
                        <span className="font-bold text-white block uppercase tracking-wide">{emp.name}</span>
                        <span className="text-slate-500">{emp.role}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded font-bold uppercase font-mono ${
                        emp.signedSafety ? 'bg-emerald-950/45 text-emerald-400' : 'bg-red-950/45 text-red-400 animate-pulse'
                      }`}>
                        {emp.signedSafety ? 'Signed' : 'Unsigned'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`glass-panel rounded-2xl p-6 space-y-4 relative ${delinquentLock ? 'opacity-40 pointer-events-none' : ''}`}>
                {delinquentLock && (
                  <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm z-20 flex items-center justify-center rounded-2xl">
                    <span className="text-red-500 font-bold uppercase tracking-widest text-xs flex items-center gap-1.5">
                      <XCircle size={16} /> Locked By Safety Policy
                    </span>
                  </div>
                )}
                <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-3">Functional Lead Workbook Log</h3>
                
                <div className="space-y-4 text-xs font-serif">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-header mb-1">Steps Completed</label>
                    <textarea 
                      placeholder="Enter today's updates..." 
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest font-header mb-1">Evidence Screenshot</label>
                    <div className="border border-dashed border-slate-800 rounded-lg p-6 text-center text-slate-500">
                      Drag or select screenshot file
                    </div>
                  </div>
                  <button className="w-full bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold font-header py-2.5 rounded-lg uppercase tracking-wider text-xs transition-colors">
                    Certify &amp; Sign Off EOD
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: RAG SEARCH */}
        {activePortalTab === 'rag' && (
          <div className="space-y-6">
            <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2">
              <BookOpen size={20} className="text-orange-400" /> RAG Knowledge base
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed font-serif">
              Search all proposal calendars, teaming files, safety logs, and FAA contract specs. Queries use vector-embeddings for semantic matching.
            </p>

            <form onSubmit={handleRagSearch} className="flex gap-3">
              <input
                type="text"
                value={ragQuery}
                onChange={(e) => setRagQuery(e.target.value)}
                placeholder="Query blueprints, siting assessments, KSA contract details..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-cyan-400 placeholder-slate-700 focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                Query vector
              </button>
            </form>

            {ragResult && (
              <div className="glass-panel rounded-2xl p-6 space-y-4">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">semantic answer</div>
                <p className="text-sm text-slate-200 leading-relaxed font-serif">{ragResult.answer}</p>
                
                {ragResult.citations.length > 0 && (
                  <div className="border-t border-slate-900 pt-3">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block mb-2">Sources Referenced:</span>
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                      {ragResult.citations.map((c, i) => (
                        <span key={i} className="bg-slate-950 text-slate-400 border border-slate-900 px-2.5 py-1 rounded">
                          {c.doc} ({c.chunk})
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* TAB 4: AI AGENT CHAT CONSOLE */}
        {activePortalTab === 'agent' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-slate-900 pb-4">
              <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2">
                <Users size={20} className="text-orange-400" /> AI Employee Agent Assistants
              </h2>
              <div className="flex space-x-2 text-xs">
                {['pm', 'executive', 'compliance'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedAgent(type)}
                    className={`px-3 py-1.5 rounded-lg border font-bold uppercase transition-all ${
                      selectedAgent === type ? 'bg-cyan-950 text-cyan-400 border-cyan-800' : 'bg-slate-950 text-slate-500 border-slate-900'
                    }`}
                  >
                    {type} Agent
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 h-80 overflow-y-auto space-y-4 flex flex-col justify-end">
              {agentChats[selectedAgent].map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-md rounded-xl p-3.5 text-xs font-serif ${
                    msg.sender === 'user' ? 'bg-cyan-950 text-cyan-400 border border-cyan-900' : 'bg-slate-900/60 text-slate-300 border border-slate-800'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendAgentMessage} className="flex gap-3">
              <input
                type="text"
                value={agentInput}
                onChange={(e) => setAgentInput(e.target.value)}
                placeholder={`Ask ${selectedAgent.toUpperCase()} Agent about project status, tasks, or blockers...`}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-cyan-400 placeholder-slate-700 focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-colors"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        )}

        {/* TAB 5: INTERNAL COMMUNICATIONS & CHAT */}
        {activePortalTab === 'comms' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 glass-panel rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Aviation Sector Channels</h3>
                <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  3 Online
                </span>
              </div>

              <div className="h-64 overflow-y-auto space-y-4 flex flex-col justify-end">
                {peerMessages.map((msg, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block">{msg.sender}</span>
                    <span className="bg-slate-900/60 text-xs text-slate-300 px-3.5 py-2.5 rounded-xl border border-slate-850 inline-block font-serif">
                      {msg.text}
                    </span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendPeerMessage} className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Send message to sector team..."
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none"
                />
                <button type="submit" className="bg-orange-500 hover:bg-orange-400 text-slate-950 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
                  Send
                </button>
              </form>
            </div>

            <div className="md:col-span-4 glass-panel rounded-2xl p-6 space-y-4 text-center">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-3">Video Conference</h3>
              
              <div className="relative h-44 bg-slate-950 rounded-lg border border-slate-900 overflow-hidden flex items-center justify-center">
                {inCall ? (
                  <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-4">
                    <span className="w-3 h-3 rounded-full bg-red-500 beacon-active mb-3" />
                    <span className="text-xs text-cyan-400 uppercase tracking-widest animate-pulse font-bold">Grady Smith in Conference</span>
                  </div>
                ) : (
                  <div className="text-slate-600 text-xs">
                    No active conference calls.
                  </div>
                )}
              </div>

              <button
                onClick={() => setInCall(!inCall)}
                className={`w-full py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 ${
                  inCall ? 'bg-red-500 hover:bg-red-400 text-slate-950' : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'
                }`}
              >
                <PhoneCall size={14} />
                <span>{inCall ? 'Disconnect Call' : 'Start Sector Conference'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
