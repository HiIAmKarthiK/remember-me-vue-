<template>
  <the-header title="RememberMe"></the-header>
  <tab-resource></tab-resource>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TabResource from './components/learning-resources/TabResource.vue';

export default {
  components: { TheHeader, TabResource },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

* {
  box-sizing: border-box;
}
</style>
