import axios from "axios";

const baseDomain = "https://api.punkapi.com/v2";
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL,
});
