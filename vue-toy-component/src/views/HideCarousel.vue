<template>
  <div class="container">
    <Lock />
    <div class="carousel" :style="`width: ${carouselWidth}px`">
      <div class="rail">
        <div
          v-for="item in numOfItems"
          :key="item"
          :style="`
        width: ${calcItemWidth(item)}px;
        height: ${calcItemHeight(item)}px; margin-right: ${itemMargin}px;
        `"
          class="item"
          :class="isActiveItem(item)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Lock from '@/components/atoms/Lock.vue';
export default {
  components: {
    Lock,
  },
  data() {
    return {
      containerWidth: 0,
      itemWidth: 160,
      itemHeight: 172,
      itemMargin: 20,
      activeIndex: 2,
      numOfItems: 4,
      widthScaleRatio: 1.275,
      heightScaleRatio: 1.267,
      animationTimer: null,
    };
  },
  computed: {
    carouselWidth() {
      return (
        (this.itemWidth + this.itemMargin) * 2 +
        this.itemWidth * this.widthScaleRatio
      );
    },
    calcItemWidth() {
      return index => {
        return index === this.activeIndex
          ? this.itemWidth * this.widthScaleRatio
          : this.itemWidth;
      };
    },
    calcItemHeight() {
      return index => {
        return index === this.activeIndex
          ? this.itemHeight * this.heightScaleRatio
          : this.itemHeight;
      };
    },
    isActiveItem() {
      return index => {
        return index === this.activeIndex ? 'active' : '';
      };
    },
  },
  mounted() {
    this.animationTimer = setTimeout(() => {
      this.translateXDirection();
    }, 500);
  },
  methods: {
    translateXDirection() {
      const rail = document.querySelector('.rail');

      this.activeIndex += 1;
      rail.style.transform = `translate3d(-${
        this.itemWidth + this.itemMargin
      }px, 0, 0)`;
    },
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.carousel {
  height: 218px;
  overflow: hidden;
}

.rail {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 1.2s ease-in-out;
}

.item {
  height: 172px;
  border-radius: 20px;
  flex-shrink: 0;
  background: #fff;
  transition: all 0.8s ease-in-out;
}

.item.active {
  background-color: tomato;
}
</style>
