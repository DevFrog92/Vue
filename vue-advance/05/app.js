const MyButton = {
  template: `
  <button>
    <slot>OK</slot>
  </button>
  `
}

const Modal = {
  template: `
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
  `
}

const vm = new Vue({
  el: "#app",
  components: {
    MyButton,
    Modal
  }
})