export default {
  items: state => {
    return state.items
  },
  selectedCountry(state){
    return state.selectedCountry
  },
  filteredItems: state => {
    return state.items.filter(item => {
      return item.country === state.selectedCountry
    })
  }
}