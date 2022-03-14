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
      <button
        type="button"
        @click="signupOfCompany"
      >
        signup for company
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
  mounted() {
    console.log('here', this.$route);
  },
  methods: {
    signup() {
      this.$gtag.event('sign_up', {
        signup_status: true,
        signup_label: 'personal',
      });

      this.id = '';
    },
    signupOfCompany() {
      this.$gtag.event('sign_up', {
        signup_status: true,
        signup_label: 'company',
      });

      this.id = '';
    },
  },
};
</script>

<style>

</style>
