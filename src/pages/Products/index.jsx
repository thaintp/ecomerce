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
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductService from "services/product.service";

const Products = () => {
  const { page, name } = useParams();
  const [products, setProducts] = useState([]);
  const [maxPage, setMaxPage] = useState([]);
  useEffect(() => {
    if (name) {
      ProductService.search(name, page, 10).then((data) => {
        setProducts(data.products);
        setMaxPage(data.count);
      });
    } else {
      ProductService.paginate(page, 10).then((data) => {
        setProducts(data);
      });
      ProductService.getMaxPage(10).then((data) => {
        setMaxPage(data);
      });
    }
  }, [page, name]);
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
                  <Pagination
                    current={parseInt(page)}
                    max={parseInt(maxPage)}
                  />
                </div>
              </Row>
              <Row>
                <ProductsList products={products} />
              </Row>
              <div className="products-page__content">
                <Pagination current={parseInt(page)} max={parseInt(maxPage)} />
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
