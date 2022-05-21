<template>
  <section>
    this is admin page
    <router-link to="/admin/list">list</router-link> |
    <router-link to="/admin/insert">insert</router-link> |
    <router-link to="/admin/edit">edit</router-link> |
    <router-view />
  </section>
</template>

<script>
export default {
  // beforeRouteEnter(to, from, next) {
  //   console.log(`beforeRouteEnter`, to, from);
  //   next();
  // },
  beforeRouteUpdate(to, from, next) {
    console.log(`beforeRouteUpdate`, to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(`beforeRouteLeave`, to, from);
    next();
  },
};
</script>

<style></style>
