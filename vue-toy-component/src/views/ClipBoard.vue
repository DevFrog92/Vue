<template>
  <div>
    <p class="target">복사할 텍스트입니다.</p>
    <button @click="copy">복사</button>
    <input type="text" v-model="text" />
    <button @click="copy('input')">input 복사</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    };
  },
  methods: {
    copy(target = '') {
      const text = document.querySelector('.target');
      console.log(text.textContent);
      navigator.clipboard
        .writeText(target === 'input' ? this.text : text.textContent)
        .then(() => {
          console.log('복사완료');
        });
    },
  },
};
</script>

<style></style>
