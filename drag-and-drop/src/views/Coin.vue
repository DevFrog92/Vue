<template>
  <section class="coin_wrapper">
    <div class="coin" v-for="coin in 20" :key="coin">
      <div class="front"></div>
      <div class="back"></div>
    </div>
  </section>
</template>

<script>
const animationKeyFrame = {
  to: `translate3d(0, -60vh, 0) rotate(30deg) rotate3d(0, 1, 0, 0deg)`,
  from: `translate3d(0, 600px, 0) rotate(30deg) rotate3d(0, 1, 0, 360deg)`,
};

const animationTiming = {
  duration: 1000,
  iterations: 1,
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

      return radius > 1 ? 1 : radius;
    },
    setCoinRadius() {
      const coins = document.querySelectorAll('.coin');

      coins.forEach(coin => {
        const scale = this.generateRandomScale();
        const randomAnimationDuration = Math.floor(Math.random() * 1000 + 2500);
        const randomAnimationDelay = Math.floor(Math.random() * 2000 + 1000);
        const keyframe = [
          {
            transform: animationKeyFrame.to + ` scale(${scale})`,
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
  width: 100vw;
  height: 100vh;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1200px;
}

.coin {
  border-radius: 50%;
  width: 51px;
  height: 51px;
  position: relative;
  background-color: #ffc06a;
  -webkit-transform-style: preserve-3d;
  transform-origin: 50% 50%;
  transform: translateY(-60vh);
  will-change: transform;
  box-sizing: border-box;
}

.front,
.back {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  position: absolute;
  top: 0;
  left: 0;
}

.front {
  background-color: #ffb641;
  transform: translateZ(-0.1px);
}

.back {
  transform: translateZ(-5px);
  background-color: #ffb641;
}

.coin::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  width: 5px;
  height: 101%;
  background-color: #ffb641;
  transform: rotateY(90deg) translate(50%, -1%);
  border: 2px solid #ffb641;
  box-sizing: border-box;
}

.coin::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: #ffc06a;
  transform: translateZ(-5.5px) rotateY(180deg);
  box-sizing: border-box;
}
</style>
