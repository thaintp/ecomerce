import "./style.scss";
import { RegisterModal, LoginModal, Account } from "components";
import { useSelector } from "react-redux";
import { useState } from "react";

const AuthButtons = () => {
  const { account } = useSelector((state) => state.auth);
  const [modal, setModal] = useState(0);
  return (
    <div className="AuthButtons">
      {account ? (
        <Account account={account} />
      ) : (
        <>
          <LoginModal modal={modal} setModal={setModal} />
          <RegisterModal modal={modal} setModal={setModal} />
          <button
            className="AuthButtons__registerBtn AuthButtons__text"
            onClick={() => setModal(2)}
          >
            Register
          </button>
          <button className="AuthButtons__loginBtn" onClick={() => setModal(1)}>
            <span className="AuthButtons__loginBtn__text AuthButtons__text">
              Log In
            </span>
          </button>
        </>
      )}
    </div>
  );
};

export default AuthButtons;

// export default AuthButtons;
