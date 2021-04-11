import "./style.scss";

const SizePicker = (props) => {
  return (
    <div className="SizePicker">
      <button className="SizePicker__button SizePicker__active">S</button>
      <button className="SizePicker__button">M</button>
      <button className="SizePicker__button SizePicker__disable">L</button>
    </div>
  );
};

export default SizePicker;
