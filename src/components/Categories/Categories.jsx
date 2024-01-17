import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useEffect } from "react";

const Categories = ({ itemsAll }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Link
        className={styles.no__active}
        key={itemsAll.title}
        to={`/Categories/${itemsAll.id}`}
      >
        <li className={styles.categories__list_link} key={itemsAll}>
          <img alt="#" src={"http://localhost:3333" + itemsAll.image} />
          <p>{itemsAll.title}</p>
        </li>
      </Link>
    </div>
  );
};

export default Categories;
