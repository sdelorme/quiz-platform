import { Question } from './types'

export const mockQuiz: Question[] = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
    type: 'multiple-choice',
    answer: 'Paris',
  },
  {
    id: 2,
    question: 'Name the largest ocean on Earth.',
    type: 'short-text',
    answer: 'Pacific Ocean',
  },
  {
    id: 3,
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    type: 'multiple-choice',
    answer: 'Mars',
  },
  {
    id: 4,
    question: 'What is the smallest prime number?',
    type: 'short-text',
    answer: '2',
  },
  {
    id: 5,
    question: 'Which country invented pizza?',
    options: ['Italy', 'Greece', 'United States', 'China'],
    type: 'multiple-choice',
    answer: 'Italy',
  },
  {
    id: 6,
    question: 'What is the square root of 144?',
    type: 'short-text',
    answer: '12',
  },
  {
    id: 7,
    question: 'Which gas do plants primarily absorb during photosynthesis?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    type: 'multiple-choice',
    answer: 'Carbon Dioxide',
  },
  {
    id: 8,
    question: 'What is the chemical symbol for water?',
    type: 'short-text',
    answer: 'H2O',
  },
  {
    id: 9,
    question: 'Who wrote "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'J.K. Rowling', 'Mark Twain', 'Jane Austen'],
    type: 'multiple-choice',
    answer: 'Harper Lee',
  },
  {
    id: 10,
    question: 'How many continents are there on Earth?',
    type: 'short-text',
    answer: '7',
  },
]
