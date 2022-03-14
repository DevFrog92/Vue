<template>
  <section>
    <ul>
      <li
        v-for="button in buttons"
        :key="button.id"
        class="button-item"
      >
        {{ button.id }}
        <button @click="start(button.id)">
          {{ button.start }}
        </button> |
        <button @click="finish(button.id)">
          {{ button.finish }}
        </button>
      </li>
    </ul>

    <button @click="buttonClick">
      button click
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {
          id: 'emoticon',
          start: 'start',
          finish: 'finish',
        },
        {
          id: 'balloon',
          start: 'start',
          finish: 'finish',
        },
        {
          id: 'emotion',
          start: 'start',
          finish: 'finish',
        },
        {
          id: 'money1',
          start: 'start',
          finish: 'finish',
        }
      ],
    };
  },
  methods: {
    start(game) {
      alert(`${game} is start`);
      this.$gtag.event('click', {
        event_category: 'game_start',
        event_label: game,
        game_status: 'start',
      });
    },
    finish(game) {
      alert(`${game} is over`);
      this.$gtag.event('click', {
        event_category: 'game_finish',
        event_label: game,
        game_status: 'finish',
      });
    },
    buttonClick() {
      this.$gtag.event('click', {
        event_category: 'game_start',
        event_label: 'tower',
        button_category: 'game',
        game_status: 'start',
        clicked_button_label: 'tower',
      });
    },
  },
};
</script>

<style scoped>
.button-item {
  margin-bottom: 1rem;
}
</style>
