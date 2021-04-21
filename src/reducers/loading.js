import { LOADING, LOADED } from "actions/types";

const loadingReducer = (state = false, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING:
      return true;
    case LOADED:
      return false;
    default:
      return false;
  }
};

export default loadingReducer;
