import styles from './index.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.brandContainer}>
        <div className={styles.logoContainer}>
          <img src="images/logo.svg" alt="logo" className={styles.logo} />
        </div>
        <div className={styles.linksContainer}>
          <Link to="#">Home</Link>
          <Link to="#">Products</Link>
          <Link to="#">Services</Link>
          <Link to="#">About Us</Link>
          <Link to="#">Help</Link>
          <Link to="#">Contacts</Link>
        </div>
        <div className={styles.socialsContainer}>
          <img src="images/twitter-icon.svg" alt="twitter-icon" className={styles.socialIcon}/>
          <img src="images/facebook-icon.svg" alt="facebook-icon" className={styles.socialIcon}/>
          <img src="images/instagram-icon.svg" alt="instagram-icon" className={styles.socialIcon}/>
        </div>
      </div>

      <hr/>

      <div className={styles.bottomBar}>
        <div className={styles.linksContainerSmall}>
          <Link to="#">Home</Link>
          <Link to="#">Products</Link>
          <Link to="#">Services</Link>
          <Link to="#">About Us</Link>
          <Link to="#">Help</Link>
          <Link to="#">Contacts</Link>
        </div>
        <div className={styles.policyContainer}>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms &#38; Conditions</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;