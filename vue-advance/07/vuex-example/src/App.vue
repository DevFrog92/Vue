<template>
  <div id="app">
    <h2>Task list</h2>
    <ul>
      <li v-for="task in tasks" :key=task.id>
        <input type="checkbox" :checked="task.done" @change="toggleTaskStatus(task)">
        {{ task.name }}
        -
        <span v-for="id in task.labelIds" :key="id">
          {{ getLabelText(id) }}
        </span>
      </li>
    </ul>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTaskName" placeholder="new task name">
    </form>
    <h2>Filtering by label</h2>
    <ul>
      <li v-for="label in labels" :key="label.id">
        <input type="radio" :checked="label.id === filter" @change="changeFilter(label.id)">
        {{ label.text }}
      </li>
      <li>
        <input type="radio" :checked="filter === null" @change="changeFilter(null)">
        no filtering
      </li>
    </ul>

    <h2>Label list</h2>
    <ul>
      <li v-for="label in labels" :key="label.id">
        <input type="checkbox" :value="label.id" v-model="newTaskLabelIds">
        {{ label.text }}
      </li>
    </ul>

    <form @submit.prevent="addLabel">
      <input type="text" v-model="newLabelText" placeholder="new label">
    </form>
    <h2>
      save and restore
    </h2>
    <button type="button" @click="restore">restore</button>
    <button type="button" @click="save">save</button>
    <button type="button" @click="callModule">call module</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      newTaskName:"",
      newLabelText:"",
      newTaskLabelIds: []
    }
  },
  computed: {
    tasks() {
      return this.$store.getters.filteredTasks
    },
    labels() {
      return this.$store.state.labels
    },
    filter() {
      return this.$store.state.filter
    }
  },
  methods: {
    toggleTaskStatus(task) {
      this.$store.commit('toggleTaskStatus', {
        id: task.id
      })
    },
    addTask() {
      this.$store.commit('addTask', {
        name: this.newTaskName,
        labelIds: this.newTaskLabelIds
      })

      this.newTaskName = ""
      this.newTaskLabelIds = []
    },
    addLabel(){
      this.$store.commit('addLabel', {
        text: this.newLabelText
      })

      this.newLabelText = ''
    },
    getLabelText(id) {
      const label = this.$store.state.labels.filter(label => label.id === id)[0]
      return label ? label.text : ""
    },
    changeFilter(labelId){
      this.$store.commit("changeFilter", {
        filter:
        labelId
      })
    },
    save(){
      this.$store.dispatch('save')
    },
    restore(){
      this.$store.dispatch('restore')
    },
    callModule(){
      this.$store.dispatch('log')
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
