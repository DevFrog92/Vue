<template>
  <div class="card-wrapper">
    <img draggable="false" :src="backgroundImage" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    backgroundImage() {
      return require(`@/assets/images/${this.index}.jpeg`);
    },
  },
};
</script>

<style scoped>
.card-wrapper {
  height: 600px;
  width: 100%;
  border: 1px solid;
  user-select: none;
}

.card-wrapper img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
</style>
