<template>
  <section class="check-list-wrapper">
    <ul
      v-for="item in checkList"
      :key="item.id"
      class="check-list"
    >
      <label>{{ item.text }}</label>
      <input
        v-model="selectedItems"
        type="checkbox"
        :value="item.text"
        class="check-list-item"
        @change="checked(item)"
      >
    </ul>
  </section>
</template>

<script>
export default {
  name: 'CheckList',
  data() {
    return {
      checkList: [
        { id: 1, text: 'HTML', },
        { id: 2, text: 'CSS', },
        { id: 3, text: 'Javascript', },
        { id: 4, text: 'Typescript', },
        { id: 5, text: 'Vue', },
        { id: 6, text: 'React', },
        { id: 7, text: 'Svelt', },
        { id: 8, text: 'Node.js', }
      ],
      selectedItems: [],
    };
  },
  methods: {
    checked(item) {
      this.$gtag.event('click', {
        event_category: 'checkList',
        event_label: 'checkedItem',
        value: item.text,
      });
    },
  },
};
</script>

<style>

</style>
