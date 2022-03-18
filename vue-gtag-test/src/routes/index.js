import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/checklist',
    name: 'CheckList',
    component: () => import('@/components/CheckList.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/components/Signup.vue'),
  },
  {
    path: '/gamebutton',
    name: 'GameButton',
    component: () => import('@/components/GameButton.vue'),
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/components/Form.vue'),
  }
];
const router = new VueRouter({
  routes,
});

export default router;
