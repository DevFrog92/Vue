<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar'
// import { ToolBar } from './components/ToolBar' : 정상 작동하지 않는다. -> 이유 찾아보기
export default {
  components:{
    ToolBar,
  }
}
</script>

<style>
body {
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
