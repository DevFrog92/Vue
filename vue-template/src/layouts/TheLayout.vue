<template>
  <component :is="layout2">
    <slot />
  </component>
</template>

<script>
import DefaultLayout from './DefaultLayout';
import MobileLayout from './MobileLayout';

export default {
  components: {
    MobileLayout,
    DefaultLayout,
  },
  data() {
    return {
      layout: 'DefaultLayout',
    };
  },
  computed: {
    layout2() {
      return this.$route.meta.layout || 'DefaultLayout';
    },
  },
  created() {
    if (this.$route.meta) {
      this.layout = this.$route.meta.layout || 'DefaultLayout';
      console.log(this.layout);
      console.log(this.$route.meta);
    }
  },
};
</script>

<style></style>
