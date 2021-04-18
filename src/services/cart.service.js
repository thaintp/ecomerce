import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:7070/api/order";

class CartService {
  async getCartDetail() {
    return await axios
      .get(API_URL + "/detail", { headers: authHeader() })
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
  }
  async addItem(item) {
    return await axios({
      method: "POST", //you can set what request you want to be
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
}

export default new CartService();
