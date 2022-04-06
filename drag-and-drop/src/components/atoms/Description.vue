<template>
  <p class="desc">
    <span class="text-bold">{{ desc }}</span>
    <span class="text-small"
      ><small>({{ version }})</small></span
    >
  </p>
</template>

<script>
export default {
  props: {
    desc: {
      type: String,
      default: '',
    },
    version: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.desc {
  display: flex;
  flex-direction: column;
  padding: 0.1rem;
  margin-top: 1rem;
  text-align: right;
  width: 100%;
}

.text-bold {
  font-size: bold;
}
</style>
