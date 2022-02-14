// component
Vue.component('list-item', {
  template: "<li>foo: {{ contents }}</li>",
  data: function(){
    return {
      contents: "bar"
    }
  }
})

// root
new Vue({
  el: "#example"
})