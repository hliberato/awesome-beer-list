<template>
  <div class="page-header">
    <div class="page-header__title">Awesome Beer List</div>
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
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &__title {
    color: blue;
  }
}
</style>
