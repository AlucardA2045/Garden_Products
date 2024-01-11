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
      <Categories items={list} />
    </div>
  );
};

export default CategoriesPage;
