<template>
  <div>
    {{ movies }}
  </div>
</template>

<script>
export default {
  name: "ServerExpressMovieview",
  data() {
    return {
      movies: [],
    };
  },
  mounted() {},
  methods: {},
  created() {
    this.$http.get("/api/movies").then((response) => {
      this.movies = response.data;
    });
  },
};
</script>

<style lang="scss" scoped>
</style>