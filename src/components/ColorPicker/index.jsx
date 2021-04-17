import "./style.scss";
import { useState } from "react";
import classNames from "classnames";

const ColorPicker = (props) => {
  const [state, setState] = useState("");
  return (
    <div className="ColorPicker">
      {props.colors?.map((color) => (
        <span
          className={classNames("ColorPicker__item", {
            "ColorPicker__item--active": state === color,
          })}
          style={{ backgroundColor: color }}
          key={color}
          onClick={() => setState(color)}
        ></span>
      ))}
    </div>
  );
};

export default ColorPicker;
