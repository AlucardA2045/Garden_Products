import styles from "./styles.module.css";
import Sort from "../../components/Sort/Sort";
import Product from "../../components/Product/Product";
import { useSelector } from "react-redux";

const AllProduct = () => {
  const { list } = useSelector(({ products }) => products);
  const sortList = [...list];

  const { categoryName, priceMinus, pricePlus, check } = useSelector(
    (state) => state.sort
  );

  let newList = (
    categoryName === "price: low-high"
      ? sortList.sort((a, b) => {
          return a.priceMax - b.priceMax;
        })
      : categoryName === "price: high-low"
      ? sortList.sort((a, b) => {
          return b.priceMax - a.priceMax;
        })
      : sortList
  ).filter((e) => {
    if (pricePlus) {
      return e.priceMax <= pricePlus && e.priceMax >= priceMinus;
    } else {
      return e.priceMax >= priceMinus;
    }
  });

  /* let newListMinus = newList.filter((e) => {
    return e.priceMax >= priceMinus;
  });

  let newListPlus = newListMinus.filter((e) => {
    if (pricePlus) {
      return e.priceMax <= pricePlus;
    } else {
      return e;
    }
  }); */

  let newListCheck = check
    ? newList.filter((el) => {
        return el.discont_price !== null;
      })
    : newList;

  return (
    <div className={styles.container}>
      <Sort all="All products" />
      <Product itemsAll={newListCheck} />
    </div>
  );
};

export default AllProduct;
