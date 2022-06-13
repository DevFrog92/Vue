<template>
  <button
    :class="classes"
    :disabled="disabled"
    :type="type"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      // TODO: update가 필요
      const cls = this.type === 'text' ? '-' + this.type : '';
      return [`button${cls}`];
    },
  },
  methods: {
    handleClick(ev) {
      this.$emit('click', ev);
    },
  },
};
</script>

<style scoped>
button {
  margin-bottom: 1rem;
  width: 300px;
  height: 52px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.primary {
  background-color: rgb(54, 112, 205);
  border: 1px solid rgb(54, 112, 205);
  color: var(--white);
}

@media (hover: hover) and (pointer: fine) {
  .primary:hover {
    background-color: rgb(27, 101, 221);
    border: 1px solid rgb(27, 101, 221);
  }

  .primary:active {
    background-color: rgb(27, 101, 221);
    border: 1px solid rgb(27, 101, 221);
  }
}
</style>
