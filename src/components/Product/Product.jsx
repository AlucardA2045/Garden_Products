import { useEffect } from "react";
import styles from "./styles.module.css";

const Product = ({ items, itemsAll }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [items, itemsAll]);
  return (
    <>
      <div className={styles.block__sale}>
        <ul className={styles.block__list}>
          {items
            ? items.map((el, ind) => (
                <li className={styles.block__list_link} key={ind}>
                  <div className={styles.block__border}>
                    {el.discont_price ? (
                      <p className={styles.block__list_discont}>
                        {Math.round((el.discont_price / el.price) * 100 - 100) +
                          "%"}
                      </p>
                    ) : null}
                    <img alt="#" src={"http://localhost:3333" + el.image} />
                    <div className={styles.block__list_info}>
                      <p className={styles.block__list_title}>{el.title}</p>
                      {el.discont_price ? (
                        <div className={styles.block__list_price}>
                          <p className={styles.block__list_price_new}>
                            {"$" + el.discont_price}
                          </p>
                          <p className={styles.block__list_price_old}>
                            {"$" + el.price}
                          </p>
                        </div>
                      ) : (
                        <div className={styles.block__list_price}>
                          <p className={styles.block__list_price_new}>
                            {"$" + el.price}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))
            : itemsAll.map((el, ind) => (
                <li className={styles.block__list_link} key={ind}>
                  <div className={styles.block__border}>
                    {el.discont_price ? (
                      <p className={styles.block__list_discont}>
                        {Math.round((el.discont_price / el.price) * 100 - 100) +
                          "%"}
                      </p>
                    ) : null}
                    <img alt="#" src={"http://localhost:3333" + el.image} />
                    <div className={styles.block__list_info}>
                      <p className={styles.block__list_title}>{el.title}</p>
                      {el.discont_price ? (
                        <div className={styles.block__list_price}>
                          <p className={styles.block__list_price_new}>
                            {"$" + el.discont_price}
                          </p>
                          <p className={styles.block__list_price_old}>
                            {"$" + el.price}
                          </p>
                        </div>
                      ) : (
                        <div className={styles.block__list_price}>
                          <p className={styles.block__list_price_new}>
                            {"$" + el.price}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
        </ul>
      </div>
    </>
  );
};

export default Product;
