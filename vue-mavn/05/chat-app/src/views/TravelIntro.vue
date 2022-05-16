<template>
  <section class="container intro">
    <div class="card">
      <div class="card-content">
        <h4>여행이란?</h4>
        <form @submit.prevent="enterChat">
          <input type="text" name="name" v-model="name" />
          <p v-if="feedback" class="red-text">
            {{ feedback }}
          </p>
          <button class="primary-btn">입장하기</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TravelIntro',
  data() {
    return {
      name: null,
      feedback: null,
    };
  },
  methods: {
    enterChat() {
      this.name
        ? this.$router.push({ name: 'Chat', params: { name: this.name } })
        : (this.feedback = '대화를 하려면 이름을 입력하세요.');
    },
  },
};
</script>

<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 2rem;
    color: #fff;
  }
}
</style>
