import "./style.scss";
import { Link } from "react-router-dom";

const Wrapper = ({ icon }) => {
  return (
    <Link className="wrapper" to="#">
      <img src={icon} className="wrapper__icon" alt="cart" />
      <span className="wrapper__quantity">9+</span>
    </Link>
  );
};

export default Wrapper;
