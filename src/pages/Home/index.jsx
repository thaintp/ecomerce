import "./style.scss";
import { ShopNowButton, CategoryPoster } from "components";

const Home = () => {
  return (
    <div className="HomePage">
      <div className="HomePage__hotDeal">
        <img
          src="images/hot_deal.jpg"
          alt="hot deal"
          className="HomePage__hotDeal__image"
        />
        <div className="HomePage__hotDeal__title">OUTFIT OF THE WEEK</div>
        <div className="HomePage__shopBtn">
          <ShopNowButton
            width="180px"
            height="50px"
            fontSize="16px"
          ></ShopNowButton>
        </div>
      </div>
      <div className="HomePage__category">
        <CategoryPoster imageSrc="images/men.jpg" title="Men"></CategoryPoster>
        <CategoryPoster
          imageSrc="images/lady.jpg"
          title="Ladies"
        ></CategoryPoster>
        <CategoryPoster
          imageSrc="images/girl.jpg"
          title="Girls"
        ></CategoryPoster>
        <CategoryPoster imageSrc="images/boy.jpg" title="Boys"></CategoryPoster>
      </div>
    </div>
  );
};

export default Home;
