import axios from "utils/axios";

class CategoryService {
  async getAllCategories() {
    return await axios({
      method: "GET",
      url: "/category",
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {});
  }
  async postCategory(category) {
    const data = await axios({
      method: "POST",
      url: "/category",
      data: {
        name: category,
      },
    });
    return data.data;
  }
}

export default new CategoryService();
