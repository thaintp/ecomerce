import "./style.scss";
const ProductItem = (props) => {
  return (
    <div className="ProductItem">
      <img
        src={props.imageSrc}
        alt="productImage"
        className="ProductItem__image"
      />
      <div className="ProductItem__text ProductItem__name">{props.name}</div>
      <div className="ProductItem__text ProductItem__price">${props.price}</div>
    </div>
  );
};

export default ProductItem;
