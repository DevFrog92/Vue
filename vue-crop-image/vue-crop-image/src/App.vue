<template>
  <div id="app">
    <div class="cropper_wrapper">
      <img ref="crop" src="./assets/logo.png" alt="" class="cropped_image">
    </div>
    <div class="img-preview" ></div>

    <div class="button_wrapper">
      <button @click.prevent="cropImage">crop</button>
    </div>
  </div>
</template>

<script>
import Cropper from "cropperjs"
import 'cropperjs/dist/cropper.css';

export default {
  name: 'App',
  data() {
    return {
      cropper: null
    }
  },
  mounted() {
    console.log(this.$refs.crop)
    this.cropper = new Cropper(this.$refs.crop, {
      viewMode: 3,
      aspectRatio: 1,
      preview: ".img-preview",
      modal: true,
    })
  },
  methods: {
    cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.cropper.getCroppedCanvas().toBlob(this.blobToFile);
      // const file = this.dataURLtoFile(this.cropImg, "croppedImage")
      // console.log("transfer base64 to file object", file)

    },
    blobToFile(blob){
      console.log("blob", blob)
      const file = new File([blob], 'test', { type: blob.type })

      console.log(file)
    },
    dataURLtoFile(dataurl, fileName) {
      const arr = dataurl.split(',')
      const mime =arr[0].match(/:(.*?);/)[1]
      const bstr = atob(arr[1])
      console.log(bstr)
      let n = bstr.length
      const u8arr = new Uint8Array(n)

      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }

      console.log(u8arr)
      return new File([u8arr], fileName, {type:mime});
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;

}
.cropper_wrapper {
  width: 600px;
  height: 600px;
}

.cropped_image {
  display: block;
  max-width: 100%;
  border: 1px solid;
}

.img-preview {
  display: block;
  width: 100px;
  border: 1px solid;
  overflow: hidden;
  border-radius: 50%;
}

.cropper-view-box,
.cropper-face {
  border-radius: 50%;
}
</style>
