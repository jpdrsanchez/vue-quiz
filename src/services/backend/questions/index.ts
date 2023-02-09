import { backend } from '@/services'
import type { DtoQuestion } from './dtoQuestion'

export class BackendQuestionsService {
  static async getSingleQuiz(id: number) {
    const response = await backend.get<DtoQuestion[]>(`/questions/${id}`)
    return response.data
  }
}
