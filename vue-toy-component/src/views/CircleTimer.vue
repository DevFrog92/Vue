<template>
  <section class="container">
    <div class="timer-container">
      <svg
        :style="`--dash-scale: ${dashScale}; --time-duration: ${timerDuration}`"
        class="timer"
        :width="radius * 3"
        :height="radius * 3"
      >
        <circle class="circle2" cx="50%" cy="50%" :r="radius" />
        <circle class="circle" cx="50%" cy="50%" :r="radius" />
      </svg>
      <p class="time">{{ time }}</p>
    </div>
    <button @click="timerStart">timer start</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      timerId: null,
      time: 0,
      radius: 32,
      dashScale: 0,
      timerDuration: 20,
    };
  },
  created() {
    this.calcDashScale();
  },
  methods: {
    calcDashScale() {
      this.dashScale = Math.ceil(Math.PI * this.radius * 2);
    },
    timerStart() {
      if (this.timerId) {
        return;
      }

      const circle = document.querySelector('.timer .circle');

      circle.classList.add('start');
      this.timerId = setInterval(() => {
        this.time += 1;

        if (this.time >= this.timerDuration) {
          clearInterval(this.timerId);
          circle.classList.remove('start');
          this.time = 0;
          this.timerId = null;
        }
      }, 1000);
    },
  },
};
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

.timer-container {
  background-color: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.timer {
  background-color: transparent;
  transform: rotateZ(-90deg);
}

@keyframes loading-circle-ani {
  0% {
    stroke-dashoffset: var(--dash-scale);
    stroke-dasharray: var(--dash-scale);
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: var(--dash-scale);
  }
}

.timer .circle {
  stroke: #29292e;
  stroke-width: 4px;
  fill: transparent;
  stroke-dashoffset: var(--dash-scale);
  stroke-dasharray: var(--dash-scale);
}

.timer .circle2 {
  stroke: #4479ff;
  stroke-width: 2px;
  fill: transparent;
}

.timer .circle.start {
  animation: calc(var(--time-duration) * 1s) loading-circle-ani linear forwards;
}

.time {
  position: absolute;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.04em;
  color: #ffffff;
}
</style>
