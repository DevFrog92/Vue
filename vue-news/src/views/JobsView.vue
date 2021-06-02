<template>
  <div class="jobs-wrapper">
    <p v-for="(job, index) in itemJobs" :key="index">
      <a :href="job.url" target="_blank">{{ job.title }}</a>
      <small>{{ job.time_ago }}, {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      itemJobs: "fetchedJobs",
    }),
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style>
</style>