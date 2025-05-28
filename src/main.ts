import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import HComponent from '@/components';

const app = createApp(App);

app.use(HComponent);
app.use(createPinia());
app.use(router);

app.mount('#app');
