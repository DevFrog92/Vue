<template>
  <section ref="section" class="character-intro-section-wrapper" :style="color">
    <div class="character-intro-inner-wrapper">
      <figure class="parallex-outer" :style="`--i: ${index}`" :class="isLeft">
        <div ref="parralex" class="parallex-inner">
          <img :src="character" alt="" />
        </div>
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: 0,
    },
    characterName: {
      type: String,
      default: '',
    },
  },
  computed: {
    color() {
      return { 'background-color': `${this.bgColor}` };
    },
    character() {
      return require(`@/assets/images/naver/${this.characterName}-main.png`);
      // return require(`@/assets/images/naver/juni-main.png`);
    },
    isLeft() {
      return this.index % 2 === 1 ? 'right' : 'left';
    },
  },
  data() {
    return {
      titleShow: false,
      position: 30,
      bottom: 0,
    };
  },
  mounted() {
    this.addEvent();
    this.bottom =
      this.$refs.section.getBoundingClientRect().y +
      this.$refs.section.getBoundingClientRect().height;
  },
  methods: {
    addEvent() {
      window.addEventListener('scroll', () => {
        const sectionHeight = this.$refs.section.getBoundingClientRect().y;
        const bottomPosition = window.scrollY + window.innerHeight - 100;

        if (sectionHeight <= bottomPosition && sectionHeight + 480 > 0) {
          this.titleShow = true;
          this.setPosition(sectionHeight, bottomPosition);
          // console.log(this.$refs.section, 'section animation start');
        }

        if (sectionHeight + 480 < 0) {
          this.titleShow = false;

          console.log('section', this.index, 'animation stop');
        }
      });
    },
    setPosition() {
      console.log('section', this.index, 'animation start');

      // console.log(window.scrollY - y);
      console.log(
        30 *
          ((this.$refs.section.getBoundingClientRect().y +
            this.$refs.section.getBoundingClientRect().height) /
            this.bottom),
      );
      this.position =
        30 *
        ((this.$refs.section.getBoundingClientRect().y +
          this.$refs.section.getBoundingClientRect().height) /
          this.bottom);
      this.$refs.parralex.style.transform = `translate3d(0%, ${this.position}%, 0px)`;
    },
  },
};
</script>

<style scoped>
.character-intro-section-wrapper {
  width: 100%;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.character-intro-inner-wrapper {
  width: 910px;
  height: 100%;
  position: relative;
  border: 1px solid;
}

.parallex-outer {
  position: absolute;
  border: 1px solid;
  top: calc(80px - var(--i / 2) * 25px);
  width: 320px;
  height: 388px;
}

.left {
  left: 0;
}

.right {
  right: 0;
}

.parallex-inner {
  transform: translate3d(0%, 30%, 0px);
}

.parallex-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
