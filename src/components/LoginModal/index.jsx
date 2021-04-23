import "./style.scss";
import { useState, useRef, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { useDispatch, useSelector } from "react-redux";
import { login } from "actions/auth";
import { clearMessage } from "actions/message";
import { Error } from "components";
import { closeSigninModal, openSignupModal } from "actions/modal";
import { ShopNowButton } from "components";

const LoginModal = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    loading: false,
  });
  const form = useRef();
  const checkBtn = useRef();
  const dispatch = useDispatch();

  const { signin } = useSelector((state) => state.modal);
  const { message } = useSelector((state) => state.message);
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const onChangeEmail = (e) => {
    setState({ ...state, email: e.target.value });
  };
  const onChangePassword = (e) => {
    setState({ ...state, password: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setState({ ...state, loading: true });

    dispatch(login(state.email, state.password))
      .then(() => {})
      .catch((err) => {
        setState({ ...state, loading: false });
      });
  };

  return (
    <>
      <Modal
        show={signin.visible}
        onHide={() => dispatch(closeSigninModal())}
        animation={false}
        className="login-modal"
      >
        <Modal.Header closeButton />

        <div className="login-modal__text login-modal__title">Log In</div>
        {message && <Error message={message} />}
        <Modal.Body>
          <Form ref={form}>
            <div className="form-group">
              <label htmlFor="email" className="login-modal__label">
                E-MAIL
              </label>
              <Input
                type="email"
                className="form-control"
                name="email"
                value={state.email}
                onChange={onChangeEmail}
                placeholder="Enter your email..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="login-modal__label">
                PASSWORD
              </label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={state.password}
                onChange={onChangePassword}
                placeholder="Enter your password..."
                required
              />
            </div>

            <div className="login-modal__password">
              <div className="login-modal__rememberPassword">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="login-modal__checkbox"
                />
                <label
                  className="login-modal__text login-modal__label_2"
                  htmlFor="remember"
                >
                  Remember password
                </label>
              </div>
              <div className="login-modal__forgotPassword login-modal__text">
                Forgot your password?
              </div>
            </div>

            <div className="form-group">
              <ShopNowButton
                href="/seller/products/add"
                width="100%"
                height="50px"
                title="Login"
                onClick={(e) => handleLogin(e)}
              />
            </div>
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </Modal.Body>
        <Modal.Footer className="login-modal__footer login-modal__text">
          <span className="login-modal__footer__text">
            Don't have an account?{" "}
          </span>
          <span
            className="login-modal__link"
            onClick={() => {
              dispatch(closeSigninModal());
              dispatch(openSignupModal());
            }}
          >
            Register
          </span>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
