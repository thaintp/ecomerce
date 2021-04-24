import axios from "axios";
import authHeader from "services/auth-header";

const API_URL = process.env.API_URL ?? "https://dsv-ecom.herokuapp.com/api";

const instance = axios.create({
  baseURL: API_URL,
  headers: authHeader(),
});

instance.interceptors.request.use(
  function (config) {
    config.headers = authHeader();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
