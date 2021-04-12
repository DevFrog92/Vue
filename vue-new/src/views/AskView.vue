<template>
  <div>
    <p v-for="(ask,index) in askItems" :key="index">
      <router-link :to="`/item/${ask.id}`">{{ ask.title }}</router-link>
      <small>{{ ask.time_ago }} by {{ ask.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed : {
    // 4. 객체 표기법 : 속성을 다른 변수 명으로 변경하여 사용할 수 있다.
    ...mapGetters({
      askItems : 'fetchedAsk'
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
  created(){
    this.$store.dispatch('FETCH_ASK');
  },
}
</script>

<style>

</style>