import "./styles.scss";
import { ProductItem } from "components";

const ProductsList = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <div className="products-list__col5" key={product._id}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
