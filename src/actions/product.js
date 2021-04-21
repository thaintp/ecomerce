import { GET_PRODUCT, INIT_PRODUCTS, REMOVE_PRODUCT } from "actions/types";
import ProductService from "services/product.service";

export const initProducts = () => (dispatch) => {
  return ProductService.initProducts()
    .then((products) => {
      dispatch({
        type: INIT_PRODUCTS,
        payload: products,
      });
    })
    .catch((err) => {});
};
export const getProduct = (id) => (dispatch) => {
  return ProductService.getProduct(id)
    .then((product) => {
      dispatch({
        type: GET_PRODUCT,
        payload: product,
      });
    })
    .catch((err) => {});
};

export const postProduct = (product) => (dispatch) => {
  return ProductService.postProduct(product)
    .then((data) => {
      console.log(data);
      dispatch({
        type: GET_PRODUCT,
        payload: data,
      });
    })
    .catch((err) => {});
};

export const removeProduct = (id) => (dispatch) => {
  return ProductService.removeProduct(id)
    .then((products) => {
      dispatch({
        type: REMOVE_PRODUCT,
        payload: id,
      });
    })
    .catch((err) => {});
};
