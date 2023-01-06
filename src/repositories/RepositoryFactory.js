import BeersRepository from "./BeersRepository";

const repositories = {
  beers: BeersRepository,
};
export default {
  get: (name) => repositories[name],
};
