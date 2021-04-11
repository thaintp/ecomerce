import "./styles.scss";
import { useEffect, useState } from "react";
import { ProductItem } from "components";
import fetchProducts from "api/product";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((products) => setProducts(JSON.parse(products)));
  }, []);

  return (
    <div className="ProductsList">
      {products.map((product) => (
        <div className="ProductsList__col5" key={product.__id}>
          <ProductItem
            imageSrc={product.photos[0]}
            name={product.name}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
