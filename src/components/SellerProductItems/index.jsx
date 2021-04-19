import "./style.scss";
import Table from "react-bootstrap/Table";
import { SellerProductItem } from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initProducts } from "actions/product";

const SellerProductItems = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) dispatch(initProducts());
  }, []);
  return (
    <div className="seller-order-items">
      <Table striped borderless hover>
        <thead>
          <tr>
            <th className="seller-order-items__title">PRODUCT</th>
            <th className="seller-order-items__title">SOLD</th>
            <th className="seller-order-items__title">DATE ADDED</th>
            <th className="seller-order-items__title">PROFIT ($)</th>
            <th className="seller-order-items__title"></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <SellerProductItem product={product} key={index} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default SellerProductItems;
