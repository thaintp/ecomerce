import "./style.scss";
import { CartItem } from "components";

const CartItems = ({ items }) => {
  return (
    <div className="cart-items">
      {items?.map((item, index) => (
        <div key={index}>
          <hr />
          <CartItem item={item} key={index} />
        </div>
      ))}
    </div>
  );
};

export default CartItems;
