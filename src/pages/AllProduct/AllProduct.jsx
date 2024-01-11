import styles from "./styles.module.css";
import Sort from "../../components/Sort/Sort";
import Product from "../../components/Product/Product";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const AllProduct = () => {
  const { list } = useSelector(({ products }) => products);

  const [a, aA] = useState([]);

  useEffect(() => {
    list &&
      list.forEach((e) => {
        let b = e.title;
        aA({ ...e, b });
      });
  }, [list]);

  list.length && console.log(a);

  return (
    <div className={styles.container}>
      <Sort all="All products" />
      <Product itemsAll={list} />
    </div>
  );
};

export default AllProduct;
