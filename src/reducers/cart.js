import {
  ADD_ITEM,
  REMOVE_ITEM,
  GET_CART_DETAIL,
  ADD_ITEM_ERROR,
  ORDER,
  CHANGE_ITEM,
} from "actions/types";

const initialState = {};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CART_DETAIL:
      return payload ?? {};
    case ORDER:
      return {};
    case ADD_ITEM:
    case REMOVE_ITEM:
    case CHANGE_ITEM:
      return payload;
    case ADD_ITEM_ERROR:
      return state;
    default:
      return state;
  }
};

export default cartReducer;
