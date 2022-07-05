import { createApp } from 'vue';
import App from '@/App.vue';

import axios from 'axios';

import { createRouter, createWebHistory } from 'vue-router';

export default function AppVue(Routes) {
  let router = createRouter({
    history: createWebHistory(),
    routes: Routes,
  });

  const app = createApp(App);
  app.use(router);
  app.config.globalProperties.axios = axios;
  app.mount('#app');
}
