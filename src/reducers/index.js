import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import cart from "./cart";
import orders from "./order";

export default combineReducers({
  auth,
  message,
  cart,
  orders,
});
