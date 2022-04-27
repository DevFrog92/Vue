<template>
  <section class="splash_wrapper">
    <div class="circle_wrapper">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle divide left"></div>
      <div class="circle divide right"></div>
      <div class="circle logo pulse">
        <img src="@/assets/images/naver/mini-main.png" alt="" class="logo" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.playAnimation();
  },
  methods: {
    playAnimation() {
      const circles = document.querySelectorAll('.circle');

      circles.forEach((circle, index) => {
        circle.addEventListener('animationstart', () => {
          if (index === 2 || index === 4 || index === 7) {
            circles[index - 1].style.display = 'none';
          }
        });
      });
    },
  },
};
</script>

<style scoped>
.splash_wrapper {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle_wrapper {
  position: relative;
  width: 13vw;
  height: 13vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 80px;
  max-height: 80px;
  border-radius: 50%;
}

.circle.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle .logo {
  width: 50%;
  height: 50%;
}

.circle.pulse {
  opacity: 0;
}

.circle:nth-of-type(1) {
  background-color: rgb(124, 135, 231);
  transform-origin: left center;
  transform: scale(1);
  animation: 0.3s ease-out 0.05s forwards fadeOutToLeft;
}

.circle:nth-of-type(2) {
  background-color: rgb(85, 85, 233);
  transform-origin: right center;
  transform: scale(0);
  animation: 0.3s ease-out 0.185s forwards fadeInToLeft;
}

.circle:nth-of-type(3) {
  background-color: rgb(85, 85, 233);
  transform-origin: top center;
  transform: scale(0);
  animation: 0.3s ease-out 0.65s forwards fadeOutToTop;
}

.circle:nth-of-type(4) {
  background-color: rgb(25, 52, 187);
  transform: scale(0);
  transform-origin: bottom center;
  animation: 0.3s ease-out 0.8s forwards fadeInToTop;
}

.circle:nth-of-type(5) {
  background-color: rgb(64, 31, 194);
  transform: scale(0);
  opacity: 0.7;
  animation: 0.6s ease-out 1.25s forwards moveToRight;
}

.circle:nth-of-type(6) {
  background-color: rgb(25, 52, 187);
  transform: scale(0);
  animation: 0.6s ease-out 1.25s forwards moveToLeft;
}

.circle:nth-of-type(7) {
  background-color: rgb(128, 50, 184);
  transform: scale(1);
  opacity: 0;
  z-index: 1;
  transform-origin: center center;
  animation: 2.35s ease-in-out 1.65s forwards pulse;
}

.circle:nth-of-type(7) img {
  opacity: 0;
  z-index: 1;
  transform: scale(1);
  transform-origin: center center;
  animation: 2.35s ease-in-out 1.65s forwards appear;
}

.circle:nth-of-type(7)::before {
  position: absolute;
  content: '';
  border: 1px solid rgb(158, 76, 239);
  width: 100%;
  opacity: 0;
  height: 100%;
  border-radius: 50%;
  animation: 0.5s ease-out 2.6s forwards wave;
}

@keyframes fadeOutToLeft {
  100% {
    transform: scale(0);
  }
}

@keyframes fadeInToLeft {
  100% {
    transform-origin: right center;
    transform: scale(1);
  }
}

@keyframes fadeOutToTop {
  0% {
    transform-origin: top center;
    transform: scale(1);
  }

  10% {
    transform-origin: top center;
    transform: scale(1);
  }

  100% {
    transform-origin: top center;
    transform: scale(0);
  }
}

@keyframes fadeInToTop {
  100% {
    transform-origin: bottom center;
    transform: scale(1);
  }
}

@keyframes moveToLeft {
  0% {
    opacity: 1;
    transform: scale(1) translate3d(0, 0, 0);
  }
  10% {
    opacity: 1;
    transform: scale(1) translate3d(0, 0, 0);
  }
  60% {
    opacity: 1;
    transform: scale(1) translate3d(-80%, 0, 0);
  }

  65% {
    transform: scale(1) translate3d(-50%, 0, 0);

    opacity: 1;
  }

  100% {
    transform: scale(1) translate3d(0%, 0, 0);
    opacity: 0;
  }
}

@keyframes moveToRight {
  0% {
    transform: scale(1) translate3d(0, 0, 0);
    opacity: 0.7;
  }
  10% {
    transform: scale(1) translate3d(0, 0, 0);
    opacity: 0.7;
  }
  60% {
    transform: scale(1) translate3d(80%, 0, 0);
    opacity: 0.7;
  }

  65% {
    transform: scale(1) translate3d(50%, 0, 0);

    opacity: 0.7;
  }

  100% {
    transform: scale(1) translate3d(0%, 0, 0);
    opacity: 0;
  }
}

@keyframes pulse {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  10% {
    opacity: 1;

    transform: scale(2.9);
  }

  40% {
    opacity: 1;

    transform: scale(2.9);
  }

  50% {
    opacity: 1;

    transform: scale(3);
  }

  80% {
    opacity: 1;

    transform: scale(2.8);
  }

  100% {
    opacity: 1;

    transform: scale(0);
  }
}

@keyframes wave {
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    transform: scale(1.7);
    opacity: 0;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
  41% {
    transform: scale(1.01);
  }
  75% {
    opacity: 1;
    transform: scale(1);
  }
  95% {
    transform: scale(1);
  }
  100% {
    opacity: 0;
  }
}
</style>
