import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/template',
    name: 'Template',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Template.vue'),
  },
  {
    path: '/guide',
    name: 'Guide',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Guide.vue'),
  },
  {
    path: '/naver/jr',
    name: 'JrNaver',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/JrNaver.vue'),
  },
  {
    path: '/guide/emoticon',
    name: 'Emoticon',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Emoticon.vue'),
  },
  {
    path: '/progress',
    name: 'ProgressBar',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ProgressBar.vue'),
  },
  {
    path: '/coin',
    name: 'Coin',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Coin.vue'),
  },
  {
    path: '/splash',
    name: 'Splash',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Splash.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
