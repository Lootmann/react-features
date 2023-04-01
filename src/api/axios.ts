import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://localhost:8888",
});

export { axiosApi };
