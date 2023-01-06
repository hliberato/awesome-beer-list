<template>
  <div id="app">
    <el-container>
      <el-header height="auto"> <PageHeader /> </el-header>
      <el-main> <BeerList /> </el-main>
    </el-container>
  </div>
</template>

<script>
import PageHeader from "../organisms/PageHeader.vue";
import BeerList from "../organisms/BeerList.vue";

export default {
  name: "HomeTemplate",
  components: {
    PageHeader,
    BeerList,
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.08;
    z-index: -1;
    background: center/40% url("../../assets/bg.jpg");
  }
}
.el-header {
  padding: 0;
  z-index: 1;
  background-color: #f2f2f2;
}
.el-main {
  height: calc(100vh - 68px);
}
</style>
