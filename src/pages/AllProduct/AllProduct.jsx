import styles from "./styles.module.css";
import Sort from "../../components/Sort/Sort";
import Product from "../../components/Product/Product";
import { useSelector } from "react-redux";

const AllProduct = () => {
  const { list } = useSelector(({ products }) => products);

  /*  let listMaxPrice = () =>
    list.map((el) => {
      if (el.discont_price) {
        let priceMax = el.discont_price;
        return { ...el, priceMax };
      } else {
        let priceMax = el.price;
        return { ...el, priceMax };
      }
    }); */

  return (
    <div className={styles.container}>
      <Sort all="All products" />
      <Product itemsAll={list} />
    </div>
  );
};

export default AllProduct;
