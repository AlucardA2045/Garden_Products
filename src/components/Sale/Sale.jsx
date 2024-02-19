import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountProduct, removeProduct } from "../../storage/slice/cartSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "./_Sale.scss";

const Sale = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(({ products }) => products);
  const { product } = useSelector(({ cartProduct }) => cartProduct);

  let discont = list.filter((el) => {
    return el.discont_price !== null;
  });

  let discontMax = discont.filter((el, ind) => {
    return ind < 10;
  });

  const TwoStyles = `"block__list" "mySwiper"`;

  const breakpoints = () => {
    return {
      1400: {
        slidesPerView: 4,
        spaceBetween: 29,
      },
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 0,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      830: {
        slidesPerView: 2.5,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 1.9,
        spaceBetween: 0,
      },
      490: {
        slidesPerView: 1.4,
        spaceBetween: 0,
      },
    };
  };

  // Состояние для хранения информации о том, на какие кнопки было произведено нажатие
  const [clickedButtons, setClickedButtons] = useState([]);

  const handleButtonClick = (el) => {
    // Проверяем, есть ли товар уже в корзине
    const isItemInCart = product.find((item) => item.id === el.id);

    // Если товар уже в корзине, удаляем его из корзины
    if (isItemInCart) {
      dispatch(removeProduct(el.id));
    } else {
      // Иначе добавляем товар в корзину
      dispatch(setCountProduct(el));
    }

    // Обновляем состояние нажатых кнопок
    if (clickedButtons.includes(el.id)) {
      setClickedButtons(
        clickedButtons.filter((buttonId) => buttonId !== el.id)
      );
    } else {
      setClickedButtons([...clickedButtons, el.id]);
    }
  };

  return (
    <div className="sale">
      <div className="block__sale">
        <Swiper
          slidesPerView={1}
          spaceBetween={29}
          breakpoints={breakpoints()}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className={TwoStyles}
        >
          {discontMax.map((el, ind) => (
            <SwiperSlide
              style={{ height: "480px" }}
              className="block__list_link"
              key={ind}
            >
              <button
                onClick={() => handleButtonClick(el)}
                className={`cart__hover_sale ${
                  product.find((item) => item.id === el.id) ? "clicked" : ""
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
                      <p className="block__list_price_old">{"$" + el.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Sale;
