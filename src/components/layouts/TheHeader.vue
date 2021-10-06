<template>
  <header>
    <h1>
      {{ title }}
    </h1>
  </header>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style scoped>
header {
  padding: 3.5rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center;
}
header h1 {
  color: white;
  margin: 0;
}
</style>
