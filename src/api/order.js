import axios from "utils/axios";
import authHeader from "services/auth-header";

const serverURL = "http://localhost:7070";

const fetchOrders = async () => {
  const data = await axios({
    method: "GET",
    url: "/order",
  });
  return data.data;
};

export { fetchOrders };
