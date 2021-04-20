import axios from "utils/axios";

const getPublicContent = () => {
  return axios({
    method: "GET",
    url: "/test/all",
  });
};

const getUserBoard = () => {
  return axios({
    method: "GET",
    url: "/test/user",
  });
};

const getSellerBoard = () => {
  return axios({
    method: "GET",
    url: "/test/seller",
  });
};

export default {
  getPublicContent,
  getUserBoard,
  getSellerBoard,
};
