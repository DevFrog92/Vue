<template>
  <div ref="dropZone" class="drop-zone-wrapper" :class="isActive"></div>
</template>

<script>
export default {
  props: {
    activeStatus: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isActive() {
      return this.activeStatus ? 'active' : null;
    },
  },
  mounted() {
    this.$nextTick(this.addEvent);
  },
  methods: {
    addEvent() {
      const dropZone = this.$refs.dropZone;

      // dropZone.addEventListener('dragover', ev => {
      //   ev.preventDefault();
      //   dropZone.classList.add('active');
      // });

      // dropZone.addEventListener('drop', ev => {
      //   ev.preventDefault();
      //   dropZone.classList.remove('active');
      // });

      // dropZone.addEventListener('dragleave', ev => {
      //   dropZone.classList.add('active');
      // });
    },
  },
};
</script>

<style scoped>
.drop-zone-wrapper {
  width: 100%;
  position: relative;
  height: 0.5rem;
  transition: height 0.2s ease-in-out;
}

.drop-zone-wrapper.active {
  height: 1rem;
  background-color: #eee;
}
</style>
