<template>
  <li>
    <card>
      <div class="list__content">
        <header>
          <h1>{{ title }}</h1>
          <base-button @click="deleteItem(id)" mode="flat">Delete</base-button>
        </header>
        <p>{{ description }}</p>
        <footer>
          <a :href="link">View Link</a>
        </footer>
      </div>
    </card>
  </li>
</template>

<script>
export default {
  props: ['title', 'description', 'link', 'id'],
  inject: ['deleteItem'],
};
</script>

<style scoped>
li a {
  text-decoration: none;
  color: #f78156;
  font-size: 1.2rem;
}

header h1 {
  margin: 0;
}

li header {
  display: flex;
  justify-content: space-between;
  align-items: start;
}

li a:hover {
  color: #f16330;
}
</style>
