import Vue from 'vue'
import Vuex from 'vuex'
import items from "./items"
import getters from "./getters"

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    ...items,
    selectedCountry: ""
  },
  getters,
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

