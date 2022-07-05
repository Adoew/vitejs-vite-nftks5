import { BootstrapVue3 } from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import 'typeface-open-sans';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import { createApp } from 'vue';
import App from '@/App.vue';
import store from './store';

import axios from 'axios';

import Konva from 'konva';
import VueKonva from 'vue-konva';

import VuePapaParse from 'vue-papa-parse';

import 'vue3-resize/dist/vue3-resize.css';
import Vue3Resize from 'vue3-resize';

import Notifications from '@kyvg/vue3-notification';

import vSelect from 'vue-select';

import { createRouter, createWebHistory } from 'vue-router';

import VueNumberInput from '@chenfengyuan/vue-number-input';

export default function AppVue(Routes) {
  let router = createRouter({
    history: createWebHistory(),
    routes: Routes,
  });

  const app = createApp(App);
  app.use(router);
  app.use(store);
  app.component(VueNumberInput.name, VueNumberInput);
  app.config.globalProperties.axios = axios;
  app.use(VueKonva);
  app.use(VuePapaParse);
  app.use(Vue3Resize);
  app.use(Notifications);
  app.component('v-select', vSelect);
  app.use(BootstrapVue3);
  app.mount('#app');
}
