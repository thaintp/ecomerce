import "./style.scss";

const QuantityChooser = ({ quantity, item, setItem }) => {
  return (
    <div className="quantity-chooser">
      <img
        className="quantity-chooser__button"
        src="/images/minus.svg"
        alt="minus"
        onClick={() =>
          setItem({
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
          })
        }
      />
      <div className="quantity-chooser__number">{item.quantity}</div>
      <img
        className="quantity-chooser__button"
        src="/images/plus.svg"
        alt="plus"
        onClick={() =>
          setItem({
            ...item,
            quantity:
              item.quantity < quantity ? item.quantity + 1 : item.quantity,
          })
        }
      />
    </div>
  );
};

export default QuantityChooser;
