import "./style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  ProductImage,
  ProductImages,
  ProductOptions,
  BrandRecommendations,
} from "components";

const ProductDetail = ({ product }) => {
  return (
    <Container className="ProductDetail" fluid>
      <Row>
        <Col xs={1} className="ProductDetail__images">
          <ProductImages photos={product.photos} />
        </Col>
        <Col xs={4}>
          <ProductImage
            photo={product.photos !== undefined ? product.photos[0] : undefined}
          />
        </Col>
        <Col xs={6}>
          <ProductOptions product={product} />
        </Col>
        <Col xs={1} className="ProductDetail__images">
          <BrandRecommendations brand={product.brand} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
