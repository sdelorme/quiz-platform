'use client'

import { useEffect, useState } from 'react'
import { mockQuiz } from './mock-data'
import useLocalStorage from '@/lib/hooks/useLocalStorage'

export default function QuizPage() {
  const [isHydrated, setIsHydrated] = useState(false)

  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useLocalStorage<number>('currentQuestionIndex', 0)
  const [answers, setAnswers] = useLocalStorage<{ [id: number]: string }>(
    'quizAnswers',
    {}
  )
  const [isQuizComplete, setIsQuizComplete] = useLocalStorage<boolean>(
    'isQuizComplete',
    false
  )

  useEffect(() => {
    setIsHydrated(true) // Set to true after hydration
  }, [])

  if (!isHydrated) {
    return <div>Loading...</div> // Render placeholder during hydration
  }

  const currentQuestion = mockQuiz[currentQuestionIndex]

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: answer }))
  }

  const handleNext = () => {
    if (currentQuestionIndex < mockQuiz.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
    } else {
      setIsQuizComplete(true)
    }
  }

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1)
    }
  }

  const handleRestart = () => {
    setAnswers({})
    setCurrentQuestionIndex(0)
    setIsQuizComplete(false)
  }

  return (
    <div>
      <h1>Quiz</h1>

      {isQuizComplete ? (
        <div>
          <h2>Quiz Complete!</h2>
          <p>Your Results:</p>
          <ul>
            {mockQuiz.map((question) => (
              <li key={question.id}>
                <strong>{question.question}</strong> <br />
                Your Answer: {answers[question.id] || ''} <br />
                Correct Answer: {question.answer}
              </li>
            ))}
          </ul>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <p>
            Question {currentQuestionIndex + 1}/{mockQuiz.length}
          </p>
          <p>{currentQuestion.question}</p>
          {currentQuestion.type === 'multiple-choice' && (
            <ul>
              {currentQuestion.options!.map((option) => (
                <li key={option}>
                  <button onClick={() => handleAnswer(option)}>{option}</button>
                </li>
              ))}
            </ul>
          )}
          {currentQuestion.type === 'short-text' && (
            <input
              type="text"
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => handleAnswer(e.target.value)}
              placeholder="Type your answer here"
            />
          )}
          <div>
            {currentQuestionIndex > 0 && (
              <button onClick={handleBack}>Back</button>
            )}
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </div>
  )
}
