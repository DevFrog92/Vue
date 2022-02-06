<template>
    <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <Watch/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Watch from "./components/Watch.vue"

export default {
  components:{
    HelloWorld,
    Watch
  },
  mounted(){
    // console.log(this.$refs.computed)
    // console.log(this.$refs.computed.$el)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>