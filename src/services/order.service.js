import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:7070/api/order";

class OrderService {
  async initOrders() {
    const data = await axios.get(API_URL, {
      headers: authHeader(),
    });
    return data.data;
  }
  async markAsCompleted(id) {
    return await axios({
      method: "POST",
      url: API_URL + "/update",
      data: {
        id,
        state: "Completed",
      },
      headers: authHeader(),
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  }
  async markAsCanceled(id) {
    return await axios({
      method: "POST",
      url: API_URL + "/update",
      data: {
        id,
        state: "Canceled",
      },
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

export default new OrderService();
