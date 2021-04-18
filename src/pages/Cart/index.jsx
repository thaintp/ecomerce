import "./style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CartItems, CheckOut } from "components";
import { useSelector } from "react-redux";

const Cart = () => {
  const order = useSelector((state) => state.order);
  console.log(order);
  return (
    <div className="cart">
      <div className="cart__subtitle cart__title">My Bag</div>
      <Container fluid>
        <Row>
          <Col xs={8} className="pl-0">
            <Container fluid>
              <Row>
                <Col xs={4} className="p-0 cart__subtitle">
                  Product
                </Col>
                <Col xs={2} className="p-0 text-center cart__subtitle">
                  Color
                </Col>
                <Col xs={2} className="p-0 text-center cart__subtitle">
                  Size
                </Col>
                <Col xs={2} className="p-0 text-center cart__subtitle">
                  Quantity
                </Col>
                <Col xs={2} className="p-0 text-right cart__subtitle">
                  Amount
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={4} className="pr-0 cart__subtitle">
            Total
          </Col>
        </Row>
        <Row>
          <Col xs={8} className="pl-0">
            <CartItems items={order.items} />
          </Col>
          <Col xs={4} className="pr-0">
            <CheckOut total={order.total} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Cart;
