<template>
  <section>
    <img ref="preview" src="" alt="" class="preview-image">
    <input ref="thumbnail" type="file" name="image" accept=".jpg, .jpeg, .png" @change="onChange">
    <button @click="onUploadImage">upload</button>
  </section>
</template>

<script>
export default {
  data(){
    return {
      image:null
    }
  },
  methods: {
    onChange(e) {
      this.image = e.target.files[0]
      const previewImage = window.URL.createObjectURL(this.image)

      this.$refs.preview.src = previewImage
    },
    onUploadImage(){
      const formData = new FormData()
      formData.append('thumbnail', this.image)
      for(let key of formData.entries()){
        console.log(key[0],key[1])
      }
      console.log(formData)
    }
  }
}
</script>

<style scoped>
.preview-image {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  border: 1px solid;
}

</style>