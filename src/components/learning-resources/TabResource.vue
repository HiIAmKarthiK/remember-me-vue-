<template>
  <card>
    <base-button
      @click="selectComponent('resource-container')"
      :mode="isResourceConatainer"
      >Active Resources</base-button
    >
    <base-button @click="selectComponent('add-resource')" :mode="isAddResource"
      >Add Resource</base-button
    >
  </card>
  <keep-alive>
    <component :is="selectedComponent"></component>
  </keep-alive>
</template>

<script>
import ResourceContainer from './ResourceContainer.vue';
import AddResource from './AddResource.vue';
export default {
  components: { ResourceContainer, AddResource },
  data() {
    return {
      selectedComponent: 'resource-container',
      resources: [
        {
          id: 'official-guide',
          title: 'Official guide Vue.js',
          description: 'Official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'search google for everything',
          link: 'https://google.com',
        },
      ],
    };
  },
  methods: {
    selectComponent(cmp) {
      this.selectedComponent = cmp;
    },
    addResource(title, desc, link) {
      const toBeAddedData = {
        id: new Date().toISOString(),
        title,
        description: desc,
        link,
      };

      this.resources.unshift(toBeAddedData);
      this.selectedComponent = 'resource-container';
    },
    deleteItem(id) {
      const resIndex = this.resources.findIndex((res) => res.id == id);
      this.resources.splice(resIndex, 1);
    },
  },
  provide() {
    return {
      resources: this.resources,
      addResource: this.addResource,
      deleteItem: this.deleteItem,
    };
  },
  computed: {
    isResourceConatainer() {
      return this.selectedComponent == 'resource-container' ? null : 'flat';
    },
    isAddResource() {
      return this.selectedComponent == 'add-resource' ? null : 'flat';
    },
  },
};
</script>
