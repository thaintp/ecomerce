import "./style.scss";
import { AuthButtons, CartWrapper } from "components";
import { Link } from "react-router-dom";
import { useRef } from "react";

const TopBar = () => {
  const inputName = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    window.location.pathname =
      "/products/search/" + inputName.current.value + "/1";
  };
  return (
    <div className="top-bar">
      <form
        className="top-bar__item top-bar__search"
        onSubmit={(e) => handleSearch(e)}
      >
        <input
          type="text"
          placeholder="Search.."
          name="name"
          className="top-bar__inputSearch"
          ref={inputName}
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
