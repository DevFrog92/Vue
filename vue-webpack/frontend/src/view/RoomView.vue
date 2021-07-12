<template>
  <div>
    <div @click="exitRoom">close</div>
    <div id="video-grid"></div>
  </div>
</template>

<script>
import { init } from "@/assets/js/script.js";
export default {
  name: "Room",
  data() {
    return {};
  },
  created() {
    console.log(this.$route.params.roomId);
  },
  mounted() {
    init();
  },
  methods: {
    exitRoom() {
      window.open("", "_self", "");
      window.close();
      return false;
    },
  },
};
</script>
