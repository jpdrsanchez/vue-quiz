<script setup lang="ts">
import QuizProgress from './components/QuizProgress.vue'
import { useQuestionsService } from './questionsService'

const { data, loading } = useQuestionsService()
</script>

<template>
  <div v-if="!!loading">Carregando...</div>
  <div class="quiz" v-if="!loading && data?.length">
    <h1 class="quiz__title">Questionário</h1>
    <QuizProgress :current-step="1" :steps="data.length" />
  </div>
  <div v-if="!loading && !data?.length">Erro ao carregar informações</div>
</template>

<style scoped lang="scss">
.quiz {
  display: grid;
  gap: 1.5rem;

  &__title {
    font-weight: 600;
    color: var(--primary);
  }
}
</style>
