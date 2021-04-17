import "./style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Category,
  Filter,
  SortBy,
  ProductsBreadcrumb,
  Pagination,
  ProductsList,
} from "components";

const Products = () => {
  return (
    <div className="products-page">
      <ProductsBreadcrumb />
      <Container fluid>
        <Row>
          <Col className="products-page__sidebar" xs={2}>
            <Category />
            <hr />
            <Filter />
          </Col>
          <Col xs={10} className="products-page__content">
            <Container fluid>
              <Row className="products-page__content__title">
                <div className="products-page__sortBy">
                  <SortBy />
                </div>
                <div className="products-page__pagination">
                  <Pagination current={1} sum={100} />
                </div>
              </Row>
              <Row>
                <ProductsList />
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
