import styles from './index.module.scss';

const ShopNowButton = (props) => {
  return (
    <button
      onClick={() => props.callback ? props.callback() : console.log()}
      className={styles.container}
      style={{
        width: props.width ?? "140px",
        height: props.height ?? "40px",
        fontSize: props.fontSize ?? "14px"
      }}
    >
      <span>Shop now</span>
    </button>
  )
}

export default ShopNowButton;