import axios from "utils/axios";
import authHeader from "services/auth-header";

const serverURL = "https://dsv-ecom.herokuapp.com";

const fetchOrders = async () => {
  const data = await axios({
    method: "GET",
    url: "/order",
  });
  return data.data;
};

export { fetchOrders };
