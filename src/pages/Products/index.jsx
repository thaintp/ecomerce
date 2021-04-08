import { useParams } from "react-router-dom";
import "./style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Category, Filter } from "components";

const Products = () => {
  const { category } = useParams();
  return (
    <div className="ProductsPage">
      <p className="ProductsPage__tag">{category}</p>

      <Container>
        <Row>
          <Col className="ProductsPage__sidebar">
            <Category />
            <hr />
            <Filter />
          </Col>
          <Col>Sort by</Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col>1/100</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
