import Punkapi from "./Punkapi/AxiosPunkapi";
const resource = "/beers";

export default {
  get(perPage, currentPage) {
    return Punkapi.get(`${resource}?per_page=${perPage}&page=${currentPage}`);
  },
};
