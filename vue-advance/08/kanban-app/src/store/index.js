import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutation'

Vue.use(Vuex)

const state = {
	auth: {
		token: null,
		userId: null,
	},
	board: {
		lists: [],
	},
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})
