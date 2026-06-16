import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Index from './pages/Index'
import AviationProjects from './pages/AviationProjects'
import Services from './pages/Services'
import Markets from './pages/Markets'
import Portfolio from './pages/Portfolio'
import FAQ from './pages/FAQ'
import Insights from './pages/Insights'
import ClientProgress from './pages/ClientProgress'
import EnterpriseHub from './pages/EnterpriseHub'
import BackgroundWallpaper from './components/UI/BackgroundWallpaper'
import { Plane, Home, Sparkles, Briefcase, FileText, Globe, Layers, FileCheck } from 'lucide-react'

function Navbar() {
  const location = useLocation()
  
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] px-6 py-4 flex items-center justify-between transition-transform duration-300">
      <div className="flex items-center space-x-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center font-black text-slate-950 shadow-[0_4px_12px_rgba(0,242,254,0.3)] font-header border-b-2 border-cyan-300">
          P
        </div>
        <span className="font-black text-xl tracking-wider text-white font-header uppercase flex items-center gap-1">
          POND<span className="text-cyan-400 font-light">CO</span> 
          <span className="text-[8px] uppercase tracking-[0.2em] bg-cyan-950/80 text-cyan-400 px-2 py-0.5 rounded border border-cyan-800/30">ONLINE</span>
        </span>
      </div>
      
      <div className="hidden md:flex space-x-1 font-header text-xs font-bold uppercase tracking-wider">
        <Link 
          to="/" 
          className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl transition-all duration-300 border ${
            location.pathname === '/' 
              ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/35 shadow-[0_2px_8px_rgba(0,242,254,0.15)]' 
              : 'text-slate-400 hover:text-cyan-300 hover:border-slate-800/80 hover:bg-slate-900/40 border-transparent'
          }`}
        >
          <Home size={14} />
          <span className="hover:text-glow">Home</span>
        </Link>
        <Link 
          to="/projects" 
          className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl transition-all duration-300 border ${
            location.pathname === '/projects' 
              ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/35 shadow-[0_2px_8px_rgba(0,242,254,0.15)]' 
              : 'text-slate-400 hover:text-cyan-300 hover:border-slate-800/80 hover:bg-slate-900/40 border-transparent'
          }`}
        >
          <Plane size={14} />
          <span className="hover:text-glow">Aviation</span>
        </Link>
        <Link 
          to="/services" 
          className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl transition-all duration-300 border ${
            location.pathname === '/services' 
              ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/35 shadow-[0_2px_8px_rgba(0,242,254,0.15)]' 
              : 'text-slate-400 hover:text-cyan-300 hover:border-slate-800/80 hover:bg-slate-900/40 border-transparent'
          }`}
        >
          <Briefcase size={14} />
          <span className="hover:text-glow">Services</span>
        </Link>
        <Link 
          to="/markets" 
          className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl transition-all duration-300 border ${
            location.pathname === '/markets' 
              ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/35 shadow-[0_2px_8px_rgba(0,242,254,0.15)]' 
              : 'text-slate-400 hover:text-cyan-300 hover:border-slate-800/80 hover:bg-slate-900/40 border-transparent'
          }`}
        >
          <Globe size={14} />
          <span className="hover:text-glow">Markets</span>
        </Link>
        <Link 
          to="/portfolio" 
          className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl transition-all duration-300 border ${
            location.pathname === '/portfolio' 
              ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/35 shadow-[0_2px_8px_rgba(0,242,254,0.15)]' 
              : 'text-slate-400 hover:text-cyan-300 hover:border-slate-800/80 hover:bg-slate-900/40 border-transparent'
          }`}
        >
          <Layers size={14} />
          <span className="hover:text-glow">Portfolio</span>
        </Link>
        <Link 
          to="/client" 
          className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl transition-all duration-300 border ${
            location.pathname === '/client' 
              ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/35 shadow-[0_2px_8px_rgba(0,242,254,0.15)]' 
              : 'text-slate-400 hover:text-cyan-300 hover:border-slate-800/80 hover:bg-slate-900/40 border-transparent'
          }`}
        >
          <FileText size={14} />
          <span className="hover:text-glow">Client</span>
        </Link>
        <Link 
          to="/hub" 
          className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl transition-all duration-300 border ${
            location.pathname === '/hub' 
              ? 'bg-orange-950/80 text-orange-400 border-orange-500/35 shadow-[0_2px_8px_rgba(249,115,22,0.15)]' 
              : 'text-slate-400 hover:text-orange-400 hover:border-slate-800/80 hover:bg-slate-900/40 border-transparent'
          }`}
        >
          <FileCheck size={14} />
          <span className="hover:text-glow">SaaS Hub</span>
        </Link>
      </div>
    </nav>
  )
}

function ScrollingTicker() {
  return (
    <div className="w-full bg-slate-950 border-y border-slate-900 py-3 relative z-30 font-header overflow-hidden shadow-[inset_0_4px_12px_rgba(0,0,0,0.8)]">
      <div className="flex items-center">
        <div className="bg-cyan-950 text-cyan-400 px-3 py-1 rounded-lg border border-cyan-800/50 text-[10px] font-black uppercase tracking-wider ml-4 z-10 shadow-[0_2px_6px_rgba(0,242,254,0.2)]">
          GLOBAL NETWORK TICKER
        </div>
        <div className="ticker-wrap flex items-center w-full">
          <div className="ticker-content text-slate-400 text-xs tracking-widest uppercase flex space-x-24 pl-8 animate-ticker">
            <span>✈️ FLIGHT DELAYS: LAX +12M (WEATHER) | JFK ON-TIME | ORD +25M (AIR TRAFFIC) | SFO ON-TIME | ATL +10M</span>
            <span>⚡ SYSTEM: FAA TOWER INFRASTRUCTURE PLATFORM DEPLOYED SUCCESSFULLY TO CLOUDFLARE PAGES.</span>
            <span>🏗️ CONTRACT WINS: RIVERSIDE COUNTY AWARDS SECTOR UPGRADES FOR F70 & TRM SCHEMATICS.</span>
            <span>📍 COACHELLA VALLEY: WIND ADVISORY ACTIVE - ALTIMETER CHECKS ONGOING FOR ALL APPROACH PATTERNS.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="w-full bg-slate-900/80 backdrop-blur-xl border-t border-slate-800 py-8 mt-20 relative z-10 shadow-[0_-10px_35px_rgba(0,0,0,0.6)] rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-black text-lg text-white font-header uppercase tracking-wider">
            POND<span className="text-cyan-400">CO</span>
          </span>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">A/E DESIGN & COMMAND CONSOLE</p>
        </div>
        
        <div className="flex space-x-8 text-xs text-slate-400 font-header uppercase tracking-wider font-bold">
          <Link to="/faq" className="hover:text-cyan-400 transition-colors">FAQ</Link>
          <Link to="/insights" className="hover:text-cyan-400 transition-colors">Insights</Link>
        </div>
        
        <div className="text-center md:text-right text-[10px] text-slate-500 font-header uppercase tracking-wider">
          <p>Copyright © 2026 Pond & Company. Confidential Federal & Municipal specifications.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-transparent text-slate-100 flex flex-col pt-32 relative overflow-x-hidden">
        <BackgroundWallpaper />
        <Navbar />
        
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<AviationProjects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/client" element={<ClientProgress />} />
            <Route path="/hub" element={<EnterpriseHub />} />
          </Routes>
        </main>
        
        <ScrollingTicker />
        <Footer />
      </div>
    </Router>
  )
}
