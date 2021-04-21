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
import { useState, useEffect } from "react";

const ProductDetail = ({ product }) => {
  const [photo, setPhoto] = useState(undefined);
  useEffect(() => {
    setPhoto(product.photos !== undefined ? product.photos[0] : undefined);
  }, [product.photos]);
  return (
    <Container className="product-detail" fluid>
      <Row>
        <Col xs={1} className="product-detail__images">
          <ProductImages photos={product.photos} onClick={(p) => setPhoto(p)} />
        </Col>
        <Col xs={4}>
          <ProductImage photo={photo} />
        </Col>
        <Col xs={6}>
          <ProductOptions product={product} />
        </Col>
        <Col xs={1} className="product-detail__images">
          <BrandRecommendations brand={product.brand} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
