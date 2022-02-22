// const IconShareButton = {
//   template: `
//     <button @click="share"> && </button>
//   `,
//   data: function() {
//     return {
//       _isProcessing: false
//     }
//   },
//   methods: {
//     share: function() {
//       console.log(this._isProcessing)

//       if(this._isProcessing) {
//         return
//       }

//       if(!window.confirm('공유하시겠습니까?')) {
//         return
//       }

//       this._isProcessing = true
//       setTimeout(function() {
//         window.alert('공유되었습니다.')
//         this._isProcessing = false
//       }, 300)
//     }
//   }
// }

const TextShareButton = {
  template: '<button @click="share">{{ buttonLabel }}</button>',
  data: function() {
    return {
      buttonLabel: '공유하기',
      _isProcessing: true
    }
  },
  mounted: function() {
    console.log(this, this._isProcessing,this._data)
  },
  methods: {
    share: function() {
      console.log(this._isProcessing)
      if(this._isProcessing) {
        return
      }

      if(!window.confirm('공유하시겠습니까?')) {
        return
      }

      this._isProcessing = true
      const that = this
      setTimeout(function() {
        window.alert('공유되었습니다.')
        console.log(that,'finish')
        that._isProcessing = false
      }, 300)
    }
  }
}

const vm = new Vue({
  el: "#app",
  components: {
    // IconShareButton,
    TextShareButton
  }
})