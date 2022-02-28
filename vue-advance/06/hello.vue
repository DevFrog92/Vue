<template>
  <p class="message">{{msg}}</p>
</template>

<script>
export default {
  data() {
    return  {
      msg: "This is vue component"
    }
  }
}
</script>

<style module>
.message {
  color: #42b983;
}
</style>