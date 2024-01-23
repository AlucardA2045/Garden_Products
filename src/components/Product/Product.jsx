import { useEffect } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Product = ({ items, itemsAll }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [items, itemsAll]);

  return (
    <>
      <div className={styles.block__sale}>
        <ul className={styles.block__list}>
          {(items || itemsAll).map((el, ind) => (
            <li className={styles.block__list_link} key={ind}>
              <button className={styles.cart__hover}>Add to cart</button>
              <Link
                className={styles.no__active}
                key={ind}
                to={`/CartProduct/${el.id}`}
              >
                <div className={styles.block__border}>
                  {el.discont_price ? (
                    <div>
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
                  ) : (
                    <div>
                      <img alt="#" src={"http://localhost:3333" + el.image} />
                      <div className={styles.block__list_info}>
                        <p className={styles.block__list_title}>{el.title}</p>
                        <div className={styles.block__list_price}>
                          <p className={styles.block__list_price_new}>
                            {"$" + el.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Product;
