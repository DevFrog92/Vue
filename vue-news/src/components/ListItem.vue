<template>
  <div>
    <ul class="news-list">
      <li
        v-for="(item, index) in this.$store.state.news"
        :key="index"
        class="post"
      >
        <!-- points area -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- etc info -->
        <div>
          <p class="news-title">
            <a :href="item.url" target="_blank">
              {{ item.title }}
            </a>
          </p>

          <small class="link-text">
            {{ item.time_ago }}
            by
            <router-link :to="`/user/${item.user}`" class="link-text">{{
              item.user
            }}</router-link></small
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 5rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>