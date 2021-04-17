import "./style.scss";
import { useState } from "react";

const QuantityChooser = (props) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="quantity-chooser">
      <img
        className="quantity-chooser__button"
        src="/images/minus.svg"
        alt="minus"
        onClick={() => setQuantity((old) => (old > 0 ? old - 1 : old))}
      />
      <div className="quantity-chooser__number">{quantity}</div>
      <img
        className="quantity-chooser__button"
        src="/images/plus.svg"
        alt="plus"
        onClick={() => setQuantity((old) => old + 1)}
      />
    </div>
  );
};

export default QuantityChooser;
