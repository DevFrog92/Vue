<template>
  <section>
    <form @submit.prevent>
      <label for="id">ID</label>
      <input
        v-model="id"
        type="text"
        class="id"
      >
      <button
        type="button"
        @click="signup"
      >
        signup
      </button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: '',
    };
  },
  methods: {
    signup() {
      this.$gtag.event('sign_up', {
        signup_status: true,
      });

      this.id = '';
    },
  },
};
</script>

<style>

</style>
