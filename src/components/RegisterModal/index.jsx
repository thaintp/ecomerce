import "./style.scss";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { register } from "actions/auth";
import { clearMessage } from "actions/message";
import { Error, ShopNowButton } from "components";
import { closeSignupModal, openSigninModal } from "actions/modal";

const RegisterModal = () => {
  const form = useRef();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    successful: false,
  });

  const { message } = useSelector((state) => state.message);
  const { signup } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const onChangeName = (e) => {
    setState({ ...state, name: e.target.value });
  };
  const onChangeEmail = (e) => {
    setState({ ...state, email: e.target.value });
  };
  const onChangePassword = (e) => {
    setState({ ...state, password: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setState({ ...state, successful: false });

    dispatch(register(state.name, state.email, state.password))
      .then(() => {
        setState({ ...state, successful: true });
      })
      .catch(() => {
        setState({ ...state, successful: false });
      });
  };

  return (
    <>
      <Modal
        show={signup.visible}
        onHide={() => dispatch(closeSignupModal())}
        animation={false}
        className="register-modal"
      >
        <Modal.Header closeButton />

        <div className="register-modal__text register-modal__title">
          Register
        </div>
        {message && <Error message={message} />}
        <Modal.Body>
          <Form onSubmit={(e) => handleRegister(e)} ref={form}>
            <div className="form-group">
              <label htmlFor="name" className="login-modal__label">
                NAME
              </label>
              <Input
                type="text"
                className="form-control"
                name="name"
                value={state.name}
                onChange={onChangeName}
                placeholder="Enter your name..."
                required
              />
            </div>

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
            <div className="register-modal__policy">
              By creating an account you agree to the{" "}
              <span className="register-modal__link">Terms of Service</span> and
              <span className="register-modal__link">Privacy Policy</span>
            </div>

            <div className="form-group">
              <ShopNowButton
                href="/seller/products/add"
                width="100%"
                height="50px"
                title="Register"
                onClick={handleRegister}
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="login-modal__footer login-modal__text">
          Do you have an account?{" "}
          <span
            className="register-modal__link"
            onClick={() => {
              dispatch(closeSignupModal());
              dispatch(openSigninModal());
            }}
          >
            Log In
          </span>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterModal;
