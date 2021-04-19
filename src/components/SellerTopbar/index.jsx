import "./style.scss";
import { useSelector } from "react-redux";
import { Account, Wrapper } from "components";

const SellerTopBar = ({ sellerCategory }) => {
  const { account } = useSelector((state) => state.auth);

  return (
    <div className="seller-top-bar">
      <div className="seller-top-bar__text seller-top-bar__title">
        {sellerCategory}
      </div>
      <div className="seller-top-bar__utils">
        <Account account={account} size="48px" />
        <span className="seller-top-bar__text seller-top-bar__name">
          {account?.name}
        </span>
        <div className="seller-top-bar__wrapper">
          <Wrapper icon="/images/mail.svg" />
        </div>
        <div className="seller-top-bar__wrapper">
          <Wrapper icon="/images/notification.svg" />
        </div>
      </div>
    </div>
  );
};

export default SellerTopBar;
