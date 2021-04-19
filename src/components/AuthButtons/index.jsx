import "./style.scss";
import { RegisterModal, LoginModal, Account } from "components";
import { useSelector } from "react-redux";
import { useState } from "react";

const AuthButtons = () => {
  const { account } = useSelector((state) => state.auth);
  const [modal, setModal] = useState(0);
  return (
    <div className="auth-buttons">
      {account ? (
        <Account account={account} setModal={setModal} />
      ) : (
        <>
          <LoginModal modal={modal} setModal={setModal} />
          <RegisterModal modal={modal} setModal={setModal} />
          <button
            className="auth-buttons__registerBtn auth-buttons__text"
            onClick={() => setModal(2)}
          >
            Register
          </button>
          <button
            className="auth-buttons__loginBtn"
            onClick={() => setModal(1)}
          >
            <span className="auth-buttons__loginBtn__text auth-buttons__text">
              Log In
            </span>
          </button>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
