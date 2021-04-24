import "./style.scss";
import Table from "react-bootstrap/Table";
import { SellerOrderItem } from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initOrders } from "actions/order";

const SellerOrderItems = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(initOrders());
  }, [dispatch]);
  return (
    <div className="seller-order-items">
      <Table striped borderless hover>
        <thead>
          <tr>
            <th className="seller-order-items__title">ORDER ID</th>
            <th className="seller-order-items__title">ORDER DATE</th>
            <th className="seller-order-items__title">DETAIL</th>
            <th className="seller-order-items__title">TOTAL ($)</th>
            <th className="seller-order-items__title">STATUS</th>
            <th className="seller-order-items__title"></th>
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
