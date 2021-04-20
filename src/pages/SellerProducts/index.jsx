import "./style.scss";
import { SellerProductItems, SellerProductsTopbar } from "components";

const SellerProducts = () => {
  return (
    <div className="seller-orders">
      <SellerProductsTopbar />
      <SellerProductItems />
    </div>
  );
};

export default SellerProducts;
