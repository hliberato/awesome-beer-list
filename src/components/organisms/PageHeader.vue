<template>
  <div class="page-header">
    <div />
    <div class="page-header__title">
      <img class="page-header__image" src="../../assets/logo.png" />
      <div class="page-header__name">AWESOME BEER LIST</div>
      <img
        class="page-header__image page-header__image--inverted"
        src="../../assets/logo.png"
      />
    </div>
    <div class="page-header__info">About <i class="el-icon-info" /></div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &__title {
    display: flex;
    align-items: center;
  }
  &__name {
    font-family: "Bitter", sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: green;
  }
  &__image {
    width: 60px;
    margin: 0 24px;
  }
  &__image--inverted {
    transform: scaleX(-1);
  }
}
</style>
