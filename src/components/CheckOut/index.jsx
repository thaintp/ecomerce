import "./style.scss";
import { formatPrice } from "utils/number";
import { useDispatch, useSelector } from "react-redux";
import { order } from "actions/cart";

const CheckOut = ({ total }) => {
  const dispatch = useDispatch();
  const handleCheckout = () => {
    dispatch(order());
    // window.location.reload();
  };
  const cart = useSelector((state) => state.cart);

  return (
    <div className="check-out">
      <div className="check-out__frame">
        <div className="check-out__row">
          <div className="check-out__col">Shipping & Handling:</div>
          <div className="check-out__col">Free</div>
        </div>
        <div className="check-out__row">
          <div className="check-out__col">Total product:</div>
          <div className="check-out__col">{formatPrice(total ?? 0)}</div>
        </div>
        <hr />
        <div className="check-out__row">
          <div className="check-out__col check-out__subtotal">Subtotal:</div>
          <div className="check-out__col check-out__subtotal">
            {formatPrice(total ?? 0)}
          </div>
        </div>
      </div>
      <button
        className="check-out__button check-out__subtotal"
        onClick={() => handleCheckout()}
        disabled={cart.items ? cart.items.length === 0 : true}
      >
        Check out
      </button>
    </div>
  );
};

export default CheckOut;
