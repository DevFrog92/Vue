<template>
  <section class="column-wrapper" :class="shape">
    <card
      v-for="game in games"
      :key="game.name"
      data-label="name"
      :game="game"
    />
  </section>
</template>

<script>
import Card from '@/components/molecules/Card.vue';
export default {
  props: {
    games: {
      type: Array,
      default: () => [],
    },
    shape: {
      type: String,
      default: '',
    },
  },
  components: {
    Card,
  },
};
</script>

<style scoped>
.column-wrapper {
  border: 1px solid;
  width: 300px;
  height: 700px;
  padding: 1rem;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
  overflow-x: hidden;
}

.column-wrapper.wide {
  width: 600px;
}
</style>
