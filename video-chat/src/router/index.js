import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/views/Register.vue"),
    },
    {
      path: "/rooms",
      name: "Rooms",
      component: () => import("@/views/Rooms.vue"),
    },
    {
      path: "/checkin/:hostID/:roomID",
      name: "CheckIn",
      component: () => import("@/views/CheckIn.vue"),
    },
    {
      path: "/chat/:hostID/:roomID",
      name: "Chat",
      component: () => import("@/views/Chat.vue"),
    },
    {
      path: "/demo",
      name: "Demo",
      component: () => import("@/Demo/main.vue"),
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
