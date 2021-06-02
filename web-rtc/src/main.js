import Vue from "vue";
import App from "./App.vue";
import { router } from "./routes/index";
import { store } from "./store/index";
// import io from "socket.io-client";
// import VueSocketIo from "vue-socket.io";

// export const socket = io.connect("https://localhost:8080", { secure: true });
// export const socket = io();

// socket.on("connection", () => {
//   console.log("connected");
// });

// Vue.use(VueSocketIo, socket);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
