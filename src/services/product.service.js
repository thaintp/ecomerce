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
  async postProduct(product) {
    const formData = new FormData();
    for (let photo of product.photos) {
      if (photo !== undefined) formData.append("photos", photo);
    }
    formData.append("name", product.name);
    formData.append("categories", product.categories);
    formData.append("brand", product.brand);
    formData.append("price", product.price);
    formData.append("size", product.size);
    formData.append("colors", product.colors);
    formData.append("quantity", product.quantity);
    formData.append("description", product.description);

    return await axios
      .post("/products", formData)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console("File Upload Error"));
  }
}

export default new ProductService();
