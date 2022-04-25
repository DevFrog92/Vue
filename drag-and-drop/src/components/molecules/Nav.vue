<template>
  <nav>
    <router-link to="/">home</router-link> |
    <router-link to="/template">template</router-link> |
    <router-link to="/guide">Guide</router-link> |
    <router-link to="/naver/jr">Naver</router-link> |
    <router-link to="/guide/emoticon">emoticon</router-link> |
    <router-link to="/progress">progress bar</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  height: 76px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 600;
  transition: height 0.2s;
  background-color: #fff;
  /* box-shadow: 0 3px 30px 0 rgb(0 0 0 / 3%); */
  display: block;
  border-bottom: 4px solid;
  /* border: 1px solid; */
}
</style>
