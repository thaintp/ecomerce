import "./style.scss";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { register } from "actions/auth";
import { clearMessage } from "actions/message";
import { Error } from "components";

const RegisterModal = ({ modal, setModal }) => {
  const form = useRef();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    successful: false,
  });

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [modal, dispatch]);

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
        show={modal === 2}
        onHide={() => setModal(0)}
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
              <label htmlFor="name">NAME</label>
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
              <label htmlFor="email">E-MAIL</label>
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
              <label htmlFor="password">PASSWORD</label>
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
              <button className="btn btn-primary btn-block">
                <span>Register</span>
              </button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="register-modal__footer">
          Do you have an account?{" "}
          <span className="register-modal__link" onClick={() => setModal(1)}>
            Log In
          </span>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterModal;
