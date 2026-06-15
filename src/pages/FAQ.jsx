import React from 'react'
import { HelpCircle } from 'lucide-react'

export default function FAQ() {
  const faqs = [
    { q: 'What does Pondco.online provide?', a: 'Pondco.online functions as the digital operating and presentation layer for Pond & Company\'s structural architecture, airfield design, and SaaS-based project controls.' },
    { q: 'How does the Client Portal progress tracker work?', a: 'Clients log in with a unique Project Access Key provided in their Service Agreement, granting secure, high-level views of milestone timelines and deliverables without exposing internal hours or risk registers.' },
    { q: 'What are the two airport control tower contracts?', a: 'Pond was awarded the architectural and engineering design for towers at French Valley Airport (F70) in Murrieta, CA, and Jacqueline Cochran Regional Airport (TRM) in Thermal, CA, under the FAA Federal Contract Tower Program.' }
  ]

  return (
    <div className="space-y-12 max-w-4xl mx-auto py-6 font-header">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">Frequently Asked Questions</h1>
        <p className="text-sm text-slate-400 font-serif">Public information and portal integration details.</p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="glass-panel rounded-2xl p-6 space-y-2">
            <h3 className="text-base font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <HelpCircle size={16} className="text-cyan-400" />
              {faq.q}
            </h3>
            <p className="text-xs text-slate-400 font-serif leading-relaxed pl-6">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
