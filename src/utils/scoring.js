export function calculateScore(answers, questions, marks = 1, negativeMarks = 0.25) {
  let correct = 0; let wrong = 0; let skipped = 0
  questions.forEach((question, index) => { const answer = answers[index]; if (answer === undefined || answer === null) skipped += 1; else if (answer === question.answer) correct += 1; else wrong += 1 })
  return { correct, wrong, skipped, score: correct * marks - wrong * negativeMarks, accuracy: questions.length ? Math.round((correct / questions.length) * 100) : 0 }
}
