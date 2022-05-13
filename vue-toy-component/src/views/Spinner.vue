<template>
  <section>
    <div class="loading">
      <svg class="loading-circle">
        <circle cx="50%" cy="50%" r="25"></circle>
      </svg>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.loading {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes loading-spin {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loading-circle-ani {
  0% {
    opacity: 0.8;
    stroke-dashoffset: 160;
  }

  75% {
    opacity: 1;
    stroke-dashoffset: -155;
  }

  100% {
    opacity: 0.8;
    stroke-dashoffset: -160;
  }
}

.loading-circle {
  animation: loading-spin 2.7s infinite;
  width: 60px;
  height: 60px;
}

.loading-circle circle {
  animation: loading-circle-ani 1.3s infinite;
  stroke: #fff;
  opacity: 0.8;
  stroke-width: 4px;
  fill: transparent;
  stroke-dasharray: 160;
}
</style>
