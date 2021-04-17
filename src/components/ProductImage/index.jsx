import "./style.scss";

const ProductImage = ({ photo }) => {
  return (
    <div className="product-image">
      <img src={photo} alt="coverImage" className="product-image__image" />
    </div>
  );
};

export default ProductImage;
