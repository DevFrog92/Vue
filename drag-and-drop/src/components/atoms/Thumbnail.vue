<template>
  <img
    draggable="false"
    :src="thumbnailIcon"
    alt="thumbnail icon"
    class="thumbnail"
  />
</template>

<script>
export default {
  props: {
    thumbnailName: {
      type: String,
      default: '',
    },
  },
  computed: {
    thumbnailIcon() {
      return require(`@/assets/icons/thumbnail/${this.thumbnailName}.svg`);
    },
  },
};
</script>

<style scoped>
.thumbnail {
  border: 1px solid;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  pointer-events: none;
}
</style>
