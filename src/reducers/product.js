import { INIT_PRODUCTS, REMOVE_PRODUCT } from "actions/types";

const initialState = [];

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INIT_PRODUCTS:
      return payload ?? [];
    case REMOVE_PRODUCT:
      return state.filter((product) => product._id !== payload);
    default:
      return state;
  }
};

export default productReducer;
