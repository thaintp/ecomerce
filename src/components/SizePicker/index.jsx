import "./style.scss";
import { useState } from "react";
import classNames from "classnames";

const SizePicker = ({ sizes }) => {
  const [state, setState] = useState("");
  return (
    <div className="size-picker">
      {sizes?.map((size) => (
        <button
          className={classNames("size-picker__button", {
            "size-picker__button--active": state === size,
          })}
          key={size}
          onClick={() => setState(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizePicker;
