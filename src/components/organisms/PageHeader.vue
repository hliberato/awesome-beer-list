<template>
  <div class="page-header">
    <float-header />
    <div class="page-header__call">
      A (not) curated and random collection of beers from all over the world!
      <img src="../../assets/beer-bg.png" />
      <a
        href="#"
        class="page-header__scroll-down"
        address="true"
        v-scroll-to="{ offset: -50, element: '.el-main' }"
      >
        <i class="el-icon-caret-bottom"></i>
      </a>
    </div>
  </div>
</template>

<script>
import FloatHeader from "../molecules/FloatHeader.vue";
export default {
  name: "PageHeader",
  components: { FloatHeader },
};
</script>

<style lang="scss" scoped>
.page-header {
  height: 100vh;
  text-align: center;
  &__call {
    padding: 0 20vh;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    font-size: 3rem;
    @media (max-width: 768px) {
      padding: 0 5vh;
      font-size: 2rem;
    }
  }
  &__scroll-down {
    color: green;
    font-size: 2rem;
    border: 2px solid green;
    width: 52px;
    text-align: center;
    border-radius: 50%;
    animation: bounce 2s infinite 2s;
  }
}

@keyframes bounce {
  0%,
  100%,
  20%,
  50%,
  80% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  60% {
    -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
  }
}
</style>
