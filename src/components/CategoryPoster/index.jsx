import { ShopNowButton } from "../";
import "./style.scss";

const CategoryPoster = (props) => {
  return (
    <div className="category-poster">
      <img
        src={props.imageSrc}
        alt="poster"
        className="category-poster__image"
      />
      <div className="category-poster__title">
        <span className="category-poster__text">{props.title}</span>
      </div>
      <div className="category-poster__button">
        <ShopNowButton href={props.href}></ShopNowButton>
      </div>
    </div>
  );
};

export default CategoryPoster;
