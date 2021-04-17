import { useParams, Link } from "react-router-dom";
import "./style.scss";
import Slash from "./Slash";

const ProductsBreadcrumb = ({ name }) => {
  const { category } = useParams();

  return (
    <div className="products-breadcrumb">
      <Link to="/" className="products-breadcrumb__link">
        Home
      </Link>
      <Slash />
      <Link to={`/products/${category}`} className="products-breadcrumb__link">
        {category}
      </Link>
      <Slash />
      <Link to="#" className="products-breadcrumb__link">
        Vest
      </Link>
      {name && (
        <>
          <Slash />
          <Link to="#" className="products-breadcrumb__link">
            {name}
          </Link>
        </>
      )}
    </div>
  );
};
export default ProductsBreadcrumb;
