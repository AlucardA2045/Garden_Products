import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Title = ({ Sale, Categories, AllCategories, AllSales }) => {
  return (
    <div>
      <div className={styles.categories__title}>
        <h2>
          {Sale}
          {Categories}
        </h2>
        <div className={styles.categories__title_block}>
          <div className={styles.categories__title_line}></div>
          <Link to={Categories ? "/Categories" : "/AllSales"}>
            <button className={styles.categories__title_button}>
              {AllCategories}
              {AllSales}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Title;
