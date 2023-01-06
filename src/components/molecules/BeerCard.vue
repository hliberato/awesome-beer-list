<template>
  <el-card class="beer-card" shadow="always">
    <div class="beer-card__header">
      <div class="beer-card__properties">
        IBU {{ beer.ibu }}<br />
        EBC {{ beer.ebc }}
      </div>
      <img :src="beer.image_url" class="beer-card__image" />
      <div class="beer-card__properties">ABV {{ beer.abv }}%<br /></div>
    </div>
    <div class="beer-card__name">
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
  &__header {
    display: flex;
    flex-direction: row;
  }
  &__properties {
  }
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
  &__image {
    margin: auto;
    height: 180px;
  }
}
</style>
