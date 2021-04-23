import axios from "utils/axios";

class ProductService {
  async initProducts() {
    const data = await axios({
      method: "GET",
      url: "/products/all",
    });
    return data.data;
  }
  async paginate(page, quantity) {
    const data = await axios({
      method: "GET",
      url: `/products/paginate/${page}/${quantity}`,
    });
    return data.data;
  }
  async getMaxPage(quantity) {
    const data = await axios({
      method: "GET",
      url: `/products/maxPaginate/${quantity}`,
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
  async search(name) {
    const data = await axios({
      method: "GET",
      url: `/products?name=${name}`,
    });
    return data.data;
  }
  async postProduct(product) {
    const formData = new FormData();
    for (let photo of product.photos) {
      if (photo !== undefined) formData.append("photos", photo);
    }
    formData.append("name", product.name);
    formData.append("categories", JSON.stringify(product.categories));
    formData.append("brand", product.brand);
    formData.append("price", product.price);
    formData.append("sizes", JSON.stringify(product.sizes));
    formData.append("colors", JSON.stringify(product.colors));
    formData.append("quantity", product.quantity);
    formData.append("description", product.description);

    return await axios
      .post("/products", formData)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console("Post product error"));
  }
  async putProduct(id, product) {
    const formData = new FormData();
    for (let photo of product.photos) {
      if (photo !== undefined) formData.append("photos", photo);
    }
    formData.append("name", product.name);
    formData.append("categories", JSON.stringify(product.categories));
    formData.append("brand", product.brand);
    formData.append("price", product.price);
    formData.append("sizes", JSON.stringify(product.sizes));
    formData.append("colors", JSON.stringify(product.colors));
    formData.append("quantity", product.quantity);
    formData.append("description", product.description);

    return await axios
      .put("/products/" + id, formData)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console("Put product error"));
  }
}

export default new ProductService();
