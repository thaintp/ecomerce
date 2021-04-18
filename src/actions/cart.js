import { GET_CART_DETAIL, ADD_ITEM, ADD_ITEM_ERROR } from "./types";
import CartService from "services/cart.service";

export const getCartDetail = () => (dispatch) => {
  return CartService.getCartDetail().then((items) => {
    dispatch({
      type: GET_CART_DETAIL,
      payload: items,
    });
  });
};

export const addItem = (item) => (dispatch) => {
  return CartService.addItem(item)
    .then(() => {
      dispatch({
        type: ADD_ITEM,
        payload: item,
      });
    })
    .catch((err) => {
      alert("Add item error");
      dispatch({
        type: ADD_ITEM_ERROR,
      });
    });
};
