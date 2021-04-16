import "./style.scss";
import { AuthButtons } from "components";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="TopBar">
      <form className="TopBar__item TopBar__search">
        <input
          type="search"
          placeholder="Search.."
          name="search"
          className="TopBar__inputSearch"
        />
        <img
          src="/images/search.svg"
          className="TopBar__iconSearch"
          alt="search"
        ></img>
      </form>

      <div className="TopBar__item TopBar__logo">
        <Link to="/">
          <img src="/images/logo.svg" className="TopBar__image" alt="logo" />
        </Link>
      </div>

      <div className="TopBar__item TopBar__utils">
        <AuthButtons />
        <img src="/images/cart.svg" className="TopBar__cart" alt="cart" />
      </div>
    </div>
  );
};

export default TopBar;
