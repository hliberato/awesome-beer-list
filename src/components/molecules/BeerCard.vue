<template>
  <el-card class="beer-card" shadow="always">
    <img :src="beer.image_url" class="beer-card__image" />
    <div class="beer-card__title">
      {{ beer.name }}
    </div>
    <div class="beer-card__description">
      {{ beer.tagline }}
    </div>
  </el-card>
</template>

<script>
export default {
  name: "BeerCard",
  props: {
    beer: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.beer-card {
  background-color: #f2f2f2;
  margin-bottom: 24px;
  &__title {
    text-align: center;
    color: green;
  }
  &__image {
    height: 256px;
  }
}
</style>
