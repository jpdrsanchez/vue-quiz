import type { DtoQuestion } from '@/services/backend/questions/dtoQuestion'
import { ref } from 'vue'

interface QuestionAnswer {
  id: number
  alternative: string
}

export const useQuizCorrection = () => {
  const questionAnswers = ref<QuestionAnswer[]>([])
  const isComplete = ref<boolean>(false)
  const pontuation = ref<number>(0)

  const selectAnswer = (id: number, alternative: string) => {
    questionAnswers.value = [
      ...questionAnswers.value.filter(answer => answer.id !== id),
      { id, alternative }
    ]
  }

  const complete = (data: DtoQuestion[] | undefined) => {
    isComplete.value = true
    console.log(data)
    console.log(questionAnswers)
    const correctAnswers = questionAnswers.value.filter(answer => {
      return (
        answer.alternative === data?.[Math.max(0, answer.id - 1)]?.correctAnswer
      )
    })
    pontuation.value = (100 * correctAnswers.length) / (data?.length || 1)
  }

  return {
    questionAnswers,
    selectAnswer,
    isComplete,
    complete,
    pontuation
  }
}
