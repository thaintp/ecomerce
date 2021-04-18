import "./style.scss";
import { useSelector } from "react-redux";

const CartWrapper = () => {
  const order = useSelector((state) => state.order);
  return (
    <div className="cart-wrapper">
      <img src="/images/cart.svg" className="cart-wrapper__icon" alt="cart" />
      <span className="cart-wrapper__quantity">{order.length}</span>
    </div>
  );
};

export default CartWrapper;
