<template>
  <el-card class="beer-card" shadow="always">
    <div class="beer-card__header">
      <div class="beer-card__properties">
        IBU <br />
        {{ beer.ibu }}<br /><br />
        EBC <br />{{ beer.ebc }}
      </div>
      <img :src="beer.image_url" class="beer-card__image" />
      <div class="beer-card__properties beer-card__properties--right">
        ABV <br />
        {{ beer.abv }}%<br />
      </div>
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
    width: 56px;
    font-size: 0.7rem;
  }
  &__properties--right {
    text-align: right;
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
    height: 160px;
    @media (max-width: 768px) {
      max-width: 42px;
    }
  }
}
</style>
