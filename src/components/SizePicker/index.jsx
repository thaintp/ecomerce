import "./style.scss";
import { useState } from "react";
import classNames from "classnames";

const SizePicker = ({ sizes }) => {
  const [state, setState] = useState("");
  return (
    <div className="SizePicker">
      {sizes?.map((size) => (
        <button
          className={classNames("SizePicker__button", {
            "SizePicker__button--active": state === size,
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
