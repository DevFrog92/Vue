<template>
  <article class="guide-wrapper">
    <slider />
  </article>
</template>

<script>
import Slider from '@/components/organisms/Slider.vue';

export default {
  components: {
    Slider,
  },
};
</script>

<style scoped>
.guide-wrapper {
  overflow: hidden;
}
</style>
