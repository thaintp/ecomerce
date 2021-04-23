import {
  GET_CART_DETAIL,
  ADD_ITEM,
  ADD_ITEM_ERROR,
  ORDER,
  REMOVE_ITEM,
  CHANGE_ITEM,
  LOADED,
  LOADING,
} from "./types";
import CartService from "services/cart.service";
import { update } from "actions/auth";
import { getProduct } from "./product";
import Toast from "utils/toast";

export const order = () => (dispatch) => {
  dispatch({
    type: LOADING,
  });
  return CartService.order()
    .then((order) => {
      dispatch(update());
      dispatch({
        type: ORDER,
        payload: order,
      });
      dispatch({
        type: LOADED,
      });
    })
    .catch((err) => {});
};

export const getCartDetail = () => (dispatch) => {
  return CartService.getCartDetail()
    .then((cart) => {
      dispatch({
        type: GET_CART_DETAIL,
        payload: cart,
      });
    })
    .catch((err) => {});
};

export const addItem = (item) => (dispatch) => {
  dispatch({
    type: LOADING,
  });
  return CartService.addItem(item)
    .then((cart) => {
      dispatch({
        type: ADD_ITEM,
        payload: cart,
      });
      dispatch(getProduct(item.product));
      dispatch({
        type: LOADED,
      });
      Toast.fire({
        icon: "success",
        title: "Add product successfully",
      });
    })
    .catch((err) => {
      alert("Add item error");
      dispatch({
        type: ADD_ITEM_ERROR,
      });
    });
};

export const removeItem = (item) => (dispatch) => {
  dispatch({
    type: LOADING,
  });
  return CartService.removeItem(item)
    .then((cart) => {
      dispatch({
        type: REMOVE_ITEM,
        payload: cart,
      });
      dispatch({
        type: LOADED,
      });
    })
    .catch((err) => {
      alert("Remove item error");
      dispatch({
        type: ADD_ITEM_ERROR,
      });
    });
};

export const changeItem = (item) => (dispatch) => {
  dispatch({
    type: LOADING,
  });
  return CartService.changeItem(item)
    .then((cart) => {
      dispatch({
        type: CHANGE_ITEM,
        payload: cart,
      });
      dispatch({
        type: LOADED,
      });
    })
    .catch((err) => {
      alert("Change item error");
      dispatch({
        type: ADD_ITEM_ERROR,
      });
    });
};
