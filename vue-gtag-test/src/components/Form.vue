<template>
  <div @submit.prevent>
    <div>auth</div>
    <button
      type="button"
      @click="auth"
    >
      self authentication
    </button>
  </div>
</template>

<script>
import { gtag_selfAuthentication, } from '@/util/gtags';

export default {
  methods: {
    auth() {
      gtag_selfAuthentication();
    },
  },
};
</script>

<style>

</style>
