import "./styles.scss";
import { useEffect, useState } from "react";
import { ProductItem } from "components";
import { fetchProducts } from "api/product";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((products) => setProducts(products));
  }, []);

  return (
    <div className="products-list">
      {products.map((product) => (
        <div className="products-list__col5" key={product._id}>
          <ProductItem
            imageSrc={product.photos[0]}
            name={product.name}
            price={product.price}
            id={product._id}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
