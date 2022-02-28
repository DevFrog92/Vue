<template>
  <p :class="$style.message">{{msg}}</p>
</template>

<script>
export default {
  data() {
    return  {
      msg: "This is vue component"
    }
  },
  created(){
    console.log(`css modules: ${this.$style}`)
  }
}
</script>

<style module>
.message {
  color: #42b983;
}
</style>