import Categories from "../../components/Categories/Categories";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

const CategoriesPage = () => {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <div className={styles.container}>
      <div className={styles.top__text}>
        <p>Main page</p>
        <div></div>
        <p>Categories</p>
      </div>
      <h3>Categories</h3>
      <div className={styles.block__categories}>
        <ul className={styles.categories__list}>
          {list.map((el, ind) => (
            <Categories itemsAll={el} key={ind} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesPage;
