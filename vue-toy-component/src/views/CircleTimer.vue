<template>
  <section class="container">
    <div class="timer-container">
      <svg
        :style="`--dash-scale: ${dashScale}; --time-duration: ${timerDuration}`"
        class="timer"
        :width="svgSize"
        :height="svgSize"
      >
        <defs>
          <linearGradient
            id="progress-circle-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop class="stop_01" offset="0%"></stop>
            <stop class="stop_02" offset="100%"></stop>
          </linearGradient>
        </defs>
        <circle class="circle" cx="50%" cy="50%" :r="calcRadius" />
        <circle class="circle2" cx="50%" cy="50%" :r="calcRadius" />
      </svg>
      <p class="time">
        {{ time }}
      </p>
    </div>
    <button @click="reStart">reStart</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      timerId: null,
      time: 0,
      radius: 80,
      dashScale: 0,
      timerDuration: 20,
      svgSize: 0,
      calcRadius: 0,
    };
  },
  created() {
    this.calcParameter();
  },
  mounted() {
    this.timerStart();
  },
  beforeDestroy() {
    clearInterval(this.timerId);
    this.timerId = null;
  },
  methods: {
    reStart() {
      const circle = document.querySelector('.timer .circle2');

      circle.classList.remove('start');
      clearInterval(this.timerId);
      this.timerId = null;
      this.time = 0;
      // this.timerStart();
    },
    calcParameter() {
      this.calcRadius = this.radius - 2;
      this.svgSize = this.radius * 2 + 4;
      this.dashScale = Math.ceil(Math.PI * (this.radius - 2) * 2);
    },
    timerStart() {
      if (this.timerId) {
        return;
      }

      const circle = document.querySelector('.timer .circle2');

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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

.container {
  width: 100vw;
  height: 100vh;
  background-color: #14213d;
  align-items: center;
  display: flex;
  justify-content: center;
}

.timer-container {
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: center;
  position: relative;
  perspective: 1200px;
}

.timer {
  background-color: transparent;
  transform: rotateZ(-90deg);
}

@keyframes timer {
  0% {
    stroke-dasharray: var(--dash-scale);
    stroke-dashoffset: var(--dash-scale);
  }

  100% {
    stroke-dasharray: var(--dash-scale);
    stroke-dashoffset: 0;
  }
}

.timer .circle2 {
  fill: transparent;
  stroke-dasharray: var(--dash-scale);
  stroke-dashoffset: var(--dash-scale);
  stroke-width: 8px;
  stroke: url('#progress-circle-gradient');
  stroke-linecap: round;
}

.timer .circle {
  fill: transparent;
  stroke: #e5e5e5;

  stroke-width: 8px;
}

.timer .circle2.start {
  animation: calc(var(--time-duration) * 1s) timer linear forwards;
}

@keyframes ro {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.time {
  color: #e5e5e5;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 24px;
  position: absolute;
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  animation: ro 1s infinite linear;
}

.stop_01 {
  stop-color: #ff2189;
}

.stop_02 {
  stop-color: #234bf1;
}
</style>
