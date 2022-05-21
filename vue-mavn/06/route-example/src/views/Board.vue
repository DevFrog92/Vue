<template>
  <section>
    <h1>Board</h1>
    <router-view></router-view>
    <router-view name="a"></router-view>
    <p>board page</p>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  height: 100vh;
  background-color: #eee;
  width: 100vw;
}
</style>
