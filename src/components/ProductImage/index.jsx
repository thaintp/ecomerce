import "./style.scss";

const ProductImage = ({ photo }) => {
  return (
    <div className="ProductImage">
      <img src={photo} alt="coverImage" className="ProductImage__image" />
    </div>
  );
};

export default ProductImage;
