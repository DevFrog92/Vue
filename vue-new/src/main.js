import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/index';
import { store } from './store/index';

Vue.config.productionTip = false

// import Vuex from 'vuex';
// 이곳에 vuex를 선언하게 되면 main.js의 성질(프로젝트 구조의 청사진)을 잃을 수 있다.
// new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions,
// })


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
