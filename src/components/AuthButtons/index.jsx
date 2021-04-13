import "./style.scss";
import { RegisterModal } from "components";

const AuthButtons = () => {
  return (
    <div className="AuthButtons">
      <RegisterModal />
      <button className="AuthButtons__registerBtn AuthButtons__text">
        Register
      </button>
      <button className="AuthButtons__loginBtn">
        <span className="AuthButtons__loginBtn__text AuthButtons__text">
          Log In
        </span>
      </button>
    </div>
  );
};

export default AuthButtons;
