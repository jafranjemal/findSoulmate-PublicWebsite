import axios from "axios";
const PRODUCTION_URL = 'https://rich-erin-termite-cuff.cyclic.app/api/'
const DEVELOPMENT_URL = 'http://localhost:8082/api/'

export default axios.create({
    baseURL: PRODUCTION_URL,  //process.env.NODE_ENV === "development" ? DEVELOPMENT_URL : PRODUCTION_URL,
   // baseURL: 'https://5fee-2402-4000-b185-bb5b-648a-b7e6-7287-3788.ngrok-free.app/api/',
    method:'cors'
  });