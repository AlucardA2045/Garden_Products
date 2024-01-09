import Img from "../../assets/images/discount.png";
import styles from "./styles.module.css";

const GetDiscount = () => {
  return (
    <div className={styles.background_discount}>
      <div className={styles.discount__block}>
        <h2>5% off on the first order</h2>
        <div className={styles.discount__block_info}>
          <img src={Img} alt="#" />
          <form>
            <input placeholder="Name"></input>
            <input placeholder="Phone number"></input>
            <input placeholder="Email"></input>
            <button>Get a discount</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetDiscount;
