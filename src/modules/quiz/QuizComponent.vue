<script setup lang="ts">
import QuizProgress from './components/QuizProgress.vue'
import QuizQuestion from './components/QuizQuestion.vue'
import { useQuestionsService } from './questionsService'
import { useQuizNavigation } from './quizNavigation'
import { useQuizCorrection } from './quizCorrection'

const { data, loading } = useQuestionsService()
const { currentQuestion, goToNext, goToPrev } = useQuizNavigation(data)
const { questionAnswers, selectAnswer, complete, isComplete, pontuation } =
  useQuizCorrection()
</script>

<template>
  <div v-if="!!loading">Carregando...</div>
  <div class="quiz" v-if="!isComplete && !loading && data?.length">
    <h1 class="quiz__title">Questionário</h1>
    <QuizProgress :current-step="currentQuestion" :steps="data.length" />
    <template v-for="(question, index) in data" :key="question.question.trim()">
      <KeepAlive>
        <QuizQuestion
          v-if="currentQuestion === index + 1"
          :current-step="index + 1"
          :data="question"
          @select-answer="selectAnswer"
        />
      </KeepAlive>
    </template>
    <nav aria-label="Navegar pelo quiz" class="quiz__nav">
      <div class="quiz__wrapper">
        <button
          v-if="currentQuestion > 1"
          @click="goToPrev"
          type="button"
          class="quiz__button"
        >
          Anterior
        </button>
        <button
          v-if="currentQuestion < data.length"
          @click="goToNext"
          type="button"
          class="quiz__button"
        >
          Próximo
        </button>
      </div>
      <button
        v-if="questionAnswers.length === data.length"
        type="button"
        @click="() => complete(data)"
        class="quiz__button"
      >
        Completar
      </button>
    </nav>
  </div>
  <div v-if="!loading && !data?.length">Erro ao carregar informações</div>
  <div v-if="isComplete" class="quiz__complete">
    <h2>Seu resultado foi</h2>
    <p>{{ pontuation.toFixed(0) }}%</p>
  </div>
</template>

<style scoped lang="scss">
.quiz {
  display: grid;
  gap: 1.5rem;

  &__title {
    font-weight: 600;
    color: var(--primary);
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__button {
    display: block;
    background: var(--primary);
    color: #fff;
    text-align: center;
    width: fit-content;
    border: none;
    outline: 0;
    border-radius: 0.25rem;
    cursor: pointer;
    padding: 0.75rem 1.5rem;
  }

  &__complete {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    h2 {
      font-size: 1.25rem;
    }

    p {
      font-size: 4rem;
      font-weight: 700;
    }
  }
}
</style>
