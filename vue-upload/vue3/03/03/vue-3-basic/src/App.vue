<template>
    <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <DataBinding />
  <Computed ref="computed" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DataBinding from "./components/DataBinding.vue"
import Computed from "./components/Computed.vue"

export default {
  components:{
    HelloWorld,
    DataBinding,
    Computed
  },
  mounted(){
    console.log(this.$refs.computed)
    console.log(this.$refs.computed.$el)
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