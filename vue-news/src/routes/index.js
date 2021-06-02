import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "NewsView",
      component: () => import("@/views/NewsView.vue"),
    },
    {
      path: "/ask",
      name: "AskView",
      component: () => import("@/views/AskView.vue"),
    },
    {
      path: "/jobs",
      name: "JobsView",
      component: () => import("@/views/JobsView.vue"),
    },
    {
      path: "/item/:id",
      name: "ItemView",
      component: () => import("@/views/ItemView.vue"),
    },
    {
      path: "/user/:id",
      name: "userView",
      component: () => import("@/views/UserView.vue"),
    },
  ],
});
