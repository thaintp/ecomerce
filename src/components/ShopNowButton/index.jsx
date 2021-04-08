import "./style.scss";
import Button from "react-bootstrap/Button";

const ShopNowButton = (props) => {
  return (
    <Button
      className="ShopNowButton"
      style={{
        width: props.width ?? "140px",
        height: props.height ?? "40px",
        fontSize: props.fontSize ?? "14px",
      }}
      href={props.href}
    >
      <span className="ShopNowButton__text">Shop now</span>
    </Button>
  );
};

export default ShopNowButton;
