<template>
  <el-card class="beer-card" shadow="always">
    <beer-info :beer="beer" />
    <div class="beer-card__name">
      {{ beer.name }}
    </div>
    <div class="beer-card__description">
      {{ beer.tagline }}
    </div>
  </el-card>
</template>

<script>
import BeerInfo from "../atoms/BeerInfo.vue";
export default {
  name: "BeerCard",
  props: {
    beer: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    BeerInfo,
  },
};
</script>

<style lang="scss" scoped>
.beer-card {
  margin-bottom: 24px;
  &__name {
    font-family: "Bitter", sans-serif;
    padding-top: 24px;
    text-align: center;
    color: green;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__description {
    padding-top: 4px;
    text-align: center;
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
