import { createApp } from 'vue';
import App from './App.vue';
import Card from './UI/Card.vue';
import BaseButton from './UI/BaseButton.vue';
import ErrorModal from './components/layouts/ErrorModal.vue';

const app = createApp(App);

app.component('card', Card);
app.component('base-button', BaseButton);
app.component('error-modal', ErrorModal);

app.mount('#app');
