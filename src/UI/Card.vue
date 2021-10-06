<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  width: 60%;
  max-width: 50rem;
  margin: 3rem auto;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.5);
  padding: 2.3rem;
  border-radius: 12px;
}
</style>
