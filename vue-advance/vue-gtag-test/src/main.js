import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import VueGtag from 'vue-gtag';

Vue.use(VueGtag, {
  config: {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS_ID,
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
