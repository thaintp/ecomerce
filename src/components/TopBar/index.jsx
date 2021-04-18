import "./style.scss";
import { AuthButtons, CartWrapper } from "components";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="top-bar">
      <form className="top-bar__item top-bar__search">
        <input
          type="search"
          placeholder="Search.."
          name="search"
          className="top-bar__inputSearch"
        />
        <img
          src="/images/search.svg"
          className="top-bar__iconSearch"
          alt="search"
        ></img>
      </form>

      <div className="top-bar__item top-bar__logo">
        <Link to="/">
          <img src="/images/logo.svg" className="top-bar__image" alt="logo" />
        </Link>
      </div>

      <div className="top-bar__item top-bar__utils">
        <AuthButtons />
        <CartWrapper />
      </div>
    </div>
  );
};

export default TopBar;
