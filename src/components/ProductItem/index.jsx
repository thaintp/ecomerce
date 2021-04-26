import "./style.scss";
import { Link, useParams } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { category } = useParams();
  return (
    <div className="product-item">
      <div className="product-item__poster">
        <img
          src={product.photos[0]}
          alt="productImage"
          className="product-item__image"
        />
        <Link
          to={`/products/${category}/${product._id}`}
          className="quick-shop"
        >
          + Quick shop
        </Link>
        {product.quantity === product.sold && (
          <div className="sold-out">Sold out</div>
        )}
      </div>
      <Link className="product-item__text product-item__name">
        {product.name}
      </Link>
      <div className="product-item__text product-item__price">
        ${product.price}
      </div>
    </div>
  );
};

export default ProductItem;
