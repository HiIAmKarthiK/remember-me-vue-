<template>
  <teleport to="body">
    <div class="backdrop" @click="$emit('close')"></div>
    <dialog open>
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <p><slot></slot></p>
      <footer>
        <slot name="actions">
          <base-button mode="purple" @click="$emit('close')">Okay</base-button>
        </slot>
      </footer>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  emits: ['close'],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 5;
}

dialog {
  position: fixed;
  top: 20vh;
  width: 60%;
  max-width: 50rem;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.8);
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  z-index: 10;
}

header {
  background-color: #3a0061;
  color: white;
  padding: 1.2rem;
  border-radius: 12px 12px 0 0;
}

header h2 {
  margin: 0;
}

dialog p {
  padding: 1rem;
  font-size: 1.2rem;
}

footer {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
}
</style>
