Vue.directive('fallback-image', {
  bind: function(el) {
    // el: 디렉티브가 적용된 요소
    el.addEventListener('error', function() {
      el.src = "https://dummyimage.com/400x400/000/ffffff.png&text=no+image"
    })
  }
})

const vm = new Vue({
  el: "#app",
})