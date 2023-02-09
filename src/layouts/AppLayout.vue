<template>
  <main class="main">
    <div class="main__wrapper">
      <slot />
    </div>
  </main>
</template>

<style scoped lang="scss">
.main {
  background: var(--secondary);
  display: flex;
  height: 100vh;
  overflow: auto;

  &__wrapper {
    margin: auto;
    padding: 1.5rem;
    width: 100%;
    max-width: 960px;
  }
}
</style>
