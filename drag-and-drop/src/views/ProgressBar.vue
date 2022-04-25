<template>
  <section class="progress_bar_wrapper">
    <div ref="progressBar" class="progress_bar">
      <div ref="progress" class="progress" />
    </div>
    <button @click="onClick">stage up</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      growFactor: 0,
      endPoint: 10,
      stage: 0,
    };
  },
  mounted() {
    this.setProgressBarWidth();
    this.setResize();
  },
  methods: {
    setResize() {
      window.addEventListener('resize', () => {
        this.setProgressBarWidth();
        this.setProgressWidth();
      });
    },
    setProgressBarWidth() {
      const innerWidth = window.innerWidth;
      const width = innerWidth * 0.9;

      this.growFactor = width / this.endPoint;
      this.$refs.progressBar.style.width = `${width}px`;
    },
    setProgressWidth() {
      const width = innerWidth * 0.9;

      this.$refs.progress.style.transform = `translate3d(${
        -width + 1 + this.stage * this.growFactor
      }px, 0, 0)`;
    },
    onClick() {
      this.stage += 1;
      this.setProgressWidth();
    },
  },
};
</script>

<style scoped>
.progress_bar_wrapper {
  background-color: #333;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  position: relative;
}

.progress_bar {
  height: 6px;
  transition: all 0.05s ease-in-out;
  background-color: #393e44;
  position: absolute;
  top: 10px;
  left: 50%;
  padding: 0;
  transform: translate(-50%, 0);
  overflow: hidden;
}

.progress {
  display: inline-block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #4479ff;
  transform: translate3d(calc(-100% - 1px), 0, 0);
  transition: all 0.1s ease-in-out;
}

button {
  position: absolute;
  top: 10rem;
  left: 3rem;
}
</style>
