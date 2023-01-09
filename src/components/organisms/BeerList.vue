<template>
  <div class="beer-list" v-infinite-scroll="loadMoreBeers">
    <el-row :gutter="24">
      <div v-for="(beer, index) in beers" :key="beer.id + index">
        <el-col :xs="12" :span="6">
          <BeerCard :beer="beer" />
        </el-col>
      </div>
    </el-row>
    <div class="beer-list__alert">
      <span v-if="loading">
        Taking more beers...
        <i class="el-icon-truck beer-list__alert-icon" />
      </span>
      <span v-if="noMore"> You have reached the end of the list. </span>
    </div>
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
      perPage: 20,
      currentPage: 1,
      loading: false,
      lastPage: false,
    };
  },
  components: {
    BeerCard,
  },
  mounted() {
    this.getBeers();
  },
  computed: {
    noMore() {
      return this.lastPage;
    },
    disabled() {
      return this.loading || this.lastPage;
    },
  },
  methods: {
    getBeers: async function () {
      const { data } = await BeerRepository.get(this.perPage, this.currentPage);
      this.beers = data;
    },
    loadMoreBeers() {
      if (this.lastPage) return;
      this.loading = true;
      this.currentPage += 1;
      setTimeout(() => {
        BeerRepository.get(this.perPage, this.currentPage)
          .then((res) => {
            this.beers = [...this.beers, ...res.data];
            if (res.data.length < 20) this.lastPage = true;
          })
          .finally(() => {
            this.loading = false;
          });
      }, 3000);
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/media.scss";

.beer-list {
  margin: auto;
  @include media-query;
  &__alert {
    font-size: 2rem;
    padding: 40px 0;
    text-align: center;
  }
  &__alert-icon {
    display: block;
    font-size: 1.7rem;
    animation: shake 0.5s;
    animation-iteration-count: infinite;
    @keyframes shake {
      0% {
        transform: translate(0.5px, 0.5px) rotate(0deg);
      }
      10% {
        transform: translate(-0.5px, -1px) rotate(-1deg);
      }
      20% {
        transform: translate(-1px, 0px) rotate(1deg);
      }
      30% {
        transform: translate(1px, 1px) rotate(0deg);
      }
      40% {
        transform: translate(1px, -1px) rotate(1deg);
      }
      50% {
        transform: translate(-1px, 0.5px) rotate(-1deg);
      }
      60% {
        transform: translate(-0.5px, 1px) rotate(0deg);
      }
      70% {
        transform: translate(1px, 1px) rotate(-1deg);
      }
      80% {
        transform: translate(-1px, -1px) rotate(1deg);
      }
      90% {
        transform: translate(0.5px, 1px) rotate(0deg);
      }
      100% {
        transform: translate(1px, -2px) rotate(-1deg);
      }
    }
  }
}
</style>
