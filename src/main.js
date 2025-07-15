import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './app/components/theme/_theme.scss'

import { createApp } from 'vue';
import App from './app/App.vue';
import router from './app/routes/router';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

createApp(App)
  .use(router)
  .mount('#app');