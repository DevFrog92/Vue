<template>
  <div>
    <p v-for="(item,index) in itemNews" :key="index">
      <a :href="item.url" target="_blank">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by 
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      itemNews : 'fetchedNews'
    })
  },
  created(){
    this.$store.dispatch('FETCH_NEWS');

    // 1.
    // fetchNewsLsit()
    // .then(response => {
    // 2.
    //   this.users = response.data;
    // })
    // .catch(error => {
    //   console.log(error);
    // })
  }
}
</script>

<style>

</style>