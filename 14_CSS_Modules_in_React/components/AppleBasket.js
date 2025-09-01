import styles from "./Counter.module.css"
const AppleBasket = ({ appleCount, basketName}) => {
  return (
    <div className="basket">
        <h1 className={styles.textXl}>
            <span>{appleCount}</span> apples
        </h1>
        <p>{basketName}{appleCount === 10 && "(full)"}{appleCount === 0 && "(empty)"}</p> 
    </div>
  )
}
export default AppleBasket

