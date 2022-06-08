<template>
  <section class="drop-down-container">
    <div class="drop-down">
      <p class="selected-option">
        {{ selectedOption }}
        <span class="drop-down-icon" @click="dropDownToggle">
          <img src="@/assets/icons/drop-down-icon.svg" alt="drop down icon" />
        </span>
      </p>
      <ul ref="optionList" class="option-list hide">
        <li
          class="option"
          v-for="(option, index) in options"
          :key="index"
          @click="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: '공통부분',
      options: ['공통부문', '다견가정', '중/대형견'],
      dropDownOpenState: false,
    };
  },
  mounted() {},
  methods: {
    selectOption(option) {
      this.selectedOption = option;
      this.dropDownToggle();
    },
    dropDownToggle() {
      const dropDownState = this.$refs.optionList.classList.contains('hide');
      if (dropDownState) {
        this.$refs.optionList.classList.remove('hide');
        return;
      }

      this.$refs.optionList.classList.add('hide');
    },
  },
};
</script>

<style lang="scss" scoped>
.drop-down-container {
  font-family: 'Pretendard';
  font-style: normal;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.drop-down {
  position: relative;

  .selected-option {
    font-weight: 800;
    font-size: 23px;
    line-height: 36px;
    width: 100%;
    height: 38px;
    display: flex;
    align-items: center;

    .drop-down-icon {
      display: inline-block;
      width: 24px;
      height: 24px;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .option-list {
    position: absolute;
    width: 100%;
    list-style: none;
    box-shadow: 1px 24px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    margin-top: 8px;
    opacity: 1;
    transition: all 0.4s ease-in-out;

    .option {
      width: 100%;
      height: 44px;
      padding: 16px 11px;
      background-color: #fff;
      cursor: pointer;

      &:not(&:last-child) {
        margin-bottom: 1px;
      }

      &:nth-of-type(2n) {
        background-color: #ffe6f1;
      }
    }

    &.hide {
      opacity: 0;
      pointer-events: none;
    }
  }
}
</style>
