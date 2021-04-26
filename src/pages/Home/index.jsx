import "./style.scss";
import { ShopNowButton, CategoryPoster } from "components";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page__hotDeal">
        <img
          src="/images/hot_deal.jpg"
          alt="hot deal"
          className="home-page__hotDeal__image"
        />
        <div className="home-page__hotDeal__title">OUTFIT OF THE WEEK</div>
        <div className="home-page__shopBtn">
          <ShopNowButton
            width="180px"
            height="50px"
            fontSize="16px"
            href="/products/men/all/1"
          ></ShopNowButton>
        </div>
      </div>
      <div className="home-page__category">
        <CategoryPoster
          imageSrc="/images/men.jpg"
          title="Men"
          href="/products/men/all/1"
        />
        <CategoryPoster
          imageSrc="/images/lady.jpg"
          title="Ladies"
          href="/products/ladies/all/1"
        />
        <CategoryPoster
          imageSrc="/images/girl.jpg"
          title="Girls"
          href="/products/girls/all/1"
        />
        <CategoryPoster
          imageSrc="/images/boy.jpg"
          title="Boys"
          href="/products/boys/all/1"
        />
      </div>
    </div>
  );
};

export default Home;
