<template>
  <article class="container">
    <canvas class="guide-intro-animation" width="1920" height="1080"></canvas>
  </article>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(this.setImages);
  },
  data() {
    return {
      animationIndex: 0,
      animationId: null,
      context: null,
      images: [],
    };
  },
  methods: {
    setImages() {
      const numOfImages = 141;
      const canvas = document.querySelector('.guide-intro-animation');
      let imgElem;

      this.context = canvas.getContext('2d');
      for (let i = 1; i < numOfImages; i++) {
        imgElem = new Image();
        imgElem.src = require(`../assets/images/guide/intro-animation/emoticon/img_${i}.jpg`);
        this.images.push(imgElem);
      }

      this.$nextTick(() => {
        this.playAnimation();
      });
    },
    playAnimation() {
      this.context.drawImage(this.images[this.animationIndex], 0, 0);
      console.log(this.animationIndex);
      this.animationIndex++;

      if (this.animationIndex >= this.images.length) {
        cancelAnimationFrame(this.animationId);
        return;
      }

      this.animationId = requestAnimationFrame(this.playAnimation);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
}
.guide-intro-animation {
  width: 500px;
}
</style>
