import type { DtoQuestion } from '@/services/backend/questions/dtoQuestion'
import { ref, unref, type Ref } from 'vue'

export const useQuizNavigation = (data: Ref<DtoQuestion[] | undefined>) => {
  const currentQuestion = ref(1)

  const goToPrev = (event: MouseEvent) => {
    event.preventDefault()

    currentQuestion.value = Math.max(1, currentQuestion.value - 1)
  }

  const goToNext = (event: MouseEvent) => {
    event.preventDefault()

    currentQuestion.value = Math.min(
      currentQuestion.value + 1,
      unref(data)?.length || 1
    )
  }

  return {
    currentQuestion,
    goToNext,
    goToPrev
  }
}
