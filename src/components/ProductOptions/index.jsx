import "./style.scss";
import { formatPrice } from "utils/number";
import { RaterBar, SizePicker, ColorPicker, QuantityChooser } from "components";

const ProductOptions = ({ product }) => {
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
          <SizePicker sizes={product.sizes} />
        </div>
        <div className="product-options__text product-options__subText">
          Color
        </div>
        <div className="product-options__color-picker">
          <ColorPicker colors={product.colors} />
        </div>
        <div className="product-options__quantity-chooser">
          <div className="product-options__text product-options__subText product-options__quantity">
            Quantity
          </div>
          <QuantityChooser className="product-options__quantity-chooser__item" />
        </div>
        <div className="product-options__addToCart">
          <button className="product-options__addToCart__button">
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
