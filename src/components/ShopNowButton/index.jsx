import "./style.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ShopNowButton = (props) => {
  return (
    <Link to={props.href} style={{ textDecoration: "none" }}>
      <Button
        className="shop-now-button"
        style={{
          width: props.width ?? "140px",
          height: props.height ?? "40px",
          fontSize: props.fontSize ?? "14px",
          backgroundColor: props.backgroundColor ?? "#ffa15f",
        }}
        href={props.href}
      >
        <span
          className="shop-now-button__text"
          style={{
            color: props.color ?? "#ffffff",
          }}
        >
          {props.title ?? "Shop now"}
        </span>
      </Button>
    </Link>
  );
};

export default ShopNowButton;
