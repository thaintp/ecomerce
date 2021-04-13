import "./style.scss";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const RegisterModal = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        animation={false}
        className="RegisterModal"
      >
        <Modal.Header closeButton />

        <div className="RegisterModal__text RegisterModal__title">Register</div>

        <Modal.Body>
          <Form>
            <Form.Group controlId="registerName">
              <Form.Label>NAME</Form.Label>
              <Form.Control type="text" placeholder="Enter your name..." />
            </Form.Group>

            <Form.Group controlId="registerEmail">
              <Form.Label>E-MAIL</Form.Label>
              <Form.Control type="email" placeholder="Enter your email..." />
            </Form.Group>

            <Form.Group controlId="registerPassword">
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password..."
              />
            </Form.Group>
            <div className="RegisterModal__policy">
              By creating an account you agree to the{" "}
              <span className="RegisterModal__link">Terms of Service</span> and
              <span className="RegisterModal__link">Privacy Policy</span>
            </div>
            <Button variant="secondary" type="submit" className="w-100">
              Register
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className="RegisterModal__footer">
          Do you have an account?{" "}
          <span className="RegisterModal__link">Log In</span>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterModal;
