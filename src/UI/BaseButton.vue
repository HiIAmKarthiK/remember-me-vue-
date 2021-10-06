<template>
  <button :class="mode"><slot></slot></button>
</template>

<script>
export default {
  props: ['mode'],
};
</script>

<style scoped>
button {
  border: none;
  padding: 0.9rem;
  background-color: #640032;
  color: white;
  font-family: inherit;
  font-size: 1.1rem;
  cursor: pointer;
}

.flat {
  color: #3a0061;
  background-color: transparent;
}

.purple {
  background-color: #3a0061;
}

.flat:hover {
  background-color: #e7e7e7;
}
</style>
