<template>
  <div>
    <ul class="item-list">
      <li v-for="(ask, index) in askItems" :key="index" class="post">
        <div class="points">
          {{ ask.points }}
        </div>
        <div>
          <p class="ask-title">
            <router-link :to="`/item/${ask.id}`">{{ ask.title }}</router-link>
          </p>
          <small class="user-info"
            >{{ ask.time_ago }} by
            <router-link :to="`/user/${ask.user}`">{{ ask.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    // 4. 객체 표기법 : 속성을 다른 변수 명으로 변경하여 사용할 수 있다.
    ...mapGetters({
      askItems: "fetchedAsk",
    }),

    // 3. 배열 표기법 : 속성을 바로 사용할 수 있다.
    // ...mapGetters([
    //   'fetchedAsk'
    // ]),

    // 2.
    // ...mapState({
    //   ask : state => state.ask
    // })

    // 1.
    // ask(){
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style scoped>
.item-list {
  margin: 0;
  padding: 0;
}
.post {
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
.ask-title {
  margin: 0;
}

.user-info {
  color: #828282;
}
</style>