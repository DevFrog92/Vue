import Vue from "vue";
import VueRouter from "vue-router";
import { store } from "@/store/index";
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("@/components/Home.vue"),
    },
    {
      path: "/room/:room",
      name: "Room",
      component: () => import("@/components/room/Room.vue"),
      props: true,
      beforeEnter: (to, from, next) => {
        if (!store.getters.getState.name) {
          next({
            name: "Home",
            query: {
              room: to.params.room,
            },
          });
        }
        next();
      },
    },
  ],
});
