// 로딩 및 vVue가 전역 변수로 정의됬는지 확인
// 내부 assertion이 false라면 error msg를 출력하지만, true면 아무 동작하지 앉는다.
console.assert(typeof Vue !== 'undefined');

const items = [
  { name:"연필", price:300, quantity:0 },
  { name:"공책", price:400, quantity:0 },
  { name:"지우개", price:500, quantity:0 },
]

const vm = new Vue({
  el: "#app",
  data: {
    items: items,
    loggedInButton: "로그인 후에 구매 가능합니다.",
    isTrue: true,
  },
  computed: {
    // numberWithDelimiter: function() {
    // javascript의 toLocaleString으로
    // numberWithDelimiter filter와 동일한 기능을 수행할 수 있다.
    //   return function(value) {
    //     return value.toLocaleString()
    //   }
    // },
    totalPrice: function() {
      return this.items.reduce(function(sum, item){
        return sum + (item.price * item.quantity)
      }, 0)
    },
    totalPriceWithTax() {
      // ES5
      return Math.floor(this.totalPrice * 1.10)
    },
    canBuy(){
      return this.totalPrice >= 1000
    },
    errorMessageClass(){
      return !this.canBuy
    },
    errorMessageStyle(){
      return {
        border: this.canBuy ? "" : '1px solid yellow',
        color: this.canBuy ? "" : "yellow"
      }
    }
  },
  created(){
    console.log(this.errorMessageStyle)
  },
  filters:{
    numberWithDelimiter: function(value) {
      if(!value) {
        return '0'
      }

      return value.toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,')
    }
  }
});

window.vm = vm;