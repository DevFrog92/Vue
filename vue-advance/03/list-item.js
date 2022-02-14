// component(global)
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
  el: "#example",
  // component(local)
  components: {
    "list-item-title": {
      template: "<h1>hello</h1>"
    }
  }
})