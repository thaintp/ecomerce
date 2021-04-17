import ReactStars from "react-rating-stars-component";
import "./style.scss";

const RaterBar = (props) => {
  return (
    <div className="rater-bar">
      <ReactStars
        classNames="rater-bar__rater"
        count={5}
        activeColor="#ffd700"
        size={28}
      />
      <div className="rater-bar__divider">|</div>
      <div className="rater-bar__review">0 Review</div>
    </div>
  );
};

export default RaterBar;
