'use client'

import { Fish } from 'lucide-react'

export function Header() {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-cyan-900/30 px-6 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Fish className="text-cyan-400" size={32} />
          <h1 className="text-3xl font-bold text-white">Ichthyology Quiz</h1>
        </div>
        <p className="text-slate-300 text-sm">
          University Pre-Test: Circulation and Respiration
        </p>
      </div>
    </div>
  )
}
