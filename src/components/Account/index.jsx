import "./style.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "actions/auth";

const Account = ({ account, setModal, size }) => {
  const dispatch = useDispatch();
  return (
    <div className="account">
      <img
        src={account?.avatar}
        alt="avatar"
        className="account__avatar"
        style={{
          width: size ?? "28px",
          height: size ?? "28px",
        }}
      />
      <div className="account__dropdown">
        <Link className="account__action" to="/profile">
          Account settings
        </Link>
        <Link
          className="account__action"
          onClick={() => {
            dispatch(logout());
            setModal && setModal(0);
          }}
          to="#"
        >
          Log out
        </Link>
      </div>
    </div>
  );
};

export default Account;
