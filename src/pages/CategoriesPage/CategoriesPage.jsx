import Categories from "../../components/Categories/Categories";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const CategoriesPage = () => {
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

  return (
    <div className={styles.container}>
      <div className={styles.top__text}>
        <p>Main page</p>
        <div></div>
        <p>Categories</p>
      </div>
      <Categories items={items} />
    </div>
  );
};

export default CategoriesPage;
