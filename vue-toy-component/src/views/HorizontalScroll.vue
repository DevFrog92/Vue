<template>
  <section class="container">
    <ul class="scroll-area">
      <li class="item">A</li>
      <li class="item">B</li>
      <li class="item">C</li>
      <li class="item">D</li>
      <li class="item">E</li>
      <li class="item">F</li>
      <li class="item">G</li>
      <li class="item">H</li>
      <li class="item">I</li>
      <li class="item">J</li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
}

.scroll-area {
  list-style: none;
  width: 500px;
  border: 1px solid #fff;
  height: 5rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  overflow: auto;
  white-space: nowrap;
}

.scroll-area::-webkit-scrollbar {
  display: none;
}

.item {
  background-color: #fff;
  padding: 5px 15px;
  margin-right: 1rem;
  border-radius: 8px;
  cursor: pointer;
}
</style>
