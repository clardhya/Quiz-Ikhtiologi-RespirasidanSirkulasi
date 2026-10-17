'use client'

import { QuizQuestion } from '@/lib/quizData'

interface QuestionCardProps {
  question: QuizQuestion
  answer: string
  onAnswerChange: (answer: string) => void
}

export function QuestionCard({
  question,
  answer,
  onAnswerChange,
}: QuestionCardProps) {
  return (
    <div className="bg-slate-800 rounded-lg border border-cyan-900/30 p-8">
      {/* Question Number and Title */}
      <div className="mb-8">
        <div className="text-cyan-400 text-sm font-semibold mb-2">
          Question {question.id} of 18
        </div>
        <h2 className="text-2xl font-bold text-white leading-tight">
          {question.question}
        </h2>
      </div>

      {/* Answer Input Section */}
      <div className="space-y-4">
        <label className="block text-sm font-semibold text-cyan-300">
          Your Answer (Uraian Singkat)
        </label>
        <textarea
          value={answer}
          onChange={(e) => onAnswerChange(e.target.value)}
          placeholder="Type your answer here..."
          className={`
            w-full p-4 rounded-lg bg-slate-900 border-2 text-white placeholder-slate-500
            focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent
            transition-all duration-200 resize-none h-32
            ${answer.trim() ? 'border-cyan-500' : 'border-slate-700'}
          `}
        />
        <div className="text-xs text-slate-400">
          {answer.length} characters
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-8 p-4 bg-slate-900/50 border border-slate-700 rounded-lg">
        <p className="text-sm text-slate-300">
          💡 <span className="text-cyan-300 font-semibold">Tip:</span> Answer matching is case-insensitive and whitespace is ignored.
        </p>
      </div>
    </div>
  )
}
