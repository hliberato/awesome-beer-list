<template>
  <div>
    <div
      class="float-header"
      :class="{ 'float-header--scrolling': isScrolling }"
    >
      <div class="float-header__wrapper">
        <div class="float-header__title">
          <img class="float-header__image" src="../../assets/logo.png" />
          <div class="float-header__name">AWESOME BEER LIST</div>
        </div>
        <el-link type="info" @click="aboutVisible = true">
          ABOUT <i class="el-icon-info" />
        </el-link>
      </div>
    </div>
    <el-dialog
      title="About this page"
      append-to-body
      :visible.sync="aboutVisible"
      width="30%"
    >
      Made with
      <el-link
        class="float-header__link"
        href="https://v2.vuejs.org/"
        target="_blank"
      >
        Vue.js </el-link
      >.
      <br />
      Code hosted on
      <el-link
        href="https://github.com/hliberato/awesome-beer-list"
        target="_blank"
      >
        GitHub </el-link
      >.
      <br />
      Site hosted by
      <el-link href="https://www.netlify.com/" target="_blank">
        Netlify </el-link
      >.
      <br />
      API by
      <el-link href="https://punkapi.com/documentation/v2" target="_blank">
        Punkapi </el-link
      >.
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "FloatHeader",
  data() {
    return {
      isScrolling: true,
      aboutVisible: false,
    };
  },
  created() {
    this.watchScrrolling();
  },
  methods: {
    watchScrrolling() {
      window.addEventListener("scroll", () => {
        this.isScrolling = document.documentElement.scrollTop > 20;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/media.scss";

.float-header {
  padding: 16px 24px;
  position: fixed;
  width: 100%;
  background-color: #fff;
  padding: 24px 24px;
  transition: all ease 0.3s;
  z-index: 1;
  &--scrolling {
    padding: 4px 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    .float-header__name {
      opacity: 0;
    }
  }
  &__wrapper {
    @include media-query;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }
  &__title {
    display: flex;
    align-items: center;
  }
  &__name {
    transition: opacity ease 0.3s;
    font-family: "Bitter", sans-serif;
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 700;
    color: green;
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }
  &__image {
    width: 32px;
    margin-right: 16px;
  }
  &__link {
    vertical-align: unset;
  }
}
</style>
