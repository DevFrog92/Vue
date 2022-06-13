<template>
  <div class="button_wrapper">
    <button @click="number++">button {{ index }} {{ number }}</button>
    <Button class="primary">Button</Button>
    <Button class="primary">Button</Button>
    <Button class="primary">Button</Button>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button.vue';

export default {
  components: {
    Button,
  },
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  // eslint-disable-next-line vue/no-shared-component-data
  data: {
    number: 0,
  },
};
</script>

<style scoped>
.button_wrapper {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button {
  margin-bottom: 1rem;
  width: 300px;
  height: 52px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
</style>
