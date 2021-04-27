import axios from "utils/axios";

const fetchProducts = async () => {
  const data = await axios({
    method: "GET",
    url: "/products/all",
  });
  return data.data;
};

const fetchProductsByBrand = async (brand) => {
  const data = await axios({
    method: "GET",
    url: `/products/brand/${brand}`,
  });
  let res = data.data;
  res = res.length > 4 ? res.slice(0, 4) : res;
  return res;
};

const fetchProduct = async (id) => {
  const data = await axios({
    method: "GET",
    url: `/products`,
    params: {
      id,
    },
  });
  return data.data.products[0];
};

export { fetchProducts, fetchProduct, fetchProductsByBrand };
