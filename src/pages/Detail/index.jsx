import "./style.scss";

import { ProductsBreadcrumb, ProductDetail } from "components";
import { useParams } from "react-router-dom";
import { fetchProduct } from "api/product";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetchProduct(id).then((data) => setProduct(data));
  }, [id]);
  return (
    <div className="detail">
      <ProductsBreadcrumb name={product.name} />
      <ProductDetail className="detail__product" product={product} />
    </div>
  );
};

export default Detail;
