import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__row Footer__top">
        <div className="Footer__item Footer__brand">
          <img src="images/logo.svg" alt="logo" className="Footer__logo" />
        </div>
        <div className="Footer__item Footer__top__links">
          <Link to="#" className="Footer__link">
            Home
          </Link>
          <Link to="#" className="Footer__link">
            Products
          </Link>
          <Link to="#" className="Footer__link">
            Services
          </Link>
          <Link to="#" className="Footer__link">
            About Us
          </Link>
          <Link to="#" className="Footer__link">
            Help
          </Link>
          <Link to="#" className="Footer__link">
            Contacts
          </Link>
        </div>
        <div className="Footer__item Footer__socials">
          <img
            src="images/twitter-icon.svg"
            alt="twitter-icon"
            className="Footer__icon"
          />
          <img
            src="images/facebook-icon.svg"
            alt="facebook-icon"
            className="Footer__icon"
          />
          <img
            src="images/instagram-icon.svg"
            alt="instagram-icon"
            className="Footer__icon"
          />
        </div>
      </div>

      <hr />

      <div className="Footer__row Footer__bottom">
        <div className="Footer__item Footer__bottom__item ">
          <Link to="#" className="Footer__link">
            Home
          </Link>
          <Link to="#" className="Footer__link">
            Products
          </Link>
          <Link to="#" className="Footer__link">
            Services
          </Link>
          <Link to="#" className="Footer__link">
            About Us
          </Link>
          <Link to="#" className="Footer__link">
            Help
          </Link>
          <Link to="#" className="Footer__link">
            Contacts
          </Link>
        </div>
        <div className="Footer_item Footer__bottom__item ">
          <Link to="#" className="Footer__link">
            Privacy Policy
          </Link>
          <Link to="#" className="Footer__link">
            Terms &#38; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
