import "./style.scss";

const ProductImages = ({ photos }) => {
  return (
    <div className="ProductImages">
      {photos?.map((photo) => (
        <div className="ProductImages__imageContainer" key={photo}>
          <img src={photo} alt="coverImage" className="ProductImages__image" />
        </div>
      ))}
    </div>
  );
};

export default ProductImages;
