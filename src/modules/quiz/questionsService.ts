import type { DtoQuestion } from '@/services/backend/questions/dtoQuestion'
import { BackendQuestionsService } from '@/services/backend/questions/index'
import { ref, watchEffect } from 'vue'

export const useQuestionsService = () => {
  const loading = ref<boolean>()
  const data = ref<DtoQuestion[]>()

  const getQuiz = async (id: number) => {
    try {
      loading.value = true
      const response = await BackendQuestionsService.getSingleQuiz(id)
      data.value = response
    } catch {
      data.value = undefined
    } finally {
      loading.value = false
    }
  }

  watchEffect(async () => {
    await getQuiz(1)
  })

  return {
    getQuiz,
    loading,
    data
  }
}
