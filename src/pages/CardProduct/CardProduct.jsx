import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductOne } from "../../storage/slice/productOneSlice";
import { useParams } from "react-router-dom";
import { getCategory } from "../../storage/slice/categorySlice";
import minus from "../../assets/images/minus.svg";
import plus from "../../assets/images/plus.svg";

const CartProduct = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductOne(id));
    dispatch(getCategory());
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  const { listOne } = useSelector(({ productOne }) => productOne);
  const { list } = useSelector(({ categories }) => categories);

  const [count, setCount] = useState(1);

  return (
    <div className={styles.container}>
      {listOne[0] && list[0] && (
        <div className={styles.top__text}>
          <p>Main page</p>
          <div></div>
          <p>Categories</p>
          <div></div>
          <p>{list[listOne[0].categoryId - 1].title}</p>
          <div></div>
          <p>{listOne[0].title}</p>
        </div>
      )}
      {listOne[0] && (
        <div className={styles.card}>
          <img
            className={styles.card__block}
            alt="#"
            src={"http://localhost:3333" + listOne[0].image}
          />
          <div className={styles.card__info}>
            <h2>{listOne[0].title}</h2>
            {listOne[0].discont_price ? (
              <div className={styles.card__price}>
                <h3 className={styles.card__price__normal}>
                  {listOne[0].discont_price}$
                </h3>
                <h3 className={styles.card__price__discount}>
                  {listOne[0].price}$
                </h3>
                <div className={styles.card__price__procent}>
                  <h4>
                    {Math.round(
                      (listOne[0].discont_price / listOne[0].price) * 100 - 100
                    ) + "%"}
                  </h4>
                </div>
              </div>
            ) : (
              <div className={styles.card__price}>
                <h3 className={styles.card__price__normal}>
                  {listOne[0].price}$
                </h3>
              </div>
            )}
            <div className={styles.card__count}>
              <div>
                <button>
                  <img alt="#" src={minus} />
                </button>
                <input
                  onChange={(event) => setCount(event.target.value)}
                  value={count}
                />
                <button>
                  <img alt="#" src={plus} />
                </button>
              </div>
              <button>Add to cart</button>
            </div>
            <h3 className={styles.card__description}>Description</h3>
            <p>{listOne[0].description}</p>
            <h5>Read more</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartProduct;
