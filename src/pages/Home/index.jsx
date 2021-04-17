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
          ></ShopNowButton>
        </div>
      </div>
      <div className="home-page__category">
        <CategoryPoster
          imageSrc="/images/men.jpg"
          title="Men"
          href="/products/men"
        />
        <CategoryPoster
          imageSrc="/images/lady.jpg"
          title="Ladies"
          href="/products"
        />
        <CategoryPoster
          imageSrc="/images/girl.jpg"
          title="Girls"
          href="/products"
        />
        <CategoryPoster
          imageSrc="/images/boy.jpg"
          title="Boys"
          href="/products"
        />
      </div>
    </div>
  );
};

export default Home;
