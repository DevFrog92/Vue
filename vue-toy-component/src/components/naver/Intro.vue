<template>
  <section class="intro-section-wrapper">
    <div class="intro-section-inner-wrapper">
      <div class="intro-text">
        <h1 class="intro-title">쥬니스를 소개해요</h1>
        <p class="intro-desc">
          쥬니스는 언제나 여러분을 반갑게 맞이해 주는 어린이의 친구에요 <br />
          쥬니어 네이버를 대표하는 일곱 캐릭터랍니다
        </p>
      </div>
      <div class="intro-bg-img">
        <img
          class="intro-img"
          src="@/assets/images/naver/intro-bg-v2.png"
          alt="intro image"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.intro-section-wrapper {
  width: 100%;
  height: 270px;
  background-color: #fff;
}

.intro-section-inner-wrapper {
  width: 942px;
  height: 270px;
  margin: 0 auto;
  display: flex;
  padding: 80px 0 85px;
  position: relative;
  font-family: sans-serif;
}

.intro-title {
  font-size: 2rem;
  margin-bottom: 15px;
}

.intro-desc {
  font-size: 17px;
  line-height: 1.53;
  letter-spacing: -0.8px;
  z-index: 10;
}

.intro-bg-img {
  width: 516px;
  height: 270px;
  position: absolute;
  top: auto;
  right: -35px;
  bottom: 0;
}

.intro-bg-img img {
  width: 100%;
  border: 0;
  object-fit: cover;
  height: auto;
}
</style>
