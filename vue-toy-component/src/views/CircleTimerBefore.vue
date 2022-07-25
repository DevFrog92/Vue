<template>
  <div class="timer_container_wrapper">
    <div class="timer_wrapper">
      <div class="timer_outer" />
      <div class="timer_inner" />
      <div class="timer_number">
        {{ number }}
      </div>
      <div class="timer_circle">
        <div class="timer_circle_dot">
          <span class="dot" />
        </div>
        <div class="timer_circle_dot_fix">
          <span class="dot_fix" />
        </div>
        <div class="timer_circle_left" />
        <div class="timer_circle_right" />
        <div class="left_progress" />
        <div class="right_progress" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    level: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      timer: null,
      number: 0,
      leftProgress: null,
      rightProgress: null,
      dotProgress: null,
      leftCircle: null,
      rightCircle: null,
    };
  },
  mounted() {
    this.leftCircle = document.querySelector('.timer_circle_left');
    this.rightCircle = document.querySelector('.timer_circle_right');
    this.leftProgress = document.querySelector('.left_progress');
    this.rightProgress = document.querySelector('.right_progress');
    this.dotProgress = document.querySelector('.timer_circle_dot');
    this.setLevelTimer(this.level);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        if (this.number <= 1) {
          clearInterval(this.timer);

          return;
        }

        this.number -= 1;
      }, 1000);
    },
    setLevelTimer(level) {
      if (level === 'easy') {
        this.number = 7;
      } else {
        this.number = 21;
      }

      this.startTimer();
      this.setRightCircleCss();
      this.setLeftCircleCss();
      this.setTimerAnimation(level);
    },
    setRightCircleCss() {
      this.rightCircle.style.position = 'absolute';
      this.rightCircle.style.top = '0';
      this.rightCircle.style.left = '0';
      this.rightCircle.style.zIndex = '2';
      this.rightCircle.style.backgroundColor = '#C4C4C4';
      this.rightCircle.style.borderRadius = '100%';
      this.rightCircle.style.width = '100%';
      this.rightCircle.style.height = '100%';
      this.rightCircle.style.clip = 'rect(0px, 50px, 50px, 25px)';
    },
    setLeftCircleCss() {
      this.leftCircle.style.position = 'absolute';
      this.leftCircle.style.top = '0';
      this.leftCircle.style.left = '0';
      this.leftCircle.style.zIndex = '4';
      this.leftCircle.style.backgroundColor = '#C4C4C4';
      this.leftCircle.style.borderRadius = '100%';
      this.leftCircle.style.width = '100%';
      this.leftCircle.style.height = '100%';
      this.leftCircle.style.clip = 'rect(0px, 25px, 50px, 0px)';
    },
    setTimerAnimation(level) {
      this.leftProgress.classList.add(level);
      this.rightProgress.classList.add(level);
      this.dotProgress.classList.add(level);
    },
  },
};
</script>

<style scoped>
.timer_container_wrapper {
  position: absolute;
  top: 30px;
  right: 30px;
}

.timer_wrapper {
  width: 50px;
  height: 50px;
  position: relative;
}

.timer_outer {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  z-index: 1;
  background-color: #c4c4c4;
}

.timer_inner {
  width: 85%;
  height: 85%;
  border-radius: 100%;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 5;
  transform: translate(-50%, -50%);
}

.timer_circle {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  width: 100%;
  height: 100%;
}

.left_progress,
.right_progress {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  clip: rect(0px, 25px, 50px, 0px);
  background: #c175ff;
}

.right_progress {
  clip: rect(0px, 50px, 50px, 25px);
}

.timer_circle_dot,
.timer_circle_dot_fix {
  position: absolute;
  display: flex;
  justify-content: flex-end;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
}

.timer_circle_dot_fix {
  z-index: 5;
  transform: rotate(-90deg);
}

.dot,
.dot_fix {
  position: absolute;
  top: -1.875px;
  right: 0;
  width: 3.75px;
  height: 3.75px;
  background: #c175ff;
  border-radius: 100%;
}

.timer_number {
  position: absolute;
  z-index: 6;
  top: 50%;
  left: 50%;
  font-size: 1.5rem;
  font-weight: 600;
  color: #c175ff;
  transform: translate(-50%, -50%);
}

/* Timer duration of progress by level */
.left_progress.easy {
  animation: left 3.5s linear forwards;
}

.right_progress.easy {
  clip: rect(0px, 50px, 50px, 25px);
  animation: right 3.5s 3.5s linear forwards;
}

.left_progress.hard {
  animation: left 10.5s linear forwards;
}

.right_progress.hard {
  clip: rect(0px, 50px, 50px, 25px);
  animation: right 10.5s 10.5s linear forwards;
}

@keyframes left {
  0% {
    z-index: 3;
  }

  100% {
    z-index: 3;
    transform: rotate(180deg);
  }
}

@keyframes right {
  0% {
    z-index: 5;
  }
  100% {
    z-index: 5;
    transform: rotate(180deg);
  }
}

/* Timer duration of dot by level */
.timer_circle_dot.easy {
  animation: dot 7s linear forwards;
}

.timer_circle_dot.hard {
  animation: dot 21s linear forwards;
}

@keyframes dot {
  0% {
    z-index: 3;
    transform: rotate(-90deg);
  }
  50% {
    transform: rotate(90deg);
    z-index: 5;
  }
  100% {
    transform: rotate(270deg);
    z-index: 5;
  }
}
</style>
