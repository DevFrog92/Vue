<template>
  <div class="button_wrapper">
    <button @click="number++">button {{ index }} {{ number }}</button>
    <Button class="primary">Button</Button>
    <Button class="primary">Button</Button>
    <Button class="primary">Button</Button>
    <button @click="shareSMS">sms</button>
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
  methods: {
    shareSMS() {
      let linkString = 'sms:';
      const userAgent = navigator.userAgent.toLocaleLowerCase();

      if (userAgent.search('android') > -1) {
        linkString += `?body=hello`;
      } else if (
        userAgent.search('iphone') > -1 ||
        userAgent.search('ipad') > -1
      ) {
        linkString += `&body=hello`;
      }

      location.href = linkString;
    },
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
