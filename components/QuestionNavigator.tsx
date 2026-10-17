'use client'

import { useMemo } from 'react'

interface QuestionNavigatorProps {
  totalQuestions: number
  currentQuestion: number
  answeredQuestions: Set<number>
  onNavigate: (questionNumber: number) => void
}

export function QuestionNavigator({
  totalQuestions,
  currentQuestion,
  answeredQuestions,
  onNavigate,
}: QuestionNavigatorProps) {
  const gridSize = useMemo(() => {
    // Calculate responsive grid size
    if (typeof window !== 'undefined') {
      const width = window.innerWidth
      if (width < 640) return 3
      if (width < 1024) return 4
      return 6
    }
    return 6
  }, [])

  return (
    <div className="flex flex-col gap-4 p-6 bg-slate-800 rounded-lg border border-cyan-900/30 h-fit sticky top-6">
      <h2 className="text-lg font-semibold text-cyan-300 flex items-center gap-2">
        <span className="w-2 h-2 bg-cyan-400 rounded-full" />
        Question Navigator
      </h2>

      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}>
        {Array.from({ length: totalQuestions }, (_, i) => i + 1).map(questionNum => {
          const isAnswered = answeredQuestions.has(questionNum)
          const isCurrent = currentQuestion === questionNum

          return (
            <button
              key={questionNum}
              onClick={() => onNavigate(questionNum)}
              className={`
                py-2 px-2 rounded-lg font-semibold text-sm transition-all duration-200
                ${isCurrent
                  ? 'bg-cyan-500 text-slate-900 ring-2 ring-cyan-300 scale-105'
                  : isAnswered
                  ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600'
                }
              `}
              title={`Question ${questionNum}${isAnswered ? ' (Answered)' : ' (Unanswered)'}`}
            >
              {questionNum}
            </button>
          )
        })}
      </div>

      <div className="pt-4 border-t border-slate-700">
        <div className="text-xs text-slate-400 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-emerald-600 rounded" />
            <span>Answered ({answeredQuestions.size})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-slate-700 border border-slate-600 rounded" />
            <span>Unanswered ({totalQuestions - answeredQuestions.size})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-cyan-500 rounded" />
            <span>Current</span>
          </div>
        </div>
      </div>
    </div>
  )
}
