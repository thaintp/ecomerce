import { ADD_ITEM, GET_CART_DETAIL, ADD_ITEM_ERROR } from "actions/types";

const initialState = [];

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CART_DETAIL:
      return payload;
    case ADD_ITEM:
      return payload;
    case ADD_ITEM_ERROR:
      return state;
    default:
      return state;
  }
};

export default orderReducer;
