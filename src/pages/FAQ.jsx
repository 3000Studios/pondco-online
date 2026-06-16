import React, { useState } from 'react'
import { HelpCircle, ChevronDown, ChevronUp, Link as LinkIcon, ShieldCheck } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [selectedTopic, setSelectedTopic] = useState(null)

  const faqs = [
    { 
      q: 'What does Pondco.online provide?', 
      a: 'Pondco.online functions as the digital operating and presentation layer for Pond & Company\'s structural architecture, airfield design, and SaaS-based project controls. It unifies multidisciplinary logistics, BIM modeling coordination, and client-facing progress telemetry.',
      detail: {
        title: 'Core Deliverables Scope',
        content: 'Our core services are segmented into Aviation Planning, Structural Layout BIM coordination, and real-time scheduling telemetry. The platform enables multi-tier project tracking and complies strictly with FAA-STD-008 flight safety guidelines.',
        suppliers: ['Pond Integrated A/E Dev', 'KSA Engineering Associate Group'],
        materials: ['Revit Cloud Integration', 'RAG Telemetry Server DB']
      }
    },
    { 
      q: 'How does the Client Portal progress tracker work?', 
      a: 'Clients log in with a unique Project Access Key provided in their Service Agreement, granting secure, high-level views of milestone timelines and deliverables without exposing internal hours or risk registers.',
      detail: {
        title: 'Client Progress Security Gates',
        content: 'Access is controlled using advanced client hashes and role-clearances. It visualizes the current milestones without showing internal sprint blockers or subconsultant risk matrices.',
        suppliers: ['Riverside County Aviation Board', 'FAA Regional Inspectors'],
        materials: ['Secure Key Encryption Hashing', 'Cloudflare Pages CDN Cache']
      }
    },
    { 
      q: 'What are the two airport control tower contracts?', 
      a: 'Pond was awarded the architectural and engineering design for towers at French Valley Airport (F70) in Murrieta, CA, and Jacqueline Cochran Regional Airport (TRM) in Thermal, CA, under the FAA Federal Contract Tower Program.',
      detail: {
        title: 'ATCT California Contracts',
        content: 'Design tasks include line-of-sight studies, concrete foundation framing designs, structural seismic compliance (Zone 4), and FAA communications room outfitting schematics.',
        suppliers: ['KSA Civil Site Team', 'Coachella Valley Contractors'],
        materials: ['FAA-STD-008 Compliant Cab Glass', 'High-Strength Galvanized Steel Trusses']
      }
    }
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-12 max-w-5xl mx-auto py-6 font-header animate-slide-in">
      
      {/* Hero with Autoplay video background */}
      <div className="relative rounded-3xl overflow-hidden glass-panel p-8 min-h-[220px] flex items-center shadow-2xl border border-slate-800/80">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-[0.25]"
        >
          <source src="https://raw.githubusercontent.com/noorkhokhar99/yolo-object-detect/main/airport.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-0" />
        
        <div className="z-10 space-y-2">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block animate-pulse">Operational FAQ Portal</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-wider text-raised-hd">Frequently Asked Questions</h1>
          <p className="text-xs text-slate-300 font-serif max-w-md">Public information, compliance standards, and portal integration details.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: FAQs Accordion (Col 1-8) */}
        <div className="lg:col-span-8 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div 
                key={idx} 
                className={`glass-panel rounded-2xl p-5 border transition-all duration-300 shadow-md ${
                  isOpen ? 'border-blue-500/40 bg-slate-900/60' : 'border-slate-800/60 hover:border-blue-500/20'
                }`}
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center text-left text-sm font-bold text-white uppercase tracking-wide focus:outline-none"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle size={16} className="text-blue-400 flex-shrink-0" />
                    {faq.q}
                  </span>
                  {isOpen ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
                </button>
                
                {isOpen && (
                  <div className="mt-3 pl-6 space-y-3 animate-slide-in">
                    <p className="text-xs text-slate-300 font-serif leading-relaxed">{faq.a}</p>
                    <button 
                      onClick={() => setSelectedTopic(faq)}
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold text-blue-400 uppercase tracking-wider hover:text-blue-300 transition-colors"
                    >
                      <LinkIcon size={10} />
                      <span>Explore Topic Specifications &amp; Suppliers</span>
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Right Side: Compliance video loop & quick card (Col 9-12) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">FAA Siting Compliance</h3>
            
            {/* Auto play mini loop */}
            <div className="w-full h-36 rounded-xl overflow-hidden bg-slate-950 border border-slate-900 relative">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover opacity-65"
              >
                <source src="https://raw.githubusercontent.com/maitrix-org/easyweb/master/easyweb-flight.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply" />
            </div>

            <div className="space-y-2 text-xs font-serif text-slate-400 leading-relaxed">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                <ShieldCheck size={12} />
                <span>Verified System Standard</span>
              </div>
              <p>All design procedures conform strictly to FAA Order 6480.7D rules for airport traffic control tower elevations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {selectedTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md px-4">
          <div className="glass-panel rounded-3xl p-6 max-w-md w-full border border-slate-800 space-y-6 shadow-2xl relative text-left animate-slide-in">
            <div>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest font-mono block mb-1">SPECIFICATION MATRIX</span>
              <h3 className="text-lg font-black text-white uppercase tracking-wider">{selectedTopic.detail.title}</h3>
            </div>
            
            <p className="text-xs text-slate-300 font-serif leading-relaxed">{selectedTopic.detail.content}</p>
            
            <div className="space-y-3 border-t border-slate-900 pt-4">
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Key Partners / Suppliers</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTopic.detail.suppliers.map((s, idx) => (
                    <span key={idx} className="text-[9px] font-bold text-white bg-blue-950 px-2 py-0.5 rounded border border-blue-900/40 uppercase">{s}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Core Tech &amp; Materials</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTopic.detail.materials.map((m, idx) => (
                    <span key={idx} className="text-[9px] font-bold text-white bg-slate-950 px-2 py-0.5 rounded border border-slate-900 uppercase">{m}</span>
                  ))}
                </div>
              </div>
            </div>

            <button 
              onClick={() => setSelectedTopic(null)}
              className="w-full button-3d-cyan text-white font-bold py-2.5 btn-hexagon text-xs uppercase tracking-wider block text-center"
            >
              Close Detail Panel
            </button>
          </div>
        </div>
      )}

    </div>
  )
}
