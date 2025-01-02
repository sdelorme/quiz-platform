export type Question = {
  id: number
  question: string
  options?: string[] // For multiple-choice questions
  type: 'multiple-choice' | 'short-text'
  answer: string // Correct answer for validation
}
