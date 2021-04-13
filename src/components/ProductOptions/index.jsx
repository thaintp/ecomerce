import "./style.scss";
import { formatPrice } from "utils/number";
import { RaterBar, SizePicker, ColorPicker, QuantityChooser } from "components";

const ProductOptions = ({ product }) => {
  return (
    product && (
      <div className="ProductOptions">
        <div className="ProductOptions__text ProductOptions__name">
          {product.name}
        </div>
        <div className="ProductOptions__text ProductOptions__price">
          {formatPrice(product.price)}
        </div>
        <div className="ProductOptions__rater">
          <RaterBar />
        </div>
        <div className="ProductOptions__text ProductOptions__subText">Size</div>
        <div className="ProductOptions__sizePicker">
          <SizePicker />
        </div>
        <div className="ProductOptions__text ProductOptions__subText">
          Color
        </div>
        <div className="ProductOptions__colorPicker">
          <ColorPicker />
        </div>
        <div className="ProductOptions__quantityChooser">
          <div className="ProductOptions__text ProductOptions__subText ProductOptions__quantity">
            Quantity
          </div>
          <QuantityChooser className="ProductOptions__quantityChooser__item" />
        </div>
        <div className="ProductOptions__addToCart">
          <button className="ProductOptions__addToCart__button">
            <span className="ProductOptions__addToCart__text">Add to cart</span>
          </button>
        </div>
        <div className="ProductOptions__description">{product.description}</div>
      </div>
    )
  );
};

export default ProductOptions;
