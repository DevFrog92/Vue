import Vue from 'vue'
import 'es6-promise/auto'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'production' ? false : true

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
