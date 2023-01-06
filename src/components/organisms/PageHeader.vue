<template>
  <div class="page-header">
    <img src="../../assets/logo.png" />
    <div class="page-header__title">AWESOME BEER LIST</div>
    <img src="../../assets/logo.png" />
    <div class="page-header__info">About</div>
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
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &__title {
    color: green;
  }
}
</style>
