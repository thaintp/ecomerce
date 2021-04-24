import axios from "axios";
import authHeader from "services/auth-header";

const API_URL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_SERVER_API_DEV
    : process.env.REACT_APP_SERVER_API_PROD;

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
