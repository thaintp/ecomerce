import { GET_CART_DETAIL, ADD_ITEM, ADD_ITEM_ERROR, ORDER } from "./types";
import CartService from "services/cart.service";
import { update } from "actions/auth";

export const order = () => (dispatch) => {
  return CartService.order()
    .then((order) => {
      dispatch(update());
      dispatch({
        type: ORDER,
        payload: order,
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
  return CartService.addItem(item)
    .then((cart) => {
      dispatch({
        type: ADD_ITEM,
        payload: cart,
      });
    })
    .catch((err) => {
      alert("Add item error");
      dispatch({
        type: ADD_ITEM_ERROR,
      });
    });
};
