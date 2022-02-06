<template>
  <p>줄임말을 입력하세요.</p>
  <input type="text" :value="abbr">
  <input type="text" v-model="normal">
  <hr>
  <abbr :title="normal">{{abbr}}</abbr>
  <hr>
  <p> {{ counter + counter2}}</p>
  <button @click="counter++">click</button>
  <button @click.stop="onclick">click</button>
</template>

<script>
import {ref} from "vue"

export default {
  setup(){
    const abbr = ref('YOPT')
    const normal = ref('Yong Project team')
    // 함수에서 직접 변경한다.
    const counter = ref(0)
    const onclick = (evt) => {
      if(evt){
        evt.preventDefault()
        counter.value++
      }
    }
    return {
      abbr,
      normal,
      counter,
      onclick
    }
  },
  data(){
    return {
      counter2:0
    }
  },
  methods: {
    onclick2(evt){
      if(evt){
        evt.preventDefault()
      }

      this.counter2++
    }
  }
}
</script>

<style>

</style>