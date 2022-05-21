<template>
  <div>
    <p>여행</p>
    <ul>
      <li v-for="item in items" :key="item.attraction" @click="goCountry(item.country)">
        <span>country: {{item.country}}</span>
        <span>attraction: {{item.attraction}}</span>
        <span>city: {{item.city}}</span>
        <span>entrance_fee: {{item.entrance_fee | currency}}</span>
      </li>
    </ul>
    <travel-list-detail></travel-list-detail>
  </div>
</template>

<script>
import TravelListDetail from "./TravelListDetail.vue"
export default {
  components: {
    TravelListDetail
  },
  methods: {
    goCountry(inValue) {
      this.$store.state.selectedCountry = inValue
    }
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat('de-DE', {style:'currency', currency: "EUR"}).format(value)
    }
  },
  computed: {
    items() {
      return this.$store.getters.items
    }
  }
}
</script>

<style>

</style>