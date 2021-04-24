import axios from "utils/axios";

const fetchOrders = async () => {
  const data = await axios({
    method: "GET",
    url: "/order",
  });
  return data.data;
};

export { fetchOrders };
