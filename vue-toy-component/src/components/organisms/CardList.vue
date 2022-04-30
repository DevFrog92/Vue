<template>
  <section class="column-wrapper" :class="shape">
    <card
      v-for="game in games"
      :key="game.name"
      data-label="name"
      :game="game"
      @dropped="dropped"
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
  mounted() {
    this.addEvent();
  },
  methods: {
    addEvent() {
      const cardListWrapper = document.querySelector('.column-wrapper');

      cardListWrapper.addEventListener('dragover', ev => {
        ev.preventDefault();
        ev.target.classList.add('dragOver');
      });

      cardListWrapper.addEventListener('dragleave', ev => {
        ev.target.classList.remove('dragOver');
      });

      cardListWrapper.addEventListener('drop', ev => {
        ev.preventDefault();
        ev.target.classList.remove('dragOver');
      });

      cardListWrapper.addEventListener('dragend', ev => {
        ev.preventDefault();

        ev.target.classList.remove('dragOver');
      });
    },
    dropped(element) {
      console.log('dropped card list drop zone', element);
    },
  },
};
</script>

<style scoped>
.column-wrapper {
  border: 1px solid;
  width: 300px;
  max-height: 700px;
  min-height: 350px;
  padding: 1rem;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
  overflow-x: hidden;
}

.column-wrapper.wide {
  width: 600px;
}

.column-wrapper.dragOver {
  border: 1px dashed slateblue;
}
</style>
