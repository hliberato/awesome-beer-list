import Vue from "vue";
import App from "./App.vue";

import "element-ui/lib/theme-chalk/index.css";
import "./plugins/element.js";
import "./styles/font.scss";

import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo);

import infiniteScroll from "./directives/InfiniteScroll.js";
Vue.directive("infinite-scroll", infiniteScroll);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
