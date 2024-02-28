import React, { useState, useEffect } from "react";
import "./_CardProduct.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setCountProduct,
  removeProduct,
  updateProductCount,
} from "../../storage/slice/cartSlice";
import { getProductOne } from "../../storage/slice/productOneSlice";
import { useParams } from "react-router-dom";
import { getCategory } from "../../storage/slice/categorySlice";
import minus from "../../assets/images/minus.svg";
import plus from "../../assets/images/plus.svg";
import OrtNow from "../../components/OrtNow/OrtNow";

const CardProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    // Получение данных о выбранном товаре и категориях при загрузке компонента
    dispatch(getProductOne(id));
    dispatch(getCategory());
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  const { listOne } = useSelector(({ productOne }) => productOne);
  const { list } = useSelector(({ categories }) => categories);
  const { product } = useSelector(({ cartProduct }) => cartProduct);

  const [count, setCount] = useState(1);
  const [isItemInCart, setIsItemInCart] = useState(false);

  useEffect(() => {
    // Проверка, находится ли товар в корзине при загрузке компонента
    setIsItemInCart(product.some((item) => item.id === listOne[0]?.id));

    if (listOne[0]) {
      const productInCart = product.find((item) => item.id === listOne[0].id);
      if (productInCart) {
        setCount(productInCart.count);
      } else {
        setCount(1);
      }
    }
  }, [product, listOne]);

  const handleButtonClick = () => {
    if (isItemInCart) {
      dispatch(removeProduct(listOne[0].id));
      setIsItemInCart(false);
    } else {
      dispatch(setCountProduct({ ...listOne[0], count: count }));
      setIsItemInCart(true);
    }
  };

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    dispatch(updateProductCount({ id: listOne[0].id, count: newCount }));
  };

  const handleDecrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      dispatch(updateProductCount({ id: listOne[0].id, count: newCount }));
    } else {
      dispatch(removeProduct(listOne[0].id));
    }
  };

  const handleInputChange = (event) => {
    const newCount = parseInt(event.target.value);
    if (!isNaN(newCount) && newCount >= 1) {
      setCount(newCount);
      dispatch(updateProductCount({ id: listOne[0].id, count: newCount }));
    }
  };

  return (
    <div className="container">
      {/* Отображение местоположения товара на странице */}
      {listOne[0] && list[0] && (
        <OrtNow
          categoryName={list[listOne[0].categoryId - 1].title}
          categoryId={listOne[0].categoryId}
          nameProduct={listOne[0].title}
        />
      )}
      {/* Отображение карточки товара */}
      {listOne[0] && (
        <div className="card">
          <img
            className="card__block"
            alt="#"
            src={"http://localhost:3333" + listOne[0].image}
          />
          <div className="card__info">
            <h2>{listOne[0].title}</h2>
            {/* Отображение цены с учетом скидки или без */}
            <div className="card__price">
              {listOne[0].discont_price ? (
                <>
                  <h3 className="card__price__normal">
                    {listOne[0].discont_price}$
                  </h3>
                  <h3 className="card__price__discount">{listOne[0].price}$</h3>
                  <div className="card__price__procent">
                    <h4>
                      {Math.round(
                        (listOne[0].discont_price / listOne[0].price) * 100 -
                          100
                      ) + "%"}
                    </h4>
                  </div>
                </>
              ) : (
                <h3 className="card__price__normal">{listOne[0].price}$</h3>
              )}
            </div>
            {/* Счетчик товаров и кнопка Добавить в корзину */}
            <div className="card__count">
              <div>
                <button onClick={handleDecrement}>
                  <img alt="#" src={minus} />
                </button>
                <input type="text" onChange={handleInputChange} value={count} />
                <button onClick={handleIncrement}>
                  <img alt="#" src={plus} />
                </button>
              </div>
              <button
                onClick={handleButtonClick}
                className={`CardProduct__button ${
                  isItemInCart ? "clicked" : ""
                }`}
              >
                {isItemInCart ? "Remove from cart" : "Add to cart"}
              </button>
            </div>
            {/* Описание товара */}
            <h3 className="card__description">Description</h3>
            <p>{listOne[0].description}</p>
            <h5>Read more</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardProduct;
