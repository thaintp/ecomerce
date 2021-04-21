import "./style.scss";
import { useEffect, useState } from "react";
import { fetchProductsByBrand } from "api/product";
import { Link, useParams } from "react-router-dom";

const BrandRecommendations = ({ brand }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProductsByBrand(brand).then((data) => setProducts(data));
  }, [brand]);

  return (
    <div className="brand-recommendations">
      <div className="brand-recommendations__text brand-recommendations__title">
        More from
      </div>
      <div className="brand-recommendations__text brand-recommendations__shop">
        {brand}
      </div>
      <div className="brand-recommendations__images">
        {products.map((product) => (
          <Link
            className="brand-recommendations__image-container"
            key={product._id}
            to={`/products/${category}/${product._id}`}
          >
            <img
              src={product.photos[0]}
              alt="productImage"
              className="brand-recommendations__image"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandRecommendations;
