const MyButton = {
  props: ['href', 'tag'],
  template: `
    <a v-if="(!tag && href) || tag === 'a'" :href="href || '#'">
      <slot></slot>
    </a>
    <span v-else-if="tag === 'span'">
      <slot></slot>
    </span>
    <button v-else>
      <slot></slot>
    </button>
  `
}

const MyButtonByRenderFunction = {
  props: ['href', 'tag'],
  render: function(createElement) {
    // 요소의 이름을 문자열로 지정할 수 있다.
    const tag = this.tag || (this.href ? 'a' : "button")
    return createElement(tag, {
      attrs: {
        href: this.href || '#'
      }
      // children VNode
    }, this.$slots.default)
  }
}

const vm = new Vue({
  el: "#app",
  components: {
    MyButtonByRenderFunction
  }
})