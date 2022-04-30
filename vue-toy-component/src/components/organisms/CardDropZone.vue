<template>
  <section class="card-drop-zone-wrapper">
    <span
      ref="dropZoneWithCard"
      v-for="item in 2"
      :key="item"
      class="drop-zone-card"
    >
      <card
        :key="item"
        column="cardDropZone"
        :game="game"
        shape="rect"
        @dropped="dropped"
      />
    </span>
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
  methods: {
    dropped(element) {
      console.log('dropped card drop zone', element);
    },
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

.drop-zone-card {
  display: block;
  /* margin-bottom: 0.5rem; */
  overflow-x: hidden;
  position: relative;
}
</style>
