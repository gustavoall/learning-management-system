import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './app/components/theme/_theme.scss'

import { createApp } from 'vue';
import App from './app/App.vue';
import router from './app/routes/router';

createApp(App)
  .use(router)
  .mount('#app');