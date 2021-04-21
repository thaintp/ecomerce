import {
  GET_PRODUCT,
  INIT_PRODUCTS,
  POST_PRODUCT,
  REMOVE_PRODUCT,
  LOADING,
  LOADED,
} from "actions/types";
import ProductService from "services/product.service";
import Swal from "sweetalert2";

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
  dispatch({
    type: LOADING,
  });
  return ProductService.postProduct(product)
    .then((data) => {
      dispatch({
        type: POST_PRODUCT,
        payload: data,
      });
      dispatch({
        type: LOADED,
      });
      Swal.fire({
        icon: "success",
        title: "Add product successfully",
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
