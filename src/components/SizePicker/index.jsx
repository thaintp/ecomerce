import "./style.scss";
import classNames from "classnames";

const SizePicker = ({ sizes, item, setItem }) => {
  return (
    <div className="size-picker">
      {sizes?.map((size) => (
        <button
          className={classNames("size-picker__button", {
            "size-picker__button--active": item.size === size,
          })}
          key={size}
          onClick={() => setItem({ ...item, size: size })}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizePicker;
