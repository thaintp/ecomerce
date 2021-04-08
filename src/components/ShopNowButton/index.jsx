import "./style.scss";

const ShopNowButton = (props) => {
  return (
    <button
      onClick={() => (props.callback ? props.callback() : console.log())}
      className="ShopNowButton"
      style={{
        width: props.width ?? "140px",
        height: props.height ?? "40px",
        fontSize: props.fontSize ?? "14px",
      }}
    >
      <span className="ShopNowButton__text">Shop now</span>
    </button>
  );
};

export default ShopNowButton;
