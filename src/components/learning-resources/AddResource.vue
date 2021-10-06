<template>
  <error-modal v-if="isInputInvalid" title="Invalid Input" @close="acceptError">
    <template #default>
      <p>Unfortunately, atleast one input is invalid.</p>
      <p>Please make sure all the input fields are not empty.</p>
    </template>
    <template #actions>
      <base-button mode="purple" @click="acceptError">Okay</base-button>
    </template>
  </error-modal>
  <card>
    <div class="form">
      <div class="input-group">
        <label for="">Title</label>
        <input type="text" ref="title" />
      </div>
      <div class="input-group">
        <label for="">Description</label>
        <textarea rows="3" ref="desc"></textarea>
      </div>
      <div class="input-group">
        <label for="">Link</label>
        <input type="text" ref="link" />
      </div>
      <div class="button-group">
        <base-button @click="submitData">Submit</base-button>
      </div>
    </div>
  </card>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      isInputInvalid: false,
    };
  },
  methods: {
    submitData() {
      const title = this.$refs.title.value;
      const desc = this.$refs.desc.value;
      const link = this.$refs.link.value;

      if (title.trim() == '' || desc.trim() == '' || link.trim() == '') {
        this.isInputInvalid = true;
        return;
      }

      this.addResource(title, desc, link);
    },
    acceptError() {
      this.isInputInvalid = false;
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  font-size: 1.2rem;
}

.input-group input,
textarea {
  padding: 0.4rem;
  border: 1px solid #ccc;
  font-family: inherit;
  outline: none;
}
</style>
