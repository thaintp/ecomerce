import {
  ADD_ITEM,
  REMOVE_ITEM,
  GET_CART_DETAIL,
  ADD_ITEM_ERROR,
  ORDER,
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
      return payload;
    case REMOVE_ITEM:
      return payload;
    case ADD_ITEM_ERROR:
      return state;
    default:
      return state;
  }
};

export default cartReducer;
