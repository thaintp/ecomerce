import { ShopNowButton } from '../';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

const CategoryPoster = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.imageSrc} alt="image"/>
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