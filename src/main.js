import { createApp } from 'vue';
import App from './app/App.vue';
import router from './app/routes/router';

createApp(App)
  .use(router)
  .mount('#app');