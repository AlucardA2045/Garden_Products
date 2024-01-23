import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setCheck,
  setPriceMinus,
  setPricePlus,
} from "../../storage/slice/sortSlice";

const Sort = ({ prod, all, sales }) => {
  const [open, setOpen] = useState(false);
  const [arrows, setArrows] = useState(false);
  const { priceMinus, pricePlus, check, categoryName } = useSelector(
    (state) => state.sort
  );
  const listSort = [
    "by default",
    "newest",
    "price: high-low",
    "price: low-high",
  ];
  const [selected, setSelected] = useState(0);
  const sortName = listSort[selected];

  const dispatch = useDispatch();

  const onClickListItem = (ind) => {
    setSelected(ind);
    setOpen(false);
    setArrows(false);
  };

  useEffect(() => {
    dispatch(setCategory(sortName));
  }, [dispatch, sortName]);

  return (
    <div>
      <div className={styles.top}>
        {prod ? (
          <div className={styles.top__text}>
            <p>Main page</p>
            <div></div>
            <p>Categories</p>
            <div></div>
            <p>{prod}</p>
          </div>
        ) : all ? (
          <div className={styles.top__text}>
            <p>Main page</p>
            <div></div>
            <p>{all}</p>
          </div>
        ) : (
          <div className={styles.top__text}>
            <p>Main page</p>
            <div></div>
            <p>{sales}</p>
          </div>
        )}
        <h3>{prod ? prod : all ? all : "Discounted items"}</h3>
        <div className={styles.top__search}>
          <div className={styles.top__search_input}>
            <p>Price</p>
            <input
              value={priceMinus}
              onChange={(event) => dispatch(setPriceMinus(event.target.value))}
            />
            <input
              value={pricePlus}
              onChange={(event) => dispatch(setPricePlus(event.target.value))}
            />
          </div>
          <div className={styles.top__search_checkbox}>
            <label>Discounted items</label>
            <input
              checked={check}
              onChange={() => dispatch(setCheck())}
              type="checkbox"
            />
          </div>
          <div className={styles.sort}>
            <div className={styles.sort__label}>
              <b>Sorted</b>
              <span
                onClick={() => {
                  setOpen(!open);
                  setArrows(!arrows);
                }}
              >
                {categoryName}
                {!arrows ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M16 7L10 12.9998L4 7"
                      stroke="#282828"
                      strokeWidth="1.34998"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M16 12.9999L10 7.00004L4 12.9999"
                      stroke="#282828"
                      strokeWidth="1.34998"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            </div>
            {open && (
              <div className={styles.sort__popup}>
                <ul>
                  {listSort.map((name, ind) => (
                    <li
                      key={name}
                      onClick={() => onClickListItem(ind)}
                      className={
                        selected === ind ? styles.sort__label__popup_active : ""
                      }
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
