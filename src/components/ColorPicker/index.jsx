import "./style.scss";

const ColorPicker = (props) => {
  return (
    <div className="ColorPicker">
      {(
        props.colors ?? [
          "#ff5f6d",
          "rgba(255, 195, 113, 0.5)",
          "rgba(95, 109, 255, 0.5)",
          "rgba(255, 161, 95, 0.5)",
          "rgba(61, 61, 63, 0.5)",
          "rgba(237, 237, 237, 0.5)",
        ]
      ).map((color) => (
        <span
          className="ColorPicker__item"
          style={{ backgroundColor: color }}
        ></span>
      ))}
    </div>
  );
};

export default ColorPicker;
