import "./style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { formatPrice } from "utils/number";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <Container fluid className="h-100 p-0">
        <Row className="h-100 p-0 m-0">
          <Col xs={4} className="cart-item__product">
            <div className="cart-item__product__image">
              <img src={item.product.photos[0]} alt="" />
            </div>
            <div className="cart-item__product__actions">
              <div className="product__actions__name">{item.product.name}</div>
              <div className="product__actions__links">
                <Link className="product__actions__link" to="#">
                  Change
                </Link>
                <div className="product__actions__link">|</div>
                <Link className="product__actions__link" to="#">
                  Remove
                </Link>
              </div>
            </div>
          </Col>
          <Col className="cart-item__col p-0" xs={2}>
            <span
              className="color-picker__item m-0"
              style={{ backgroundColor: item.color }}
            ></span>
          </Col>
          <Col className="cart-item__col p-0" xs={2}>
            {item.size}
          </Col>
          <Col className="cart-item__col p-0" xs={2}>
            {item.quantity}
          </Col>
          <Col className="cart-item__col cart-item__col--left p-0" xs={2}>
            {formatPrice(item.total)}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartItem;
