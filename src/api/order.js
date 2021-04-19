import axios from "axios";
import authHeader from "services/auth-header";

const serverURL = "http://localhost:7070";

const fetchOrders = async () => {
  const data = await axios.get(`${serverURL}/api/order/`, {
    headers: authHeader(),
  });
  return data.data;
};

export { fetchOrders };
