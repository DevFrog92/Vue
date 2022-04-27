<template>
  <section class="coin_wrapper">
    <div v-for="coin in 10" :key="coin" class="coin">
      <div class="front" />
      <div class="back" />
    </div>
  </section>
</template>

<script>
// const animationKeyFrame = {
//   to: "translate3d(0, -100px, 0) rotate(30deg) rotate3d(0, 1, 0, 0deg)",
//   from: "translate3d(0, 50vh, 0) rotate(30deg) rotate3d(0, 1, 0, 360deg)",
// }
const animationKeyFrame = {
  to: 'translate3d(0, -300px, 0) rotate(30deg) rotate3d(0, 1, 0, 0deg)',
  middle: 'translate3d(0, 10vh, 0) rotate(30deg) rotate3d(0, 1, 0, 180deg)',
  from: 'translate3d(0, 50vh, 0) rotate(30deg) rotate3d(0, 1, 0, 360deg)',
};

const animationTiming = {
  duration: 1000,
  iterations: 'Infinity',
  easing: 'linear',
  delay: 0,
};

export default {
  mounted() {
    this.setCoinRadius();
  },
  methods: {
    generateRandomScale() {
      const radius = Math.random() + 0.5;

      return radius > 1.3 ? 1.3 : radius;
    },
    setCoinRadius() {
      const coins = document.querySelectorAll('.coin');

      coins.forEach(coin => {
        const scale = this.generateRandomScale();
        console.log(scale);
        const randomAnimationDuration = Math.floor(Math.random() * 280 + 950);
        const randomAnimationDelay = Math.floor(Math.random() * 1000);
        const keyframe = [
          {
            transform: animationKeyFrame.to + ` scale(${scale})`,
          },
          {
            transform: animationKeyFrame.middle + ` scale(${scale})`,
          },
          {
            transform: animationKeyFrame.from + ` scale(${scale})`,
          },
        ];

        animationTiming.duration = randomAnimationDuration;
        animationTiming.delay = randomAnimationDelay;
        coin.animate(keyframe, animationTiming);
      });
    },
  },
};
</script>

<style scoped>
.coin_wrapper {
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  perspective: 1200px;
  position: absolute;
  width: 100%;
}

.coin {
  background-color: #ffc06a;
  border-radius: 50%;
  box-sizing: border-box;
  height: 5vw;
  position: relative;
  transform: translateY(-100px);
  transform-origin: 50% 50%;
  -webkit-transform-style: preserve-3d;
  width: 5vw;
  top: -100px;
  will-change: transform;
}

.front,
.back {
  border-radius: inherit;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.front {
  background-color: #ffb641;
  transform: translateZ(-0.1px);
}

.back {
  background-color: #ffb641;
  transform: translateZ(-5px);
}

.coin::before {
  background-color: #ffb641;
  border: 2px solid #ffb641;
  box-sizing: border-box;
  content: '';
  height: 101%;
  left: 50%;
  position: absolute;
  top: 0;
  transform: rotateY(90deg) translate(50%, -1%);
  width: 5px;
}

.coin::after {
  background-color: #ffc06a;
  border-radius: inherit;
  box-sizing: border-box;
  content: '';
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateZ(-5.5px) rotateY(180deg);
  width: 100%;
}
</style>
