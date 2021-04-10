import { useParams, Link } from "react-router-dom";
import "./style.scss";
import Slash from "./Slash";

const ProductsBreadcrumb = () => {
  const { category } = useParams();

  return (
    <div className="ProductsBreadcrumb">
      <Link to="/" className="ProductsBreadcrumb__link">
        Home
      </Link>
      <Slash />
      <Link to={`/products/${category}`} className="ProductsBreadcrumb__link">
        {category}
      </Link>
      <Slash />
      <Link to="#" className="ProductsBreadcrumb__link">
        Vest
      </Link>
    </div>
  );
};
export default ProductsBreadcrumb;
