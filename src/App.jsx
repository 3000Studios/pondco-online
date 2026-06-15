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
import DomainGuide from './pages/DomainGuide'
import { Plane, Building2, Home, Sparkles, Briefcase, FileText, Globe, Layers, HelpCircle, FileCheck } from 'lucide-react'

function Navbar() {
  const location = useLocation()
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-800 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20 font-header">
          P
        </div>
        <span className="font-semibold text-lg tracking-wider text-white font-header uppercase">
          POND<span className="text-cyan-400 font-light">CO</span> <span className="text-[9px] uppercase tracking-[0.2em] bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded border border-cyan-900/50">Online</span>
        </span>
      </div>
      
      <div className="flex space-x-1 font-header text-xs font-bold uppercase tracking-wider">
        <Link 
          to="/" 
          className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg transition-all duration-300 ${
            location.pathname === '/' 
              ? 'bg-slate-800 text-white shadow-inner border border-slate-700/50' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
          }`}
        >
          <Home size={14} />
          <span>Home</span>
        </Link>
        <Link 
          to="/projects" 
          className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg transition-all duration-300 ${
            location.pathname === '/projects' 
              ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/30' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
          }`}
        >
          <Plane size={14} />
          <span>Aviation</span>
        </Link>
        <Link 
          to="/services" 
          className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg transition-all duration-300 ${
            location.pathname === '/services' 
              ? 'bg-slate-850 text-slate-200 border border-slate-800' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
          }`}
        >
          <Briefcase size={14} />
          <span>Services</span>
        </Link>
        <Link 
          to="/markets" 
          className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg transition-all duration-300 ${
            location.pathname === '/markets' 
              ? 'bg-slate-850 text-slate-200 border border-slate-800' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
          }`}
        >
          <Globe size={14} />
          <span>Markets</span>
        </Link>
        <Link 
          to="/portfolio" 
          className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg transition-all duration-300 ${
            location.pathname === '/portfolio' 
              ? 'bg-slate-850 text-slate-200 border border-slate-800' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
          }`}
        >
          <Layers size={14} />
          <span>Portfolio</span>
        </Link>
        <Link 
          to="/client" 
          className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg transition-all duration-300 ${
            location.pathname === '/client' 
              ? 'bg-slate-850 text-slate-200 border border-slate-800' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
          }`}
        >
          <FileText size={14} />
          <span>Client</span>
        </Link>
        <Link 
          to="/hub" 
          className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg transition-all duration-300 ${
            location.pathname === '/hub' 
              ? 'bg-orange-950 text-orange-400 border border-orange-500/30' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
          }`}
        >
          <FileCheck size={14} />
          <span>SaaS Hub</span>
        </Link>
        <Link 
          to="/guide" 
          className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg transition-all duration-300 ${
            location.pathname === '/guide' 
              ? 'bg-purple-950 text-purple-400 border border-purple-500/30' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
          }`}
        >
          <Sparkles size={14} />
          <span>Guide</span>
        </Link>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 py-6 mt-20 text-center text-xs text-slate-500 font-header uppercase tracking-wider">
      <div className="flex justify-center space-x-6 mb-4 text-[10px] text-slate-400">
        <Link to="/faq" className="hover:text-cyan-400">FAQ</Link>
        <span>•</span>
        <Link to="/insights" className="hover:text-cyan-400">Insights</Link>
      </div>
      <p>Copyright © 2026 Pond & Company / 3000Studios. Confidential Project Engineering Spec Docs.</p>
    </footer>
  )
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col pt-20">
        <Navbar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
            <Route path="/guide" element={<DomainGuide />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
