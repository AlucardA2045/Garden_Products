import Categories from "../../components/Categories/Categories";
import GetDiscount from "../../components/GetDiscount/GetDiscount";
import Sale from "../../components/Sale/Sale";
import Title from "../../components/Title/Title";
import styles from "./style.module.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/categories/all")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  let itemsMax = items.filter((el, ind) => {
    return ind < 4;
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
        <Title Categories="Categories" />
        <Categories itemsMax={itemsMax} />
        <GetDiscount />
        <Title Sale="Sale" />
        <Sale />
      </div>
    </div>
  );
};

export default Home;
