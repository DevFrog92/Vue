import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

// module화가 필요
const store = new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: "Javascript study",
        labelIds: [1, 2],
        done: false
      },
      {
        id: 2,
        name: "Typescript study",
        labelIds: [1, 3],
        done: true
      }
    ],
    labels: [
      {
        id: 1,
        text: "study"
      },
      {
        id: 2,
        text: "javascript"
      },
      {
        id: 3,
        text: "typescript"
      }
    ],
    nextTaskId: 3,
    nextLabelId:4,
    filter: null
  },
  getters:{
    filteredTasks(state){
      if(!state.filter) {
        return state.tasks
      }

      return state.tasks.filter(task => {
        return task.labelIds.indexOf(state.filter) >= 0
      })
    }
  },
  mutations: {
    addTask(state, {
      name,
      labelIds
    }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        labelIds,
        done: false
      })

      state.nextTaskId++
    },
    toggleTaskStatus(state, {
      id
    }) {
      const filtered = state.tasks.filter(task => {
        return task.id === id
      })

      filtered.forEach(task => {
        task.done = !task.done
      })
    },
    addLabel(state, {
      text
    }){
      state.labels.push({
        id: state.nextLabelId,
        text
      })

      state.nextLabelId++
    },
    changeFilter(state, {filter}) {
      state.filter = filter
    },
    restore(state, { tasks, labels, nextTaskId, nextLabelId, }){
      state.tasks = tasks
      state.labels = labels
      state.nextTaskId = nextTaskId
      state.nextLabelId = nextLabelId

      console.log('restore', state)
    }
  },
  actions: {
    save({state}){
      const data = {
        tasks: state.tasks,
        labels: state.labels,
        nextTaskId: state.nextTaskId,
        nextLabelId: state.nextLabelId
      }

      localStorage.setItem('task-app-data', JSON.stringify(data))
    },
    restore({ commit }){
      const data = localStorage.getItem('task-app-data')

      if(data) {
        commit("restore", JSON.parse(data))
      }
    }
  }
})

export default store