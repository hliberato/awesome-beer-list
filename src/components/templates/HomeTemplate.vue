<template>
  <div id="app">
    <el-container>
      <el-header> <PageHeader /> </el-header>
      <el-main> <CardsScroll /> </el-main>
    </el-container>
  </div>
</template>

<script>
import PageHeader from "../organisms/PageHeader.vue";
import CardsScroll from "../organisms/CardsScroll.vue";

export default {
  name: "HomeTemplate",
  components: {
    PageHeader,
    CardsScroll,
  },
};
</script>

<style lang="scss">
.el-header {
  padding: 0;
}
</style>
