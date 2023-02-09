<script setup lang="ts">
import type { DtoQuestion } from '@/services/backend/questions/dtoQuestion'

interface QuizQuestionProps {
  data: DtoQuestion
  currentStep: number
}

const props = defineProps<QuizQuestionProps>()
</script>
<template>
  <h2>Pergunta {{ props.currentStep }}</h2>
</template>
