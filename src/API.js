import axios from "axios";

export default axios.create({
    baseURL: 'https://rich-erin-termite-cuff.cyclic.app/api/',
    method:'cors'
  });