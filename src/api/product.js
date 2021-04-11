import axios from "axios";

const fetchProducts = async () => {
  const data = await axios.get("http://localhost:7070/api/products/");
  return JSON.stringify(data.data);
};

export default fetchProducts;
