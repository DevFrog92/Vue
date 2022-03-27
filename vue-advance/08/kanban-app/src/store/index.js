import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutation'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {},
	getters,
	actions,
	mutations,
})
