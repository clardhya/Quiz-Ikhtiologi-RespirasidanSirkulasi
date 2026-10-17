'use client'

import { ChevronLeft, ChevronRight, SendHorizontal } from 'lucide-react'

interface QuizControlsProps {
  currentQuestion: number
  totalQuestions: number
  onPrevious: () => void
  onNext: () => void
  onSubmit: () => void
  isLastQuestion: boolean
}

export function QuizControls({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
  onSubmit,
  isLastQuestion,
}: QuizControlsProps) {
  return (
    <div className="flex gap-4 flex-wrap">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={currentQuestion === 1}
        className={`
          flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200
          ${currentQuestion === 1
            ? 'bg-slate-700 text-slate-400 cursor-not-allowed opacity-50'
            : 'bg-slate-700 text-cyan-300 hover:bg-slate-600 active:scale-95'
          }
        `}
      >
        <ChevronLeft size={20} />
        Previous
      </button>

      {/* Question Counter */}
      <div className="flex items-center px-6 py-3 bg-slate-900 rounded-lg border border-slate-700">
        <span className="text-cyan-300 font-semibold">
          {currentQuestion} / {totalQuestions}
        </span>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={isLastQuestion}
        className={`
          flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200
          ${isLastQuestion
            ? 'bg-slate-700 text-slate-400 cursor-not-allowed opacity-50'
            : 'bg-slate-700 text-cyan-300 hover:bg-slate-600 active:scale-95'
          }
        `}
      >
        Next
        <ChevronRight size={20} />
      </button>

      {/* Submit Button - Only visible on last question */}
      {isLastQuestion && (
        <button
          onClick={onSubmit}
          className={`
            flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-200 ml-auto
            bg-gradient-to-r from-cyan-500 to-cyan-600 text-slate-900
            hover:from-cyan-400 hover:to-cyan-500 active:scale-95
            shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30
          `}
        >
          <SendHorizontal size={20} />
          Submit Quiz
        </button>
      )}
    </div>
  )
}
