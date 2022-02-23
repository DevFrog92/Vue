<template>
  <section class="image_crop_wrapper">
    <div class="background" />
    <div class="image_crop_inner_wrapper">
      <div class="cropper_wrapper">
        <img
          ref="crop"
          class="cropped_image"
        >
      </div>
      <div class="side_wrapper">
        <div class="img_preview_wrapper">
          <div class="img_preview" />
        </div>
        <label
          for="thumbnail"
          class="upload_button"
        >
          {{ $t('cropModal.UPLOAD_THUMBNAIL') }}
        </label>
        <input
          id="thumbnail"
          type="file"
          name="image"
          accept=".jpg, .jpeg, .png"
          class="upload_image"
          @change="upload"
        >
        <div class="button_wrapper">
          <button
            class="command_btn"
            @click="moveImage"
          >
            {{ $t('cropModal.MOVE') }}
          </button>
          <button
            class="command_btn"
            @click="resetCropper"
          >
            {{ $t('cropModal.RESET') }}
          </button>
          <button
            class="command_btn"
            @click="rotateImage(90)"
          >
            <v-icon>
              mdi-rotate-right
            </v-icon>
          </button>
          <button
            class="command_btn"
            @click="rotateImage(-90)"
          >
            <v-icon>
              mdi-rotate-left
            </v-icon>
          </button>
        </div>
        <div class="footer">
          <button1
            class="footer_button error mr-8"
            @click="closeModal"
          >
            {{ $t(`common.CANCEL`) }}
          </button1>
          <button
            class="footer_button"
            @click="cropImage"
          >
            {{ $t(`common.SAVE`) }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Cropper from "cropperjs"
import "cropperjs/dist/cropper.css"

export default {
  components: {
    Spinner,
  },
  data() {
    return {
      uploadedImageUrl: null,
      cropper: null,
      uploadedImageName: "",
      uploading: false,
    }
  },
  beforeDestroy() {
    if (!this.cropper) {
      return
    }

    this.cropper.destroy()
    this.uploading = false
  },
  methods: {
    upload(e) {
      const thumbnail = e.target.files[0]
      const reader = new FileReader()

      this.setLoadEvent(reader, thumbnail)

      if (thumbnail) {
        reader.readAsDataURL(thumbnail)
      }
    },
    setLoadEvent(reader, thumbnail) {
      reader.addEventListener("load", () => {
        this.fileReaderLoadHandler(reader, thumbnail)
      })
    },
    fileReaderLoadHandler(reader, thumbnail) {
      this.createCropper(reader.result)
      this.uploadedImageName = thumbnail.name
    },
    createCropper(imgUrl) {
      this.$refs.crop.src = imgUrl

      if (this.cropper) {
        this.cropper.destroy()
      }

      this.cropper = new Cropper(this.$refs.crop, {
        viewMode: 1,
        aspectRatio: 1,
        movable: true,
        preview: ".img_preview",
        minCropBoxWidth: 100,
        checkCrossOrigin: false,
      })
    },
    cropImage() {
      this.uploading = true
      this.cropper.getCroppedCanvas().toBlob(this.blobToFile)
    },
    blobToFile(blob) {
      const file = new File([blob], this.uploadedImageName, { type: blob.type, })

      this.$emit("uploadImage", file)
    },
    moveImage() {
      this.cropper.setDragMode("move")
    },
    resetCropper() {
      this.cropper.reset()
    },
    rotateImage(deg) {
      this.cropper.rotate(deg)
    },
    closeModal() {
      this.$emit("closeModal")
    },
  },
}
</script>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
}

.spinner_component {
  z-index: 200;
}

.image_crop_inner_wrapper {
  position: fixed;
  width: 900px;
  height: 600px;
  background-color: #fff;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  border: 1px solid;
  border-radius: 1rem;
  overflow: hidden;
}

.cropper_wrapper {
  width: 600px;
  height: 600px;
  background-image: url("../../assets/logo.svg");
  background-repeat: no-repeat;
  background-size: 20% 20%;
  background-position: center center;
}

.cropped_image {
  display: block;
  max-width: 100%;
}

.side_wrapper {
  width: 300px;
  height: 100%;
  border-left: 1px dashed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.img_preview_wrapper {
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}

.img_preview {
  display: block;
  aspect-ratio: 1;
  height: 100%;
  border: 1px solid;
  overflow: hidden;
  border-radius: 50%;
}

.upload_button {
  margin-top: 3rem;
  background-color: #f5f5f5;
  font-size: 0.875rem;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  padding: .5rem 1rem;
  font-weight: 600;
  cursor: pointer;
}

.upload_image {
  display: none;
}

.button_wrapper {
  width: 100%;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.footer {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  margin-bottom: 0;
}

.footer_button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  background-color: #f5f5f5;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  padding: .3rem .5rem;
  font-family: inherit;
  cursor: pointer;
}

.footer_button.error {
  color: #fff;
}

.cropper_wrapper >>> .cropper-view-box,
.cropper_wrapper >>> .cropper-face {
  border-radius: 50% !important;
}
</style>
