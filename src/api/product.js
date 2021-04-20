import axios from "utils/axios";

const fetchProducts = async () => {
  const data = await axios({
    method: "GET",
    url: "/products",
  });
  return data.data;
};

const fetchProductsByBrand = async (brand) => {
  const data = await axios({
    method: "GET",
    url: `/products/brand/${brand}`,
  });
  return data.data;
};

const fetchProduct = async (id) => {
  const data = await axios({
    method: "GET",
    url: `/products/${id}`,
  });
  return data.data;
};

export { fetchProducts, fetchProduct, fetchProductsByBrand };
