import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Sale = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/products/all")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  let discont = items.filter((el) => {
    return el.discont_price !== null;
  });

  let discontMax = discont.filter((el, ind) => {
    return ind < 4;
  });

  return (
    <div className={styles.sale}>
      <div className={styles.block__sale}>
        <ul className={styles.block__list}>
          {discontMax.map((el, ind) => (
            <li className={styles.block__list_link} key={ind}>
              <div className={styles.block__border}>
                <p className={styles.block__list_discont}>
                  {Math.round((el.discont_price / el.price) * 100 - 100) + "%"}
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sale;
