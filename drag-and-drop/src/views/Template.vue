<template>
  <article class="template-wrapper">
    <column :games="games" shape="wide" />
    <card-drop-zone />
  </article>
</template>

<script>
import Column from '@/components/organisms/CardList.vue';
import CardDropZone from '@/components/organisms/CardDropZone.vue';

export default {
  components: {
    Column,
    CardDropZone,
  },
  data() {
    return {
      game: {
        name: 'money1',
        version: 'v0.1',
      },
      games: [
        {
          name: 'money1',
          version: 'v0.1',
        },
        {
          name: 'emoticon',
          version: 'v0.1',
        },
        {
          name: 'emotion',
          version: 'v0.1',
        },
        {
          name: 'balloon',
          version: 'v0.1',
        },
        {
          name: 'alphabet',
          version: 'v0.1',
        },
        {
          name: 'bar',
          version: 'v0.1',
        },
        {
          name: 'card',
          version: 'v0.1',
        },
        {
          name: 'detection',
          version: 'v0.1',
        },
        {
          name: 'face',
          version: 'v0.1',
        },
        {
          name: 'go',
          version: 'v0.1',
        },
        {
          name: 'number',
          version: 'v0.1',
        },
      ],
    };
  },
};
</script>

<style scoped>
.template-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
