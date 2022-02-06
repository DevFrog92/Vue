<template>
  <h2>Small Items</h2>
  <p v-for="(item, key) in small_items_o" :key="key">{{item}}</p>
  <p v-for="(item, key) in small_items_c" :key="key">{{item}}</p>
  <hr>
  <p v-for="(item, key) in big_items_o" :key="key">{{item}}</p>
  <p v-for="(item, key) in big_items_c" :key="key">{{item}}</p>
</template>

<script>
import { reactive, computed } from "vue"
export default {
  data(){
    return {
      arr: [
        {id:1, text:"1번 옵션 아이템"},
        {id:2, text:"2번 옵션 아이템"},
        {id:3, text:"3번 옵션 아이템"},
        {id:4, text:"4번 옵션 아이템"},
        {id:5, text:"5번 옵션 아이템"},
      ]
    }
  },
  computed: {
    small_items_o(){
      return this.arr.filter((i) => i.id < 3)
    },
    big_items_o(){
      return this.arr.filter((i) => i.id >= 3)
    },
  },
  setup(){
    const arr = reactive([
        {id:1, text:"1번 옵션 아이템"},
        {id:2, text:"2번 옵션 아이템"},
        {id:3, text:"3번 옵션 아이템"},
        {id:4, text:"4번 옵션 아이템"},
        {id:5, text:"5번 옵션 아이템"},
      ])
    const small_items_c = computed(() => {
      return arr.filter((i) => i.id < 3)
    })

    const big_items_c = computed(() => {
      return arr.filter((i) => i.id >= 3)
    })

    return {
      small_items_c,
      big_items_c
    }
  }
}
</script>

<style>

</style>