import React, { useState } from "react";
import styles from "./styles.module.css";
import minus from "../../assets/images/minus.svg";
import plus from "../../assets/images/plus.svg";
import { useDispatch } from "react-redux";
import {
  updateProductCount,
  removeProduct,
} from "../../storage/slice/cartSlice";

export default function CartCard({ item }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.count);

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
      dispatch(updateProductCount({ id: item.id, count: count - 1 }));
    } else {
      dispatch(removeProduct(item.id));
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
    dispatch(updateProductCount({ id: item.id, count: count + 1 }));
  };

  const handleRemoveProduct = () => {
    dispatch(removeProduct(item.id));
  };

  const handleCountChange = (event) => {
    const newCount = parseInt(event.target.value);
    if (!isNaN(newCount) && newCount >= 1) {
      setCount(newCount);
      dispatch(updateProductCount({ id: item.id, count: newCount }));
    }
  };

  return (
    <div className={styles.cart_products}>
      <img
        className={styles.card__img}
        alt="#"
        src={"http://localhost:3333" + item.image}
      />
      <div className={styles.product__info}>
        <div className={styles.product__name}>
          <h4>{item.title}</h4>
          <div onClick={handleRemoveProduct} className={styles.remove_button}>
            X
          </div>
        </div>
        <div className={styles.card__count}>
          <div>
            <button onClick={decreaseCount}>
              <img alt="#" src={minus} />
            </button>
            <input min="1" value={count} onChange={handleCountChange} />
            <button onClick={increaseCount}>
              <img alt="#" src={plus} />
            </button>
          </div>
          {item.discont_price ? (
            <div className={styles.card__price}>
              <h3 className={styles.card__price__normal}>{`${
                Number(item.priceMax) * count
              }`}</h3>
              <h3 className={styles.card__price__discount}>{item.price}</h3>
            </div>
          ) : (
            <div className={styles.card__price}>
              <h3 className={styles.card__price__normal}>{`${
                Number(item.priceMax) * count
              }`}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
