<template>
  <div class="beer-info">
    <div class="beer-info__properties">
      IBU <br />
      {{ beer.ibu }}<br /><br />
      EBC <br />{{ beer.ebc }}
    </div>
    <img :src="beer.image_url" class="beer-info__image" />
    <div class="beer-info__properties beer-info__properties--right">
      ABV <br />
      {{ beer.abv }}%<br />
    </div>
  </div>
</template>

<script>
export default {
  name: "BeerInfo",
  props: {
    beer: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.beer-info {
  display: flex;
  flex-direction: row;
  &__properties {
    width: 56px;
    font-size: 0.7rem;
  }
  &__properties--right {
    text-align: right;
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
