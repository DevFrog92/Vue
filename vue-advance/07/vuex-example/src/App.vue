<template>
  <div id="app">
    <h2>Task lists</h2>
    <ul>
      <li v-for="task in tasks" :key=task.id>
        <input type="checkbox" :checked="task.done">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    tasks() {
      return this.$store.state.tasks
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
