import Table from "react-bootstrap/Table";
import { SellerOrderItem } from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initOrders } from "actions/order";

const SellerOrderItems = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    if (orders.length === 0) dispatch(initOrders());
  }, []);
  return (
    <div className="seller-order-items">
      <Table striped borderless hover>
        <thead>
          <tr>
            <th>ORDER ID</th>
            <th>ORDER DATE</th>
            <th>DETAIL</th>
            <th>TOTAL ($)</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, index) => (
            <SellerOrderItem order={order} key={index} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default SellerOrderItems;
