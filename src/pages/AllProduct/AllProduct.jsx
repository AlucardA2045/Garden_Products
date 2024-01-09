import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Sort from "../../components/Sort/Sort";
import Product from "../../components/Product/Product";

const AllProduct = () => {
  const [itemsAll, setItemsAll] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/products/all")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItemsAll(arr);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Sort all="All products" />
      <Product itemsAll={itemsAll} />
    </div>
  );
};

export default AllProduct;
