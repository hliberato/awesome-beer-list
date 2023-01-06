<template>
  <div
    class="beer-list"
    v-infinite-scroll="loadMoreBeers"
    infinite-scroll-disabled="disabled"
  >
    <el-row :gutter="24">
      <div v-for="beer in beers" :key="beer.id">
        <el-col :xs="12" :span="6">
          <BeerCard :beer="beer" />
        </el-col>
      </div>
      <el-alert
        v-if="loading"
        center
        :closable="false"
        class="beer-list__alert"
      >
        <div slot="title">
          <i class="el-icon-truck beer-list__alert-icon" />
          Taking new beers... <i class="el-icon-loading" />
        </div>
      </el-alert>
      <el-alert
        v-if="noMore"
        center
        class="beer-list__alert"
        title="No more beers :("
        type="info"
      />
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
      perPage: 50,
      currentPage: 1,
      loading: false,
      lastPage: false,
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
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
.beer-list {
  margin: auto;
  @media (min-width: 1920px) {
    width: 1872px;
  }
  @media (min-width: 1200px) and (max-width: 1919px) {
    width: 1152px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 944px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 720px;
  }
  &__alert {
    padding-bottom: 16px;
    text-align: center;
    .el-alert__title {
      font-size: 1rem;
    }
  }
  &__alert-icon {
    display: block;
    font-size: 3rem;
    margin-bottom: 16px;
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
