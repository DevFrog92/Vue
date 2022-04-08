<template>
  <section class="slider-container">
    <ul ref="slider" :style="sliderLength" class="card-list">
      <li v-for="item in cardLength" :key="item">
        <img-card :index="item" />
      </li>
    </ul>
  </section>
</template>

<script>
import ImgCard from '../atoms/ImgCard.vue';
export default {
  components: { ImgCard },
  data() {
    return {
      cardLength: 5,
      currentIndex: 0,
      touch: {
        startX: 0,
        endX: 0,
      },
      dragging: false,
      animationID: null,
    };
  },
  computed: {
    sliderLength() {
      return { width: `${this.cardLength * 100}%` };
    },
    listPosition() {
      return { transform: 'translateX(-' + this.currentIndex * 100 + '%)' };
    },
  },
  methods: {
    touchstart(event) {
      this.dragging = true;
      this.touch.startX = event.type.includes('mouse')
        ? event.clientX
        : event.touches[0].clientX;
      this.touch.endX = 0;
      this.$refs.slider.classList.add('grabbing');
      // this.animationID = requestAnimationFrame(this.animation);
    },
    touchmove(event) {
      this.touch.endX = event.type.includes('mouse')
        ? event.clientX
        : event.touches[0].clientX;
    },
    touchend() {
      this.dragging = false;
      // cancelAnimationFrame(this.animationID);

      if (
        !this.touch.endX ||
        Math.abs(this.touch.endX - this.touch.startX) < 20
      )
        return;

      if (
        this.touch.endX < this.touch.startX &&
        this.currentIndex < this.cardLength - 1
      ) {
        this.currentIndex++;
      }

      if (this.touch.endX > this.touch.startX && this.currentIndex > 0) {
        this.currentIndex--;
      }

      this.setSliderPosition();
      this.$refs.slider.classList.remove('grabbing');
    },
    animation() {
      this.setSliderPosition();
      if (this.dragging) {
        console.log('requestAnimation');
        requestAnimationFrame(this.animation);
      }
    },
    setSliderPosition() {
      this.$refs.slider.style.transform = `translateX(${
        this.currentIndex * -window.innerWidth
      }px)`;

      console.log(this.currentIndex * -100);
    },
  },
  mounted() {
    // set initial position

    // this.setSliderPosition();

    window.addEventListener('resize', this.setSliderPosition);

    this.$refs.slider.addEventListener('touchstart', event =>
      this.touchstart(event),
    );
    this.$refs.slider.addEventListener('touchmove', event =>
      this.touchmove(event),
    );
    this.$refs.slider.addEventListener('touchend', () => this.touchend());

    this.$refs.slider.addEventListener(
      'mousedown',
      event => this.touchstart(event),
      {
        passive: true,
      },
    );
    this.$refs.slider.addEventListener('mouseup', this.touchend, {
      passive: true,
    });
    // this.$refs.slider.addEventListener('mouseleave', , {
    //   passive: true,
    // });
    this.$refs.slider.addEventListener(
      'mousemove',
      event => this.touchmove(event),
      {
        passive: true,
      },
    );
  },
};
</script>

<style scoped>
.slider-container {
  /* margin: 0 30px; */
}

.card-list {
  display: flex;
  transition: all 0.5s ease;
  list-style: none;
  cursor: grab;
}

.grabbing {
  cursor: grabbing;
}

.card-list li {
  padding: 10px;
  width: 100%;
  transition: all 0.5s ease;
}
</style>
