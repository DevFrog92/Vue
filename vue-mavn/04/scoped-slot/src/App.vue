<template>
  <div id="app">
    <travel-list :items="cities">
      <template slot-scope="{items}">
        <p v-for="item in items" :key="item">{{ item }}</p>
      </template>
    </travel-list>
    <travel-list #default="{items}" :items="cities">
        <p v-for="item in items" :key="item">{{ item }}</p>
    </travel-list>
  </div>
</template>

<script>
import TravelList from "./components/TravelList.vue"
export default {
  name: 'App',
  components: {
    TravelList
  },
  data(){
    return {
      cities: ["Paris", "Seoul", "Budapest", "Seattle", 'Japan']
    }
  }
}
</script>

<style>

</style>
