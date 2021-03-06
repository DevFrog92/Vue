import Vue from 'vue';
import VueRouter from 'vue-router';
import Chat from '@/views/Chat.vue';
import TravelIntro from '@/views/TravelIntro.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'TravelIntro',
    component: TravelIntro,
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    props: true,
    beforeEnter: (to, from, next) => {
      to.params.name ? next() : next('/');
    },
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
