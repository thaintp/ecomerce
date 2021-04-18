import "./style.scss";
import { formatPrice } from "utils/number";
import { RaterBar, SizePicker, ColorPicker, QuantityChooser } from "components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "actions/cart";
import classNames from "classnames";

const ProductOptions = ({ product }) => {
  const [item, setItem] = useState({
    size: "",
    color: "",
    quantity: 1,
  });
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem({ ...item, product: product._id }));
  };
  const { account: currentAccount } = useSelector((state) => state.auth);
  return (
    product && (
      <div className="product-options">
        <div className="product-options__text product-options__name">
          {product.name}
        </div>
        <div className="product-options__text product-options__price">
          {formatPrice(product.price)}
        </div>
        <div className="product-options__rater">
          <RaterBar />
        </div>
        <div className="product-options__text product-options__subText">
          Size
        </div>
        <div className="product-options__sizePicker">
          <SizePicker sizes={product.sizes} item={item} setItem={setItem} />
        </div>
        <div className="product-options__text product-options__subText">
          Color
        </div>
        <div className="product-options__color-picker">
          <ColorPicker colors={product.colors} item={item} setItem={setItem} />
        </div>
        <div className="product-options__quantity-chooser">
          <div className="product-options__text product-options__subText product-options__quantity">
            Quantity
          </div>
          <QuantityChooser
            className="product-options__quantity-chooser__item"
            quantity={product.quantity}
            item={item}
            setItem={setItem}
          />
        </div>
        <div className="product-options__addToCart">
          <button
            className={classNames("product-options__addToCart__button", {
              "product-options__addToCart__button--disabled":
                item.color.length === 0 ||
                item.size.length === 0 ||
                currentAccount === null,
            })}
            onClick={() => addToCart()}
            disabled={
              item.color.length === 0 ||
              item.size.length === 0 ||
              currentAccount === null
            }
          >
            <span className="product-options__addToCart__text">
              Add to cart
            </span>
          </button>
        </div>
        <div className="product-options__description">
          {product.description}
        </div>
      </div>
    )
  );
};

export default ProductOptions;
