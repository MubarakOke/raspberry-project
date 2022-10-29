import axios from "axios";

const base_api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});
export default base_api;