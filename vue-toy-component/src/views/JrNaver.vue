<template>
  <section class="naver-jr-landing-wrapper">
    <intro />
    <span v-for="(color, index) in characterNames.length" :key="index">
      <character-intro
        :bgColor="sectionBgColor[index]"
        :index="index"
        :characterName="characterNames[index]"
      />
    </span>
    <Footer />
  </section>
</template>

<script>
import Intro from '@/components/naver/Intro.vue';
import CharacterIntro from '../components/naver/CharacterIntro.vue';
import Footer from '@/components/naver/Footer.vue';
export default {
  components: {
    Intro,
    CharacterIntro,
    Footer,
  },
  data() {
    return {
      sectionBgColor: [
        '#ffc82a',
        '#ffffff',
        '#0082ff',
        '#ffffff',
        '#44414d',
        '#ffffff',
        '#fec72a',
      ],
      characterNames: [
        'juni',
        'mini',
        'pong',
        'piyo',
        'pochi',
        'comie',
        'poki',
      ],
    };
  },
};
</script>

<style scoped>
.naver-jr-landing-wrapper {
  width: 100%;
  padding-top: 70px;
  background: #fff;
  min-height: 100vh;
  overflow: hidden;
  /* min-height: 100vh; */
}
</style>
