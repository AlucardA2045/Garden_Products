import { useSelector } from "react-redux";
import Categories from "../../components/Categories/Categories";
import GetDiscount from "../../components/GetDiscount/GetDiscount";
import Sale from "../../components/Sale/Sale";
import Title from "../../components/Title/Title";
import styles from "./style.module.css";

const Home = () => {
  const { list } = useSelector(({ categories }) => categories);

  let itemsMax = list.filter((el, ind) => {
    return ind < 5;
  });

  return (
    <div className={styles.home}>
      <div className={styles.home__img}>
        <div className={styles.home__img_content}>
          <h1>Amazing Discounts on Garden Products!</h1>
          <button className={styles.home__img_button}>Check out</button>
        </div>
      </div>
      <div className={styles.container}>
        <Title Categories="Categories" AllCategories="All categories" />
        <Categories itemsMax={itemsMax} />
        <GetDiscount />
        <Title Sale="Sale" AllSales="All sales" />
        <Sale />
      </div>
    </div>
  );
};

export default Home;
