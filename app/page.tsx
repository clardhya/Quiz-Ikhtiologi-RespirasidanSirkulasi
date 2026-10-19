'use client'

import { useState } from 'react'
import { QUIZ_QUESTIONS } from '@/lib/quizData'
import { calculateScore } from '@/lib/utils'
import { Header } from '@/components/Header'
import { QuestionNavigator } from '@/components/QuestionNavigator'
import { QuestionCard } from '@/components/QuestionCard'
import { QuizControls } from '@/components/QuizControls'
import { ResultsPage } from '@/components/ResultsPage'

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const question = QUIZ_QUESTIONS.find(q => q.id === currentQuestion)
  const answeredQuestions = new Set(
    QUIZ_QUESTIONS
      .filter(q => answers[q.id]?.trim())
      .map(q => q.id)
  )

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value,
    }))
  }

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleSubmit = () => {
    const result = calculateScore(answers, QUIZ_QUESTIONS)
    setScore(result.score)
    setShowResults(true)
  }

  const handleRetry = () => {
    setAnswers({})
    setCurrentQuestion(1)
    setShowResults(false)
    setScore(0)
  }

  if (!question) {
    return null
  }

  if (showResults) {
    return (
      <div className="min-h-screen">
        <Header />
        <ResultsPage
          score={score}
          total={QUIZ_QUESTIONS.length}
          percentage={Math.round((score / QUIZ_QUESTIONS.length) * 100)}
          questions={QUIZ_QUESTIONS}
          answers={answers}
          onRetry={handleRetry}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Question Navigator */}
          <div className="lg:col-span-1">
            <QuestionNavigator
              totalQuestions={QUIZ_QUESTIONS.length}
              currentQuestion={currentQuestion}
              answeredQuestions={answeredQuestions}
              onNavigate={setCurrentQuestion}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Question Card */}
            <QuestionCard
              question={question}
              answer={answers[currentQuestion] || ''}
              onAnswerChange={handleAnswerChange}
            />

            {/* Controls */}
            <QuizControls
              currentQuestion={currentQuestion}
              totalQuestions={QUIZ_QUESTIONS.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
              onSubmit={handleSubmit}
              isLastQuestion={currentQuestion === QUIZ_QUESTIONS.length}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
