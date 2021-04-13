import "./style.scss";
import { useEffect, useState } from "react";
import { fetchProductsByBrand } from "api/product";

const BrandRecommendations = ({ brand }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProductsByBrand(brand).then((data) => setProducts(data));
  }, [brand]);

  return (
    <div className="BrandRecommendations">
      <div className="BrandRecommendation__text BrandRecommendations__title">
        More from
      </div>
      <div className="BrandRecommendation__text BrandRecommendations__shop">
        {brand}
      </div>
      <div className="BrandRecommendations__images">
        {products.map((product) => (
          <img
            src={product.photos[0]}
            alt="productImage"
            className="BrandRecommendations__image"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandRecommendations;
