import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/dashboard/dashboard.vue';
import Lesson from '../views/lesson/lesson.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/lesson/:lessonId', component: Lesson },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});