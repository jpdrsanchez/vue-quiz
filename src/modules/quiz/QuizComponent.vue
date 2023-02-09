<script setup lang="ts">
import QuizProgress from './components/QuizProgress.vue'
</script>

<template>
  <div class="quiz">
    <h1 class="quiz__title">Questionário</h1>
    <QuizProgress :current-step="1" :steps="5" />
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
}
</style>
