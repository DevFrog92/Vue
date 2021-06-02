import Vue from "vue";
import App from "./App.vue";
import WebRTC from "vue-webrtc";
import * as io from "socket.io-client";

import { router } from "@/router/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faVideo,
  faUser,
  faPodcast,
} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faVideo, faUser, faPodcast);

window.io = io;

Vue.config.productionTip = false;
Vue.use(WebRTC);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

