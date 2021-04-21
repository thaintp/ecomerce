import "./style.scss";
import { ShopNowButton } from "components";
const SellerProductsTopbar = () => {
  return (
    <div className="seller-products-topbar">
      <ShopNowButton
        href="products/add"
        width="156px"
        height="48px"
        title={
          <span className="add-product-button">
            <img src="/images/plus-white.svg" alt="plus_icon" /> Add product
          </span>
        }
        className="add-product-button__container"
      />
      <ShopNowButton
        href="products/export"
        width="112px"
        height="48px"
        color="#ffa15f"
        backgroundColor="#ffffff"
        title={
          <span className="add-product-button">
            <img src="/images/export-orange.svg" alt="plus_icon" /> Export
          </span>
        }
      />
    </div>
  );
};

export default SellerProductsTopbar;
