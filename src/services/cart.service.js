import axios from "utils/axios";

class CartService {
  async getCartDetail() {
    return await axios({
      method: "GET",
      url: "/order/detail",
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {});
  }
  async order() {
    return await axios({
      method: "POST",
      url: "/order",
      data: { method: "post" },
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {});
  }
  async addItem(item) {
    return await axios({
      method: "POST",
      url: "/order/addItem",
      data: { item },
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
      url: "/order/removeItem",
      data: { item },
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  }

  async changeItem(item) {
    return await axios({
      method: "PUT",
      url: "/order/changeItem/" + item._id,
      data: { item },
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
