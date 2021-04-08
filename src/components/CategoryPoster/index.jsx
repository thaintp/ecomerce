import { ShopNowButton } from "../";
import "./style.scss";

const CategoryPoster = (props) => {
  return (
    <div className="CategoryPoster">
      <img
        src={props.imageSrc}
        alt="poster"
        className="CategoryPoster__image"
      />
      <div className="CategoryPoster__title">
        <span className="CategoryPoster__text">{props.title}</span>
      </div>
      <div className="CategoryPoster__button">
        <ShopNowButton href={props.href}></ShopNowButton>
      </div>
    </div>
  );
};

export default CategoryPoster;
