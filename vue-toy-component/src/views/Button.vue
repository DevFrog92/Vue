<template>
  <button @click="number++">button {{ index }} {{ number }}</button>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  // eslint-disable-next-line vue/no-shared-component-data
  data: {
    number: 0,
  },
};
</script>

<style></style>
