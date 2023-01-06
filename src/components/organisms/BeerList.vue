<template>
  <div class="beer-list">
    <el-row :gutter="24">
      <div style="overflow: auto">
        <div
          class="list"
          v-infinite-scroll="load"
          infinite-scroll-disabled="disabled"
        >
          <div v-for="beer in beers" :key="beer.id">
            <el-col :span="6">
              <BeerCard :beer="beer" />
            </el-col>
          </div>
        </div>
        <p v-if="loading">Loading...</p>
        <p v-if="noMore">No more</p>
      </div>
    </el-row>
  </div>
</template>

<script>
import BeerCard from "../molecules/BeerCard.vue";
import Repository from "../../repositories/RepositoryFactory";
const BeerRepository = Repository.get("beers");

export default {
  name: "BeerList",
  data() {
    return {
      beers: [],
      loading: false,
    };
  },
  components: {
    BeerCard,
  },
  created() {
    this.getBeers();
  },
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
  methods: {
    getBeers: async function () {
      const { data } = await BeerRepository.get();
      this.beers = data;
    },
    load() {
      console.log(1);
    },
  },
};
</script>

<style lang="scss">
.beer-list {
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
