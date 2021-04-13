import "./style.scss";

const ProductImages = ({ photos }) => {
  return (
    <div className="ProductImages">
      {[0, 1, 2, 3].map((val) => (
        <img
          src={photos ? photos[0] : ""}
          alt="coverImage"
          className="ProductImages__image"
          key={val}
        />
      ))}
    </div>
  );
};

export default ProductImages;
