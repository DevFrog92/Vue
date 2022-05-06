<template>
  <section class="container">
    <div class="box sticky"></div>
    <div class="box fixed"></div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 300vh;
}

.box {
  width: 100px;
  height: 100px;
  border: 2px solid;
}

.sticky {
  position: sticky;
  top: 0;
}

.fixed {
  position: fixed;
  top: 0;
}
</style>
