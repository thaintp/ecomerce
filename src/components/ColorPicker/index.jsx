import "./style.scss";
import classNames from "classnames";

const ColorPicker = ({ colors, item, setItem }) => {
  return (
    <div className="color-picker">
      {colors?.map((color) => (
        <span
          className={classNames("color-picker__item", {
            "color-picker__item--active": item.color === color,
          })}
          style={{ backgroundColor: color }}
          key={color}
          onClick={() => setItem({ ...item, color: color })}
        ></span>
      ))}
    </div>
  );
};

export default ColorPicker;
