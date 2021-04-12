<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-desc">
          <router-link :to="`/user/${itemDetail.user}`">
            {{ itemDetail.user }}
          </router-link>
          <div class="time">
            {{ itemDetail.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ itemDetail.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="itemDetail.content"></div>
      <!-- {{ itemDetail.content }} -->
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      itemDetail: "fetchedItem",
    }),
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", id);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-desc {
  padding-left: 0.5rem;
}

.time {
  font-size: 0.7rem;
}
</style>