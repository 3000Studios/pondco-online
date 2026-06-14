import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Index from './pages/Index'
import F70Dashboard from './pages/F70-Dashboard'
import TRMDashboard from './pages/TRM-Dashboard'
import { Plane, Building2, Home } from 'lucide-react'

function Navbar() {
  const location = useLocation()
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-800 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">
          P
        </div>
        <span className="font-semibold text-lg tracking-wider text-white font-sans">
          POND<span className="text-cyan-400 font-light">CO</span> <span className="text-[10px] uppercase tracking-[0.2em] bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded border border-cyan-900/50">Online</span>
        </span>
      </div>
      
      <div className="flex space-x-1">
        <Link 
          to="/" 
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            location.pathname === '/' 
              ? 'bg-slate-800 text-white shadow-inner border border-slate-700/50' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
          }`}
        >
          <Home size={16} />
          <span>Agency Hub</span>
        </Link>
        <Link 
          to="/f70" 
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            location.pathname === '/f70' 
              ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/30' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
          }`}
        >
          <Plane size={16} />
          <span>F70 (French Valley)</span>
        </Link>
        <Link 
          to="/trm" 
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            location.pathname === '/trm' 
              ? 'bg-blue-950/80 text-blue-400 border border-blue-500/30' 
              : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
          }`}
        >
          <Building2 size={16} />
          <span>TRM (Jacqueline Cochran)</span>
        </Link>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 py-6 mt-20 text-center text-xs text-slate-500">
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
            <Route path="/f70" element={<F70Dashboard />} />
            <Route path="/trm" element={<TRMDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
