import "./style.scss";
import { Link, useParams } from "react-router-dom";

const ProductItem = (props) => {
  const { category } = useParams();
  return (
    <div className="ProductItem">
      <img
        src={props.imageSrc}
        alt="productImage"
        className="ProductItem__image"
      />
      <Link
        className="ProductItem__text ProductItem__name"
        to={`/products/${category}/${props.id}`}
      >
        {props.name}
      </Link>
      <div className="ProductItem__text ProductItem__price">${props.price}</div>
    </div>
  );
};

export default ProductItem;
