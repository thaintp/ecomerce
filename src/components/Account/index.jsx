import "./style.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "actions/auth";

const Account = ({ account }) => {
  const dispatch = useDispatch();
  return (
    <div className="account">
      <img src={account.avatar} alt="avatar" className="account__avatar" />
      <div className="account__dropdown">
        <Link className="account__action" to="/profile">
          Account settings
        </Link>
        <Link
          className="account__action"
          onClick={() => {
            dispatch(logout());
            window.location.reload();
          }}
        >
          Log out
        </Link>
      </div>
    </div>
  );
};

export default Account;
