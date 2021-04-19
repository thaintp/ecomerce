import { MARK_AS_CANCELED, MARK_AS_COMPLETED, INIT_ORDERS } from "./types";
import OrderService from "services/order.service";

export const initOrders = () => (dispatch) => {
  return OrderService.initOrders()
    .then((orders) => {
      dispatch({
        type: INIT_ORDERS,
        payload: orders,
      });
    })
    .catch((err) => {});
};

export const markAsCompleted = (id) => (dispatch) => {
  return OrderService.markAsCompleted(id)
    .then((order) => {
      dispatch({
        type: MARK_AS_COMPLETED,
        payload: order,
      });
    })
    .catch((err) => {});
};
export const markAsCanceled = (id) => (dispatch) => {
  return OrderService.markAsCanceled(id)
    .then((order) => {
      dispatch({
        type: MARK_AS_CANCELED,
        payload: order,
      });
    })
    .catch((err) => {});
};
