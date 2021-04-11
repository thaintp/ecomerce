import ReactStars from "react-rating-stars-component";
import "./style.scss";

const RaterBar = (props) => {
  return (
    <div className="RaterBar">
      <ReactStars
        classNames="RaterBar__rater"
        count={5}
        activeColor="#ffd700"
        size={28}
      />
      <div className="RaterBar__divider">|</div>
      <div className="RaterBar__review">0 Review</div>
    </div>
  );
};

export default RaterBar;
