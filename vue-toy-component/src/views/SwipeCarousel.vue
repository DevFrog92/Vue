<template>
  <div class="swipe-carousel-wrapper">
    <h1>Swipe carousel</h1>
    <div class="swipe-carousel-container">
      <ul class="swipe-carousel">
        <li class="swipe-carousel-item">
          <img src="../assets/images/1.jpeg" alt="" draggable="false" />
        </li>
        <li class="swipe-carousel-item">
          <img src="../assets/images/2.jpeg" alt="" draggable="false" />
        </li>
        <li class="swipe-carousel-item">
          <img src="../assets/images/3.jpeg" alt="" draggable="false" />
        </li>
        <li class="swipe-carousel-item">
          <img src="../assets/images/4.jpeg" alt="" draggable="false" />
        </li>
        <li class="swipe-carousel-item">
          <img src="../assets/images/5.jpeg" alt="" draggable="false" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: null,
      container: null,
      dragging: false,
      currentIndex: 0,
      prevTranslateX: 0,
      startPosition: 0,
    };
  },
  mounted() {
    this.container = document.querySelector('.swipe-carousel');
    this.items = document.querySelectorAll('.swipe-carousel-item');
    this.setEvent();
  },
  methods: {
    setEvent() {
      this.items.forEach((element, index) => {
        const config = {
          passive: true,
        };

        element.addEventListener(
          'touchstart',
          event => this.touchStart(event, index),
          config,
        );

        element.addEventListener('touchend', () => this.touchEnd(), config);

        element.addEventListener(
          'touchmove',
          event => this.touchMove(event),
          config,
        );

        element.addEventListener(
          'mousedown',
          event => this.touchStart(event, index),
          config,
        );

        element.addEventListener('mouseup', () => this.touchEnd(), config);

        element.addEventListener('mouseleave', () => this.touchEnd(), config);

        element.addEventListener(
          'mousemove',
          event => this.touchMove(event),
          config,
        );
      });
    },
    touchStart(event, index) {
      console.log(event);
      this.currentIndex = index;
      this.startPosition = this.getMousePositionX(event);
      this.dragging = true;

      this.swipeAnimation();
      this.container.classList.add('grabbing');
    },
    swipeAnimation() {
      this.setCarouselPosition();
      if (this.dragging) {
        this.swipeAnimationId = requestAnimationFrame(this.swipeAnimation);
      }
    },
    setCarouselPosition() {
      this.container.style.transform = `translate3d(${this.currentTranslate}px, 0, 0)`;
    },
    getMousePositionX(event) {
      return event.type.includes('mouse')
        ? event.clientX
        : event.touches[0].clientX;
    },
    touchEnd() {
      this.dragging = false;
      cancelIdleCallback(this.swipeAnimationId);

      const moveBy = this.currentTranslate - this.prevTranslateX;

      if (moveBy < -100 && this.currentIndex < 4) {
        this.currentIndex += 1;
      }

      if (moveBy > 100 && this.currentIndex > 0) {
        this.currentIndex -= 1;
      }

      this.setPositionByIndex();
      this.container.classList.remove('grabbing');
    },
    setPositionByIndex() {
      this.currentTranslate = this.currentIndex * -400;
      this.prevTranslateX = this.currentTranslate;
      this.setCarouselPosition();
    },
    translateItem() {},
    touchMove(event) {
      if (!this.dragging) {
        return;
      }

      const currentPosition = this.getMousePositionX(event);
      this.currentTranslate =
        this.prevTranslateX + currentPosition - this.startPosition;
      console.log('currentTranslate', this.currentTranslate);
    },
  },
};
</script>

<style lang="scss" scoped>
.swipe-carousel-wrapper {
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #fff;
  }

  .swipe-carousel-container {
    width: 400px;
    height: 500px;
    overflow: hidden;
    margin-top: 40px;
  }

  .swipe-carousel {
    height: 500px;
    width: calc(400 * 5px);
    display: flex;
    align-items: center;
    transition: all 0.25s linear;
    cursor: grab;

    &.grabbing {
      border-color: red;
      cursor: grabbing;
    }

    &-item {
      height: 100%;
      width: 400px;

      img {
        display: block;
        height: 110%;
        width: 100%;
        transform: translateY(-10%);
      }
    }
  }
}
</style>
