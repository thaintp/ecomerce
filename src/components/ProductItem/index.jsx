import "./style.scss";
import { Link, useParams } from "react-router-dom";

const ProductItem = (props) => {
  const { category } = useParams();
  return (
    <div className="product-item">
      <img
        src={props.imageSrc}
        alt="productImage"
        className="product-item__image"
      />
      <Link
        className="product-item__text product-item__name"
        to={`/products/${category}/${props.id}`}
      >
        {props.name}
      </Link>
      <div className="product-item__text product-item__price">
        ${props.price}
      </div>
    </div>
  );
};

export default ProductItem;
