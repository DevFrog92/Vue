<template>
  <section class="card-drop-zone-wrapper">
    <card :game="game" shape="rect" />
  </section>
</template>

<script>
import Card from '@/components/molecules/Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      game: {
        name: 'tower',
        version: 'v0.1',
      },
    };
  },
};
</script>

<style scoped>
.card-drop-zone-wrapper {
  height: 700px;
  width: 300px;
  border: 1px solid;
  padding: 1rem;
}
</style>
