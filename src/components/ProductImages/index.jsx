import "./style.scss";

const ProductImages = ({ photos, onClick }) => {
  return (
    <div className="product-images">
      {photos?.map((photo) => (
        <div className="product-images__image-container" key={photo}>
          <img
            src={photo}
            alt="coverImage"
            className="product-images__image"
            onClick={() => onClick(photo)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductImages;
