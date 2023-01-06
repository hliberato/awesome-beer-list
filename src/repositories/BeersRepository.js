import Punkapi from "./Punkapi/AxiosPunkapi";
const resource = "/beers?per_page=80";

export default {
  get() {
    return Punkapi.get(`${resource}`);
  },
};
