import axios from "utils/axios";

class ProductService {
  async initProducts() {
    const data = await axios({
      method: "GET",
      url: "/products",
    });
    return data.data;
  }
  async removeProduct(id) {
    await axios({
      method: "DELETE",
      url: `/products/${id}`,
      data: { method: "DELETE" },
    });
  }
  async getProduct(id) {
    const data = await axios({
      method: "GET",
      url: `/products/${id}`,
    });
    return data.data;
  }
}

export default new ProductService();
