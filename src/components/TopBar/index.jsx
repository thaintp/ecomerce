import styles from './index.module.css'

const TopBar = () => {
  return (
    <div className={styles.container}>
      <form className={styles.searchContainer}>
        <input type="search" placeholder="Search.." name="search" className={styles.inputSearch} />
        <img src="images/search.svg" class={styles.iconSearch}></img>
      </form>
      <div className={styles.logo}>
        <img src="images/logo.svg" className={styles.logoImage} alt="logo" />
      </div>
      <div className={styles.utils}>
        <button className={styles.registerBtn}>Register</button>
        <button className={styles.loginBtn}>
          <span className={styles.loginText}>Log In</span>
        </button>
        <img src="images/cart.svg" className={styles.cartImage} alt="cart" />
      </div>
    </div>
  )
}

export default TopBar;