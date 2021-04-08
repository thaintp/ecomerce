import "./style.scss";

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
          src="images/search.svg"
          className="TopBar__iconSearch"
          alt="search"
        ></img>
      </form>

      <div className="TopBar__item TopBar__logo">
        <img src="images/logo.svg" className="TopBar__image" alt="logo" />
      </div>

      <div className="TopBar__item TopBar__utils">
        <button className="TopBar__registerBtn TopBar__text">Register</button>
        <button className="TopBar__loginBtn">
          <span className="TopBar__loginBtn__text TopBar__text">Log In</span>
        </button>
        <img src="images/cart.svg" className="TopBar__cart" alt="cart" />
      </div>
    </div>
  );
};

export default TopBar;
