enum QuestionType {
  MULTIPLE = 'MULTIPLE',
  BOOLEAN = 'BOOLEAN'
}

enum QuestionType {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD'
}

export interface DtoQuestion {
  category: string
  type: QuestionType
  difficulty: QuestionType
  question: string
  correctAnswer: string
  incorrectAnswers: string[]
}
