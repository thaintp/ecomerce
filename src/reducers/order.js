import {
  INIT_ORDERS,
  MARK_AS_CANCELED,
  MARK_AS_COMPLETED,
} from "actions/types";

const initialState = [];

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INIT_ORDERS:
      return payload ?? [];
    case MARK_AS_CANCELED:
    case MARK_AS_COMPLETED:
      return state.map((order) =>
        order._id === payload._id ? payload : order
      );
    default:
      return state;
  }
};

export default orderReducer;
