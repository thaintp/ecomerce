import styles from './index.module.scss';
import { ShopNowButton, CategoryPoster } from 'components';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hotDealContainer}>
        <img src="images/hot_deal.jpg" alt="hot deal" className={styles.hotDealImage}/>
        <div className={styles.titleContainer}>
          <span className={styles.title}>OUTFIT OF THE WEEK</span>
        </div>
        <div className={styles.shopBtn}>
          <ShopNowButton width="180px" height="50px" fontSize="16px"></ShopNowButton>
        </div>
      </div>
      <div className={styles.categoryContainer}>
        <CategoryPoster imageSrc="images/men.jpg" title="Men"></CategoryPoster>
        <CategoryPoster imageSrc="images/lady.jpg" title="Ladies"></CategoryPoster>
        <CategoryPoster imageSrc="images/girl.jpg" title="Girls"></CategoryPoster>
        <CategoryPoster imageSrc="images/boy.jpg" title="Boys"></CategoryPoster>
      </div>
    </div>
  )
}

export default Home;