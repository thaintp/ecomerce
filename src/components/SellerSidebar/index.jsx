import "./style.scss";
import { Link } from "react-router-dom";
import { SidebarItem } from "components";

const SellerSidebar = ({ sellerCategory, setSellerCategory }) => {
  return (
    <div className="seller-sidebar">
      <div className="seller-sidebar__list">
        <Link
          to="/seller/overview"
          onClick={() => setSellerCategory("Overview")}
          className="seller-sidebar__tag"
        >
          <SidebarItem
            icon="/images/overview-dark.svg"
            title="Overview"
            active={sellerCategory === "Overview"}
          />
        </Link>
        <Link
          to="/seller/orders"
          onClick={() => setSellerCategory("Orders")}
          className="seller-sidebar__tag"
        >
          <SidebarItem
            icon="/images/orders-dark.svg"
            title="Orders"
            active={sellerCategory === "Orders"}
          />
        </Link>
        <Link
          to="/seller/products"
          onClick={() => setSellerCategory("Products")}
          className="seller-sidebar__tag"
        >
          <SidebarItem
            icon="/images/products-dark.svg"
            title="Products"
            active={sellerCategory === "Products"}
          />
        </Link>
        <Link
          to="/seller/payments"
          onClick={() => setSellerCategory("Payments")}
          className="seller-sidebar__tag"
        >
          <SidebarItem
            icon="/images/payment-dark.svg"
            title="Payments"
            active={sellerCategory === "Payments"}
          />
        </Link>
        <Link
          to="/seller/promotions"
          onClick={() => setSellerCategory("Promotions")}
          className="seller-sidebar__tag"
        >
          <SidebarItem
            icon="/images/promotion-dark.svg"
            title="Promotions"
            active={sellerCategory === "Promotions"}
          />
        </Link>
        <Link
          to="/seller/setting"
          onClick={() => setSellerCategory("Setting")}
          className="seller-sidebar__tag"
        >
          <SidebarItem
            icon="/images/setting-dark.svg"
            title="Setting"
            active={sellerCategory === "Setting"}
          />
        </Link>
      </div>
    </div>
  );
};

export default SellerSidebar;
