<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <check-list />
  </div>
</template>

<script>
import CheckList from '@/components/CheckList.vue';

export default {
  name: 'App',
  components: {
    CheckList,
  },
};
</script>

<style>
@import url("./assets/styles/style.css");
</style>
