import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Categories = ({ itemsMax, items }) => {
  return (
    <div>
      <div className={styles.block__categories}>
        <ul className={styles.categories__list}>
          {itemsMax
            ? itemsMax.map((el, ind) => (
                <Link key={el.title} to={`/Allsales/${el.id}`}>
                  <li className={styles.categories__list_link} key={ind}>
                    <img alt="#" src={"http://localhost:3333" + el.image} />
                    <p>{el.title}</p>
                  </li>
                </Link>
              ))
            : items.map((el, ind) => (
                <Link key={el.title} to={`/Allsales/${el.id}`}>
                  <li className={styles.categories__list_link} key={ind}>
                    <img alt="#" src={"http://localhost:3333" + el.image} />
                    <p>{el.title}</p>
                  </li>
                </Link>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
