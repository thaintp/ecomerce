import "./style.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoryService from "services/category.service";
import classnames from "classnames";

const Category = ({ onChange }) => {
  const [category, setCategory] = useState({});
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    CategoryService.getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const handleOnclick = (item) => {
    setCategory(item);
    onChange(item);
  };

  return (
    <div className="category">
      <div className="sidebar__title sidebar__text--bold">Category</div>
      <div className="category__list">
        {categories.map((c) => (
          <Link
            to="#"
            className={classnames("category__tag", {
              "category__tag--active": category._id === c._id,
            })}
            key={c._id}
            onClick={() => handleOnclick(c)}
          >
            {c.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
