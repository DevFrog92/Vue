<template>
  <p>{{ count_o}}</p>
  <button @click="count_o++">Options API count++</button>
  <p>{{ count_c_1}}</p>
  <button @click="count_c_1++">Options API 1st count++</button>
  <p>{{ count_c_2}}</p>
  <button @click="count_c_2++">Options API 2nd count++</button>
  <p>state: {{state}}</p>
  <button @click="onStop()">watchEffect stop</button>
</template>

<script>
import { ref, watch, watchEffect} from "vue"

export default {
  data(){
    return {
      count_o: 0,
    }
  },
  watch:{
    count_o(cur, prev){
      console.log(`Optional API Watch: ${prev} ==> ${cur}`)
    }
  },
  setup(){
    const count_c_1 = ref(0)
    const count_c_2 = ref(0)
    const state = ref(0)

    watch(
      count_c_1,
      (cur, prev) => {
        console.log(`composition API Watch: ${prev} ==> ${cur}`)
      },
      {
        immediate: true
      }
    )

    watch(
      [count_c_1, count_c_2],
      (cur, prev) => {
        console.log(`composition API multiple Watch: ${prev} ==> ${cur}`)
      }
    )

    const stop = watchEffect(
      () => {
        console.log(`Composition API watchEffect Called ${count_c_2.value}`)
      },
      {
        flush: 'post'
      }
    )

    const onStop = () => {
      state.value = 'Stop',
      stop()
    }

    return {
      count_c_1,
      count_c_2,
      state,
      onStop
    }
  }
}
</script>

<style>

</style>