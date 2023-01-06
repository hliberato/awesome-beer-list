import axios from "axios";

const baseDomain = "https://api.punkapi.com/v2/beers";
const baseURL = `${baseDomain}`;


export default axios.create({
  baseURL,
  headers: {
    // "Authorization": "Bearer xxxxx"
  }
});
