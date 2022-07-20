<template>
  <section ref="triggerSection">intersection observer</section>
</template>

<script>
export default {
  data() {
    return {
      observer: null,
      options: {
        root: null,
        threshold: 1,
      },
    };
  },
};
</script>

<style></style>
