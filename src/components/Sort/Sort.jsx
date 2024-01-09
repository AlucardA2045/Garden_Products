import { useState } from "react";
import styles from "./styles.module.css";

const Sort = ({ prod, all }) => {
  const [open, setOpen] = useState(false);
  const [arrows, setArrows] = useState(false);
  const list = ["by default", "newest", "price: high-low", "price: low-high"];
  const [selected, setSelected] = useState(0);
  const sortName = list[selected];

  const onClickListItem = (ind) => {
    setSelected(ind);
    setOpen(false);
    setArrows(false);
  };

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
        ) : (
          <div className={styles.top__text}>
            <p>Main page</p>
            <div></div>
            <p>{all}</p>
          </div>
        )}
        <h3>
          {prod}
          {all}
        </h3>
        <div className={styles.top__search}>
          <div className={styles.top__search_input}>
            <p>Price</p>
            <input />
            <input />
          </div>
          <div className={styles.top__search_checkbox}>
            <label>Discounted items</label>
            <input type="checkbox" />
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
                {sortName}
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
                      stroke-width="1.34998"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </span>
            </div>
            {open && (
              <div className={styles.sort__popup}>
                <ul>
                  {list.map((name, ind) => (
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
