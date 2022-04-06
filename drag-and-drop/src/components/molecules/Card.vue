<template>
  <section class="card" :class="cardShape">
    <thumbnail :thumbnailName="game.name" />
    <description :desc="game.name" :version="game.version" />
  </section>
</template>

<script>
import Thumbnail from '@/components/atoms/Thumbnail.vue';
import Description from '@/components/atoms/Description.vue';

export default {
  props: {
    game: {
      type: Object,
      default: () => ({}),
    },
    shape: {
      type: String,
      default: 'square',
    },
  },
  components: {
    Thumbnail,
    Description,
  },
  computed: {
    cardShape() {
      return `card-${this.shape}`;
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  cursor: grab;
}

.card-rect {
  flex-direction: row;
}
</style>
