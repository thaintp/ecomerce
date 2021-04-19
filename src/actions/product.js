import { INIT_PRODUCTS, REMOVE_PRODUCT } from "actions/types";
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
