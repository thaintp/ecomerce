import "./styles.scss";
import { useEffect } from "react";
import { ProductItem } from "components";
import { initProducts } from "actions/product";
import { useDispatch, useSelector } from "react-redux";

const ProductsList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) dispatch(initProducts());
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
