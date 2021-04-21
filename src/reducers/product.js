import {
  GET_PRODUCT,
  INIT_PRODUCTS,
  REMOVE_PRODUCT,
  POST_PRODUCT,
} from "actions/types";

const initialState = [];

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INIT_PRODUCTS:
      return payload ?? [];
    case GET_PRODUCT:
      return state.map((product) =>
        product._id === payload._id ? payload : product
      );
    case POST_PRODUCT:
      return state;
    // return [...state, payload];
    case REMOVE_PRODUCT:
      return state.filter((product) => product._id !== payload);
    default:
      return state;
  }
};

export default productReducer;
