import "./style.scss";
import { useEffect, useState } from "react";
import { fetchProductsByBrand } from "api/product";

const BrandRecommendations = ({ brand }) => {
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
      <div className="brand-recommendations_images">
        {products.map((product) => (
          <div className="brand-recommendations__image-container" key={product}>
            <img
              src={product.photos[0]}
              alt="productImage"
              className="brand-recommendations__image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandRecommendations;
