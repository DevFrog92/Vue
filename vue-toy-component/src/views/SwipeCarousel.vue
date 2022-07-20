<template>
  <div class="swipe-carousel-wrapper">
    <h1>Swipe carousel</h1>
    <ul class="swipe-carousel">
      <li class="swipe-carousel-item">
        <img src="../assets/images/slider_01.jpeg" alt="" draggable="false" />
      </li>
      <li class="swipe-carousel-item">
        <img src="../assets/images/slider_02.jpeg" alt="" draggable="false" />
      </li>
      <li class="swipe-carousel-item">
        <img src="../assets/images/slider_03.jpeg" alt="" draggable="false" />
      </li>
      <li class="swipe-carousel-item">
        <img src="../assets/images/slider_04.jpeg" alt="" draggable="false" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: null,
      container: null,
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

        element.addEventListener(
          'touchend',
          () => this.touchEnd(index),
          config,
        );

        element.addEventListener(
          'touchmove',
          () => this.touchMove(index),
          config,
        );

        element.addEventListener(
          'mousedown',
          event => this.touchStart(event, index),
          config,
        );

        element.addEventListener('mouseup', () => this.touchEnd(index), config);

        element.addEventListener(
          'mouseleave',
          () => this.touchEnd(index),
          config,
        );
      });
    },
    touchStart(event, index) {
      console.log(event);
      console.log(this.getMousePositionX(event));
      this.container.classList.add('grabbing');
    },
    getMousePositionX(event) {
      return event.type.includes('mouse')
        ? event.clientX
        : event.touches[0].clientX;
    },
    touchEnd(index) {
      this.container.classList.remove('grabbing');
    },
    translateItem() {},
    touchMove() {},
  },
};
</script>

<style lang="scss" scoped>
.swipe-carousel-wrapper {
  width: 100vw;
  height: 100vh;
  background-color: rgb(18, 100, 64);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #fff;
  }

  .swipe-carousel {
    width: 660px;
    height: 500px;
    overflow: hidden;
    border: 1px solid #fff;

    &.grabbing {
      border-color: red;
    }

    &-item {
      height: 100%;
      width: 100%;

      img {
        display: block;
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
