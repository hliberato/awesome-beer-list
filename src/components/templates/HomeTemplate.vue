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

<style lang="scss">
.el-container {
  //   background: no-repeat
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    z-index: -1;
    background: center/40% url("../../assets/bg.jpg");
  }
}
.el-header {
  padding: 0;
  background-color: #f2f2f2;
}
.el-main {
  margin: auto;
  @media (min-width: 1920px) {
    width: 1920px;
  }
  @media (min-width: 1200px) and (max-width: 1919px) {
    width: 1200px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 992px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 768px;
  }
}
</style>
