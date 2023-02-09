<script setup lang="ts">
import { computed, ref } from 'vue'
import type { DtoQuestion } from '@/services/backend/questions/dtoQuestion'

interface QuizQuestionProps {
  data: DtoQuestion
  currentStep: number
}

const props = defineProps<QuizQuestionProps>()
const question = ref<DtoQuestion>(props.data)
const currentStep = ref<number>(props.currentStep)
const questions = computed<string[]>(() => [
  question.value.correctAnswer,
  ...question.value.incorrectAnswers
])
const picked = ref<string>()
</script>

<template>
  <div class="question">
    <h2 class="question__title">Pergunta {{ currentStep }}</h2>
    <p class="question__description">{{ question.question }}</p>
    <div class="question__alternatives">
      <div
        class="question__alternatives__item"
        v-for="question of questions"
        :key="question.trim()"
      >
        <input
          type="radio"
          v-model="picked"
          :id="question.trim()"
          :value="question"
          @change="$emit('selectAnswer', currentStep, question)"
        />
        <label :for="question.trim()">
          <div>
            <div />
          </div>
          {{ question }}
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.question {
  position: relative;

  &__title {
    color: var(--primary);
    font-weight: 600;
    padding-bottom: 0.875rem;
  }

  &__description {
    font-size: 1.125rem;
    padding-bottom: 0.5rem;
  }

  &__alternatives {
    display: grid;
    gap: 0.5rem;

    &__item {
      label {
        display: flex;
        align-items: center;
      }

      input {
        display: none;

        &:checked {
          & + label {
            div > div {
              background: var(--primary);
            }
          }
        }
      }

      label > div {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 1px solid var(--primary);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        padding: 2px;

        div {
          background: transparent;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
