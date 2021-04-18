import "./style.scss";
import { formatPrice } from "utils/number";

const CheckOut = ({ total }) => {
  return (
    <div className="check-out">
      <div className="check-out__frame">
        <div className="check-out__row">
          <div className="check-out__col">Shipping & Handling:</div>
          <div className="check-out__col">Free</div>
        </div>
        <div className="check-out__row">
          <div className="check-out__col">Total product:</div>
          <div className="check-out__col">{formatPrice(total)}</div>
        </div>
        <hr />
        <div className="check-out__row">
          <div className="check-out__col check-out__subtotal">Subtotal:</div>
          <div className="check-out__col check-out__subtotal">
            {formatPrice(total)}
          </div>
        </div>
      </div>
      <button className="check-out__button check-out__subtotal">
        Check out
      </button>
    </div>
  );
};

export default CheckOut;
