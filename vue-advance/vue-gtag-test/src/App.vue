<template>
  <div id="app">
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/checklist">
      CheckList
    </router-link> |
    <router-link to="/signup">
      Signup
    </router-link> |
    <router-link to="/gamebutton">
      GameButton
    </router-link>
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import url("./assets/styles/style.css");
</style>
