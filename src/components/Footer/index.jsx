import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__row footer__top">
        <div className="footer__item footer__brand">
          <img src="/images/logo.svg" alt="logo" className="footer__logo" />
        </div>
        <div className="footer__item footer__top__links">
          <Link to="#" className="footer__link">
            Home
          </Link>
          <Link to="#" className="footer__link">
            Products
          </Link>
          <Link to="#" className="footer__link">
            Services
          </Link>
          <Link to="#" className="footer__link">
            About Us
          </Link>
          <Link to="#" className="footer__link">
            Help
          </Link>
          <Link to="#" className="footer__link">
            Contacts
          </Link>
        </div>
        <div className="footer__item footer__socials">
          <img
            src="/images/twitter-icon.svg"
            alt="twitter-icon"
            className="footer__icon"
          />
          <img
            src="/images/facebook-icon.svg"
            alt="facebook-icon"
            className="footer__icon"
          />
          <img
            src="/images/instagram-icon.svg"
            alt="instagram-icon"
            className="footer__icon"
          />
        </div>
      </div>

      <hr />

      <div className="footer__row footer__bottom">
        <div className="footer__item footer__bottom__item ">
          <Link to="#" className="footer__link">
            Home
          </Link>
          <Link to="#" className="footer__link">
            Products
          </Link>
          <Link to="#" className="footer__link">
            Services
          </Link>
          <Link to="#" className="footer__link">
            About Us
          </Link>
          <Link to="#" className="footer__link">
            Help
          </Link>
          <Link to="#" className="footer__link">
            Contacts
          </Link>
        </div>
        <div className="footer_item footer__bottom__item ">
          <Link to="#" className="footer__link">
            Privacy Policy
          </Link>
          <Link to="#" className="footer__link">
            Terms &#38; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
