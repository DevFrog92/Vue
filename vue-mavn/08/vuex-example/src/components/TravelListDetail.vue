<template>
  <section>
    <p>{{selectedCountry}} 여행</p>
    <ul>
      <li v-for="item in filteredItems" :key="item.attraction">
        <span>country: {{item.country}}</span>
        <span>attraction: {{item.attraction}}</span>
        <span>city: {{item.city}}</span>
        <span>entrance_fee: {{item.entrance_fee | currency}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  filters: {
    currency(value) {
      return new Intl.NumberFormat('de-DE', {style:'currency', currency: "EUR"}).format(value)
    }
  },
  computed: {
    selectedCountry(){
      return this.$store.getters.selectedCountry
    },
    filteredItems() {
      return this.$store.getters.filteredItems
    }
  }
}
</script>

<style>

</style>