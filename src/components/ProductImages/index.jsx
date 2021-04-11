import "./style.scss";

const ProductImages = ({ photos }) => {
  return (
    <div className="ProductImages">
      <img
        src={photos ? photos[0] : ""}
        alt="coverImage"
        className="ProductImages__image"
      />

      <img
        src={photos ? photos[0] : ""}
        alt="coverImage"
        className="ProductImages__image"
      />

      <img
        src={photos ? photos[0] : ""}
        alt="coverImage"
        className="ProductImages__image"
      />

      <img
        src={photos ? photos[0] : ""}
        alt="coverImage"
        className="ProductImages__image"
      />
    </div>
  );
};

export default ProductImages;
