import axios from "utils/axios";

class OrderService {
  async initOrders() {
    const data = await axios({
      method: "GET",
      url: "/order",
    });
    return data.data;
  }
  async markAsCompleted(id) {
    return await axios({
      method: "POST",
      url: "/order/update",
      data: {
        id,
        state: "Completed",
      },
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
      url: "/order/update",
      data: {
        id,
        state: "Canceled",
      },
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
