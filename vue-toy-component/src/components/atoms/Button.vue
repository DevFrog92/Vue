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

<style></style>
