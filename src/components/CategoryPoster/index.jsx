import { ShopNowButton } from '../';
import styles from './index.module.scss';

const CategoryPoster = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.imageSrc} alt="poster"/>
      <div className={styles.titleContainer}>
        <span className={styles.title}>{props.title}</span>
      </div>
      <div className={styles.shopBtn}>
        <ShopNowButton></ShopNowButton>
      </div>
    </div>
  )
}

export default CategoryPoster;