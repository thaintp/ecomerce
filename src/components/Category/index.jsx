import "./style.scss";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="Category">
      <div className="sidebar__title sidebar__text--bold">Category</div>
      <div className="Category__list">
        <Link to="#" className="Category__tag--active">
          All dresses
        </Link>
        <Link to="#" className="Category__tag">
          Rompers / Jumpsuits
        </Link>
        <Link to="#" className="Category__tag">
          Casual dresses
        </Link>
        <Link to="#" className="Category__tag">
          Going out dresses
        </Link>
        <Link to="#" className="Category__tag">
          Party / Occasion dresses
        </Link>
        <Link to="#" className="Category__tag">
          Mini dresses
        </Link>
        <Link to="#" className="Category__tag">
          Maxi / Midi dresses
        </Link>
        <Link to="#" className="Category__tag">
          Sets
        </Link>
      </div>
    </div>
  );
};

export default Category;
