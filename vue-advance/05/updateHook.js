Vue.directive('fallback-image', {
  bind: function(el, binding) {
    // el: 디렉티브가 적용된 요소
    console.log(el, binding)
    const once = binding.modifiers.once
    el.addEventListener('error', function onError() {
      el.src = binding.value

      // 수정자를 통해서 한번만 동작할 수 있도록 구현되었다.
      if(once) {
        el.removeEventListener("error", onError)
      }
    })
  },
  update: function(el, binding) {
    console.log('update', binding)
    if(binding.oldValue !== binding.value && binding.oldValue === el.src) {
      el.src = binding.value
    }
  }
})

const vm = new Vue({
  el: "#app",
  data: function() {
    return {
      altText: "logo",
      noImageUrl: "https://dummyimage.com/400x400/000/ffffff.png?text=no+image"
    }
  }
})