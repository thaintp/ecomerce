import axios from "axios";

const serverURL = "http://localhost:7070";

const fetchProducts = async () => {
  const data = await axios.get(`${serverURL}/api/products/`);
  return data.data;
};

const fetchProductsByBrand = async (brand) => {
  const data = await axios.get(`${serverURL}/api/products/brand/${brand}`);
  return data.data;
};

const fetchProduct = async (id) => {
  const data = await axios.get(`${serverURL}/api/products/${id}`);
  return data.data;
};

export { fetchProducts, fetchProduct, fetchProductsByBrand };
