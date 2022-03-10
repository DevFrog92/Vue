import Vue from 'vue';
import App from './App.vue';
import VueGtag from 'vue-gtag';

Vue.use(VueGtag, {
  config: {
    id: 'G-XPDQ09HE27',
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
