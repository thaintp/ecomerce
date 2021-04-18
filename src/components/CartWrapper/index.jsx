import "./style.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartWrapper = () => {
  const order = useSelector((state) => state.order);
  return (
    <Link className="cart-wrapper" to="/cart">
      <img src="/images/cart.svg" className="cart-wrapper__icon" alt="cart" />
      <span className="cart-wrapper__quantity">
        {order.items ? order.items.length : 0}
      </span>
    </Link>
  );
};

export default CartWrapper;
