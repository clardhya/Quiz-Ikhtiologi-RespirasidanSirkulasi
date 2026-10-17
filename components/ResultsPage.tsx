'use client'

import { QuizQuestion } from '@/lib/quizData'
import { checkAnswer } from '@/lib/utils'
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react'

interface ResultsPageProps {
  score: number
  total: number
  percentage: number
  questions: QuizQuestion[]
  answers: Record<number, string>
  onRetry: () => void
}

export function ResultsPage({
  score,
  total,
  percentage,
  questions,
  answers,
  onRetry,
}: ResultsPageProps) {
  const getScoreColor = () => {
    if (percentage >= 80) return 'from-emerald-500 to-emerald-600'
    if (percentage >= 60) return 'from-yellow-500 to-yellow-600'
    return 'from-red-500 to-red-600'
  }

  const getScoreFeedback = () => {
    if (percentage >= 90) return 'Excellent! You have mastered this topic.'
    if (percentage >= 80) return 'Very Good! You understand most concepts.'
    if (percentage >= 70) return 'Good! You have a solid understanding.'
    if (percentage >= 60) return 'Fair. Review the incorrect answers.'
    return 'Needs Improvement. Study the material again.'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-8 px-4">
      {/* Score Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className={`bg-gradient-to-r ${getScoreColor()} rounded-lg p-8 text-center text-white mb-8`}>
          <h1 className="text-4xl font-bold mb-4">Quiz Complete! 🎉</h1>
          <div className="text-6xl font-bold mb-4">{percentage}%</div>
          <div className="text-2xl mb-4">
            You scored {score} out of {total}
          </div>
          <p className="text-lg opacity-90">{getScoreFeedback()}</p>
        </div>

        {/* Retry Button */}
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-8 py-3 mx-auto rounded-lg font-semibold bg-cyan-500 text-slate-900 hover:bg-cyan-400 active:scale-95 transition-all duration-200 shadow-lg shadow-cyan-500/20"
        >
          <RotateCcw size={20} />
          Retake Quiz
        </button>
      </div>

      {/* Review Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Review Your Answers</h2>

        <div className="space-y-6">
          {questions.map((question) => {
            const userAnswer = answers[question.id] || ''
            const isCorrect = checkAnswer(userAnswer, question.correctAnswers)

            return (
              <div
                key={question.id}
                className={`
                  rounded-lg border-2 p-6 transition-all duration-200
                  ${isCorrect
                    ? 'bg-slate-800 border-emerald-500/50'
                    : 'bg-slate-800 border-red-500/50'
                  }
                `}
              >
                {/* Question Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 mt-1">
                    {isCorrect ? (
                      <CheckCircle className="text-emerald-500" size={24} />
                    ) : (
                      <XCircle className="text-red-500" size={24} />
                    )}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        isCorrect
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : 'bg-red-500/20 text-red-300'
                      }`}>
                        Question {question.id}
                      </span>
                      <span className={`text-sm font-semibold ${
                        isCorrect ? 'text-emerald-400' : 'text-red-400'
                      }`}>
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {question.question}
                    </h3>
                  </div>
                </div>

                {/* Answers */}
                <div className="space-y-4 ml-10">
                  <div>
                    <label className="text-sm text-slate-400 font-semibold">Your Answer:</label>
                    <p className={`mt-1 p-3 rounded bg-slate-900/50 text-white ${
                      userAnswer.trim() === '' ? 'text-slate-500 italic' : ''
                    }`}>
                      {userAnswer.trim() || '(No answer provided)'}
                    </p>
                  </div>

                  {!isCorrect && (
                    <div>
                      <label className="text-sm text-slate-400 font-semibold">Correct Answer:</label>
                      <p className="mt-1 p-3 rounded bg-emerald-900/30 border border-emerald-500/30 text-emerald-200">
                        {question.correctAnswers[0]}
                        {question.correctAnswers.length > 1 && (
                          <span className="text-sm text-emerald-300/70">
                            {' '}(or: {question.correctAnswers.slice(1).join(', ')})
                          </span>
                        )}
                      </p>
                    </div>
                  )}

                  {/* Pembahasan */}
                  <div>
                    <label className="text-sm text-slate-400 font-semibold">Pembahasan (Explanation):</label>
                    <p className="mt-1 p-3 rounded bg-cyan-900/20 border border-cyan-500/30 text-cyan-100">
                      {question.pembahasan}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
