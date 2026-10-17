/**
 * Normalize and check if user answer matches any of the correct answers
 */
export function checkAnswer(userAnswer: string, correctAnswers: string[]): boolean {
  const normalized = userAnswer.trim().toLowerCase()
  return correctAnswers.some(answer => answer.toLowerCase() === normalized)
}

/**
 * Calculate quiz score
 */
export function calculateScore(
  answers: Record<number, string>,
  questions: Array<{ id: number; correctAnswers: string[] }>
): { score: number; total: number; percentage: number } {
  let correct = 0
  const total = questions.length

  questions.forEach(question => {
    const userAnswer = answers[question.id] || ''
    if (checkAnswer(userAnswer, question.correctAnswers)) {
      correct++
    }
  })

  return {
    score: correct,
    total,
    percentage: Math.round((correct / total) * 100),
  }
}
