<template>
  <div id="app">
    <Nav />
    <div class="top-padding">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from '@/components/molecules/Nav.vue';

export default {
  components: {
    Nav,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  overflow: hidden;
}
.top-padding {
  padding-top: 76px;
}
</style>
