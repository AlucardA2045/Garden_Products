import React, { useState, useEffect } from "react";
import "./_Sort.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setCheck,
  setPriceMinus,
  setPricePlus,
  setNewTextValue,
} from "../../storage/slice/sortSlice";

const Sort = ({ prod, all, isCheck }) => {
  const [open, setOpen] = useState(false);
  const [arrows, setArrows] = useState(false);
  const dispatch = useDispatch();
  const { priceMinus, pricePlus, check, categoryName, newTextValue } =
    useSelector((state) => state.sort);

  const listSort = [
    "by default",
    "newest",
    "price: high-low",
    "price: low-high",
  ];
  const [selected, setSelected] = useState(0);
  const sortName = listSort[selected];

  const onClickListItem = (ind) => {
    setSelected(ind);
    setOpen(false);
    setArrows(false);
  };

  useEffect(() => {
    dispatch(setCategory(sortName));
  }, [dispatch, sortName]);

  const handleNewTextChange = (e) => {
    dispatch(setNewTextValue(e.target.value)); // Отправляем новое значение
  };

  return (
    <div className="top">
      <h3>{prod || all || "Discounted items"}</h3>
      <div className="top__search">
        <div className="top__search_input">
          <p>Price</p>
          <input
            value={priceMinus}
            onChange={(e) => dispatch(setPriceMinus(e.target.value))}
          />
          <input
            value={pricePlus}
            onChange={(e) => dispatch(setPricePlus(e.target.value))}
          />
        </div>
        {isCheck && (
          <div className="top__search_checkbox">
            <label>Discounted items</label>
            <input
              type="checkbox"
              checked={check}
              onChange={() => dispatch(setCheck())}
            />
          </div>
        )}
        <div className="sort">
          <div className="sort__label">
            <b>Sorted</b>
            <span
              onClick={() => {
                setOpen(!open);
                setArrows(!arrows);
              }}
            >
              {categoryName}{" "}
              {!arrows ? (
                <SortArrow direction="up" />
              ) : (
                <SortArrow direction="down" />
              )}
            </span>
          </div>
          {open && (
            <div className="sort__popup">
              <ul>
                {listSort.map((name, ind) => (
                  <li
                    key={name}
                    onClick={() => onClickListItem(ind)}
                    className={
                      selected === ind ? "sort__label__popup_active" : ""
                    }
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="top__search_input">
          <p>Name</p>
          <input value={newTextValue} onChange={handleNewTextChange} />
        </div>
      </div>
    </div>
  );
};

const SortArrow = ({ direction }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d={
        direction === "up"
          ? "M16 7L10 12.9998L4 7"
          : "M16 12.9999L10 7.00004L4 12.9999"
      }
      stroke="#282828"
      strokeWidth="1.34998"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Sort;
