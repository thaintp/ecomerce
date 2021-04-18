import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:7070/api/order";

class CartService {
  async getCartDetail() {
    return await axios({
      method: "GET",
      url: API_URL + "/detail",
      data: { method: "get" },
      headers: authHeader(),
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {});
  }
  async order() {
    return await axios({
      method: "POST",
      url: API_URL,
      data: { method: "post" },
      headers: authHeader(),
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {});
  }
  async addItem(item) {
    return await axios({
      method: "POST",
      url: API_URL + "/addItem",
      data: { item },
      headers: authHeader(),
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  }
  async removeItem(item) {
    return await axios({
      method: "DELETE",
      url: API_URL + "/removeItem",
      data: { item },
      headers: authHeader(),
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  }
}

export default new CartService();
