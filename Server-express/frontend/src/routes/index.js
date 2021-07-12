import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Main",
      component: () => import("@/view/MainView.vue"),
    },
    {
      path: "/movie",
      name: "Movie",
      component: () => import("@/view/MovieView.vue"),
    },
    {
      path: "/video/chat",
      name: "Video",
      component: () => import("@/view/VideoChat.vue"),
    },
  ],
});
