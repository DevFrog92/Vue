import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ErrorPage from "../views/ErrorPage.vue";
import Admin from "../views/Admin.vue";
import ProductList from "../views/ProductList.vue";
import ProductEdit from "../views/ProductEdit.vue";
import ProductInsert from "../views/ProductInsert.vue";
import Board from "../views/Board.vue";
import Graph from "../views/Graph.vue";
import Graph2 from "../views/Graph2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "*",
    name: "ErrorPage",
    component: ErrorPage,
  },
  {
    path: "/main",
    redirect: "/",
  },
  {
    path: "/board",
    component: Board,
    children: [
      {
        path: "graph",
        components: {
          default: Graph,
          a: Graph2,
        },
      },
    ],
  },
  {
    path: "/admin",
    component: Admin,
    children: [
      { path: "list", name: "productList", component: ProductList },
      { path: "edit", name: "productEdit", component: ProductEdit },
      { path: "insert", name: "productInsert", component: ProductInsert },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
