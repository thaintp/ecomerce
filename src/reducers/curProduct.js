import { CLICK_PRODUCT } from "actions/types";

const curProductReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case CLICK_PRODUCT:
      return payload;
    default:
      return state;
  }
};

export default curProductReducer;
