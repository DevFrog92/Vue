<template>
  <section class="container">
    <div class="level-container">
      <svg
        :style="`--dash-scale: ${dashScale};`"
        class="level"
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
      <p class="level-text">
        {{ level }}
      </p>
    </div>
    <div class="input-container">
      <div class="input-wrapper">
        <input type="text" v-model.number="level" @input="setLevel" />
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      radius: 80,
      dashScale: 0,
      svgSize: 0,
      level: 0,
      calcRadius: 0,
      errorMessage: '',
    };
  },
  created() {
    this.calcParameter();
  },
  methods: {
    setLevel() {
      const circle2 = document.querySelector('.circle2');

      if (this.level > 100 || this.level < 0) {
        this.level = 0;
        circle2.style.strokeDashoffset = this.dashScale;
        this.errorMessage = '0 이상 100 이하의 숫자만 입력할 수 있습니다.';
        return;
      }

      console.log(this.level);
      this.errorMessage = '';

      const offset = this.dashScale - (this.level * this.dashScale) / 100;
      circle2.style.strokeDashoffset = offset;
    },
    calcParameter() {
      this.calcRadius = this.radius;
      this.svgSize = this.radius * 2 + 8;
      this.dashScale = Math.ceil(Math.PI * this.radius * 2);
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

.level-container {
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: center;
  position: relative;
  perspective: 1200px;
}

.level {
  background-color: transparent;
  transform: rotateZ(-90deg);
}

.level .circle2 {
  fill: transparent;
  stroke-dasharray: var(--dash-scale);
  stroke-dashoffset: var(--dash-scale);
  stroke-width: 9px;
  stroke: url('#progress-circle-gradient');
  stroke-linecap: round;
  transition: all 1.5s ease-in-out;
}

.level .circle {
  fill: transparent;
  stroke: #e5e5e5;

  stroke-width: 8px;
}

.level .circle2.start {
  animation: calc(var(--time-duration) * 1s) timer linear forwards;
}

.level-text {
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
  stop-color: #07c8f9;
}

.stop_02 {
  stop-color: #0d41e1;
}

.input-container {
  position: absolute;
  bottom: 15%;
  height: 3rem;
  display: flex;
}

.input-wrapper {
  height: 100%;
}

.input-wrapper input {
  margin-right: 8px;
  border-radius: 4px;
  outline: none;
  height: 80%;
  padding: 0 10px;
}

.input-wrapper p {
  position: absolute;
  font-size: 12px;
  color: red;
  padding-left: 5px;
  margin-top: 4px;
}

.input-container button {
  height: 80%;
  padding: 0 10px;
}
</style>
