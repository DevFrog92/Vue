import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'
import actions from './actions'
// plugin 방식으로 vue에서 사용할 수 있도록 use에 포함한다.
Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    news:[],
    ask:[],
    jobs:[],
    username:{},
    item:{},
  },
  getters :{
    fetchedAsk(state){
      return state.ask;
    },
    fetchedNews(state){
      return state.news;
    },
    fetchedJobs(state){
      return state.jobs;
    },
    fetchedUser(state){
      return state.username;
    },
    fetchedItem(state){
      return state.item;
    }
  },
  mutations,
  actions,
});
