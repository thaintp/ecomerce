import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:7070/api/products/";

class ProductService {
  async initProducts() {
    const data = await axios.get(API_URL);
    return data.data;
  }
  async removeProduct(id) {
    await axios({
      method: "DELETE",
      url: API_URL + id,
      data: { method: "DELETE" },
      headers: authHeader(),
    });
  }
}

export default new ProductService();
