import "./style.scss";
import { formatPrice } from "utils/number";
import { RaterBar, SizePicker } from "components";

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
        <div className="ProductOptions__text ProductOptions__size">Size</div>
        <div className="ProductOptions__sizePicker">
          <SizePicker />
        </div>
      </div>
    )
  );
};

export default ProductOptions;
