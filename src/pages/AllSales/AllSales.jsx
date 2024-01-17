import styles from "./styles.module.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Sort from "../../components/Sort/Sort";

const AllSales = () => {
  const { list } = useSelector(({ products }) => products);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [list]);

  let discont = list.filter((el) => {
    return el.discont_price !== null;
  });

  return (
    <div className={styles.container}>
      <Sort sales="All sales" />
      <div className={styles.block__sale}>
        <ul className={styles.block__list}>
          {discont.map((el, ind) => (
            <li className={styles.block__list_link} key={ind}>
              <Link
                className={styles.no__active}
                key={ind}
                to={`/CartProduct/${el.id}`}
              >
                <div className={styles.block__border}>
                  <p className={styles.block__list_discont}>
                    {Math.round((el.discont_price / el.price) * 100 - 100) +
                      "%"}
                  </p>
                  <img alt="#" src={"http://localhost:3333" + el.image} />
                  <div className={styles.block__list_info}>
                    <p className={styles.block__list_title}>{el.title}</p>
                    <div className={styles.block__list_price}>
                      <p className={styles.block__list_price_new}>
                        {"$" + el.discont_price}
                      </p>
                      <p className={styles.block__list_price_old}>
                        {"$" + el.price}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllSales;
