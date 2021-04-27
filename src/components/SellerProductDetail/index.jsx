import "./style.scss";
const SellerProductDetail = ({ product }) => {
  return (
    <div className="seller-product-detail">
      <div className="seller-product-detail__image">
        <img src={product.photos[0]} alt={product.name} />
      </div>
      <div className="seller-product-detail__info">
        <div className="seller-product-detail__text seller-product-detail__name">
          {product.name}
        </div>
        <div className="seller-product-detail__text seller-product-detail__category">
          {product.categories?.join(", ")}
        </div>
      </div>
    </div>
  );
};
export default SellerProductDetail;
