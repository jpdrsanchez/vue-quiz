<script setup lang="ts">
import { computed, type StyleValue } from 'vue'
interface QuizProgressProps {
  steps: number
  currentStep: number
}

const props = defineProps<QuizProgressProps>()
const progressStyle = computed<StyleValue>(() => ({
  transform: `translateX(${(100 / props.steps) * props.currentStep}%)`
}))
</script>

<template>
  <div class="wrapper">
    <div role="progressbar" class="wrapper__progressbar">
      <div class="wrapper__progressbar__indicator" :style="progressStyle" />
    </div>
    <p class="wrapper__pagination">
      Página {{ props.currentStep }} de {{ props.steps }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: relative;

  &__progressbar {
    width: 100%;
    background: var(--primary);
    height: 0.5rem;
    border-radius: 0.375rem;
    position: relative;
    overflow: hidden;

    &__indicator {
      background: var(--quinary);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateX(100%);
      transition: all 0.3s;
    }
  }

  &__pagination {
    color: var(--senary);
    padding-top: 0.5rem;
    font-size: 0.75rem;
  }
}
</style>
