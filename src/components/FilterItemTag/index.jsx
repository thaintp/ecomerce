import { useState } from "react";
import "./style.scss";

const FilterItemTag = ({ item }) => {
  const [click, setClick] = useState(false);
  return (
    <div className="FilterItemTag">
      <span
        className={
          click ? "FilterItemTag__title--active" : "FilterItemTag__title"
        }
      >
        {item}
      </span>
      <input
        type="checkbox"
        className="FilterItemTag__checkbox"
        onChange={(e) => setClick(e.target.value)}
      />
    </div>
  );
};

export default FilterItemTag;
