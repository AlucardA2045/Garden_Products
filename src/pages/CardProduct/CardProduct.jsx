import { useEffect, useState } from "react";
import "./_CardProduct.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductOne } from "../../storage/slice/productOneSlice";
import { useParams } from "react-router-dom";
import { getCategory } from "../../storage/slice/categorySlice";
import minus from "../../assets/images/minus.svg";
import plus from "../../assets/images/plus.svg";
import OrtNow from "../../components/OrtNow/OrtNow";

const CartProduct = () => {
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

  const [count, setCount] = useState(1);

  // Функция для отображения цены с учетом скидки
  const discountPriceProduct = () => (
    <div className="card__price">
      <h3 className="card__price__normal">{listOne[0].discont_price}$</h3>
      <h3 className="card__price__discount">{listOne[0].price}$</h3>
      <div className="card__price__procent">
        <h4>
          {Math.round(
            (listOne[0].discont_price / listOne[0].price) * 100 - 100
          ) + "%"}
        </h4>
      </div>
    </div>
  );

  // Функция для отображения цены без скидки
  const priceProduct = () => (
    <div className="card__price">
      <h3 className="card__price__normal">{listOne[0].price}$</h3>
    </div>
  );

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
          {/* Изображение товара */}
          <img
            className="card__block"
            alt="#"
            src={"http://localhost:3333" + listOne[0].image}
          />
          <div className="card__info">
            {/* Название товара */}
            <h2>{listOne[0].title}</h2>
            {/* Отображение цены товара */}
            {listOne[0].discont_price ? discountPriceProduct() : priceProduct()}
            {/* Счетчик товаров и кнопка "Добавить в корзину" */}
            <div className="card__count">
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

export default CartProduct;
