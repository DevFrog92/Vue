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
        <img src="@/assets/logo.png" alt="logo" class="logo" />
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
  background-color: #29292e;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle_wrapper {
  position: relative;
  width: 72px;
  height: 72px;
  min-width: 72px;
  min-height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 96px;
  max-height: 96px;
  border-radius: 50%;
}

.circle.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle .logo {
  width: 48px;
  height: 48px;
}

.circle.pulse {
  opacity: 0;
}

.circle:nth-of-type(1) {
  background-color: #6951ff;
  transform-origin: left center;
  transform: scale(1);
  animation: 0.3s ease-out 0.3s forwards fadeOutToLeft;
}

.circle:nth-of-type(2) {
  background-color: #6a94ff;
  transform-origin: right center;
  transform: scale(0);
  animation: 0.3s ease-out 0.435s forwards fadeInToLeft;
}

.circle:nth-of-type(3) {
  background-color: #6a94ff;
  transform-origin: top center;
  transform: scale(0);
  animation: 0.3s ease-out 0.9s forwards fadeOutToTop;
}

.circle:nth-of-type(4) {
  background-color: #2765ff;
  transform: scale(0);
  transform-origin: bottom center;
  animation: 0.3s ease-out 1.05s forwards fadeInToTop;
}

.circle:nth-of-type(5) {
  background-color: #38d9a9;
  transform: scale(0);
  opacity: 0.7;
  animation: 0.6s ease-out 1.5s forwards moveToRight;
}

.circle:nth-of-type(6) {
  background-color: #2765ff;
  transform: scale(0);
  animation: 0.6s ease-out 1.5s forwards moveToLeft;
}

.circle:nth-of-type(7) {
  background-color: #6951ff;
  transform: scale(1);
  opacity: 0;
  z-index: 1;
  transform-origin: center center;
  animation: 2.05s ease-in-out 1.95s forwards pulse;
}

.circle:nth-of-type(7) img {
  opacity: 0;
  z-index: 1;
  transform: scale(0.9);
  transform-origin: center center;
  animation: 2.05s ease-in-out 1.95s forwards appear;
}

.circle:nth-of-type(7)::before {
  position: absolute;
  content: '';
  background-color: #6951ff;
  width: 100%;
  opacity: 0;
  height: 100%;
  border-radius: 50%;
  animation: 0.65s ease-out 2 2.4s forwards wave;
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
    opacity: 0.8;
    transform: scale(1);
  }
  10% {
    opacity: 1;

    transform: scale(1.4);
  }

  20% {
    opacity: 1;

    transform: scale(1.42);
  }

  24% {
    opacity: 1;

    transform: scale(1.45);
  }

  27% {
    opacity: 1;

    transform: scale(1.42);
  }

  57% {
    opacity: 1;

    transform: scale(1.42);
  }

  60% {
    opacity: 1;

    transform: scale(1.45);
  }

  65% {
    opacity: 1;

    transform: scale(1.42);
  }

  80% {
    opacity: 1;

    transform: scale(1.41);
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
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes appear {
  0% {
    opacity: 0.8;
    transform: scale(0.8);
  }
  10% {
    opacity: 1;

    transform: scale(1);
  }

  20% {
    opacity: 1;

    transform: scale(1);
  }

  24% {
    opacity: 1;

    transform: scale(1.05);
  }

  27% {
    opacity: 1;

    transform: scale(1.03);
  }

  57% {
    opacity: 1;

    transform: scale(1);
  }

  59% {
    opacity: 1;

    transform: scale(1.05);
  }

  65% {
    opacity: 1;

    transform: scale(1.03);
  }

  80% {
    opacity: 1;

    transform: scale(1);
  }
  100% {
    opacity: 1;

    transform: scale(0);
  }
}
</style>
