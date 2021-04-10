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
  ProductItem,
} from "components";

const Products = () => {
  return (
    <div className="ProductsPage">
      <ProductsBreadcrumb />
      <Container fluid>
        <Row>
          <Col className="ProductsPage__sidebar" xs={2}>
            <Category />
            <hr />
            <Filter />
          </Col>
          <Col xs={10} className="ProductsPage__content">
            <Container fluid>
              <Row className="ProductsPage__content__title">
                <div className="ProductsPage__sortBy">
                  <SortBy />
                </div>
                <div className="ProductsPage__pagination">
                  <Pagination current={1} sum={100} />
                </div>
              </Row>
              <Row>
                {Array.from(Array(9).keys()).map((x) => (
                  <div className="ProductsPage__col5">
                    <ProductItem
                      imageSrc="/images/dress/rectangle-copy-54.jpg"
                      name="Collete Stretch Linen Minidress"
                      price={69.0}
                    />
                  </div>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
