import React, { useEffect, useState } from "react";
import "./_Product.scss";
import { Link } from "react-router-dom";
import SortProducts from "../SortProducts/SortPtoducts";
import { useDispatch, useSelector } from "react-redux";
import { setCountProduct, removeProduct } from "../../storage/slice/cartSlice";
import { Pagination } from "@mui/material";
import debounce from "lodash.debounce";

const Product = ({ items }) => {
  const { categoryName, priceMinus, pricePlus, check, newTextValue } =
    useSelector((state) => state.sort);
  const { product } = useSelector(({ cartProduct }) => cartProduct);

  const dispatch = useDispatch();
  const [clickedButtons, setClickedButtons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [items]);

  useEffect(() => {
    const handleFilterChange = debounce(() => {
      const sortedAndFilteredList = SortProducts({
        sortList: items,
        categoryName,
        priceMinus,
        pricePlus,
        newTextValue,
      });
      const newListCheck = check
        ? sortedAndFilteredList.filter((el) => el.discont_price !== null)
        : sortedAndFilteredList;
      setFilteredItems(newListCheck);
    }, 500);

    handleFilterChange();

    return () => {
      // Очистка debounce при размонтировании компонента
      handleFilterChange.cancel();
    };
  }, [items, categoryName, priceMinus, pricePlus, check, newTextValue]);

  const handleButtonClick = (el) => {
    const isItemInCart = product.find((item) => item.id === el.id);
    if (isItemInCart) {
      dispatch(removeProduct(el.id));
      setClickedButtons(
        clickedButtons.filter((buttonId) => buttonId !== el.id)
      );
    } else {
      dispatch(setCountProduct(el));
      setClickedButtons([...clickedButtons, el.id]);
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="block__sale">
        <ul className="block__list">
          {currentItems.map((el, ind) => (
            <li className="block__list_link" key={ind}>
              <button
                onClick={() => handleButtonClick(el)}
                className={`cart__hover ${
                  clickedButtons.includes(el.id) ||
                  product.find((item) => item.id === el.id)
                    ? "clicked"
                    : ""
                }`}
              >
                {product.find((item) => item.id === el.id)
                  ? "Remove from cart"
                  : "Add to cart"}
              </button>
              <Link
                className="no__active"
                key={ind}
                to={`/CartProduct/${el.id}`}
              >
                <div className="block__border">
                  {el.discont_price ? (
                    <div>
                      <p className="block__list_discont">
                        {Math.round((el.discont_price / el.price) * 100 - 100) +
                          "%"}
                      </p>
                      <img alt="#" src={"http://localhost:3333" + el.image} />
                      <div className="block__list_info">
                        <p className="block__list_title">{el.title}</p>
                        <div className="block__list_price">
                          <p className="block__list_price_new">
                            {"$" + el.discont_price}
                          </p>
                          <p className="block__list_price_old">
                            {"$" + el.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <img alt="#" src={"http://localhost:3333" + el.image} />
                      <div className="block__list_info">
                        <p className="block__list_title">{el.title}</p>
                        <div className="block__list_price">
                          <p className="block__list_price_new">
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
      <div className="pagination-container">
        <Pagination
          count={Math.ceil(filteredItems.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          classes={{ ul: "pagination-ul" }} // Добавляем пользовательские классы для пагинации
        />
      </div>
    </>
  );
};

export default Product;
