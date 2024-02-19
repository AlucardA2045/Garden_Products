import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Categories from "../../components/Categories/Categories";
import GetDiscount from "../../components/GetDiscount/GetDiscount";
import Sale from "../../components/Sale/Sale";
import Title from "../../components/Title/Title";
import "./_Home.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles.css";
import { FreeMode, Pagination } from "swiper/modules";

const Home = () => {
  const { list } = useSelector(({ categories }) => categories);

  const itemsMax = list.slice(0, 5);

  const getDiscountRef = useRef(null);

  const handleCheckOutClick = () => {
    getDiscountRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const swiperStyles = `"categories__list "mySwiper" "swiper__style`;

  const getSwiperBreakpoints = () => ({
    1400: {
      slidesPerView: 4,
      spaceBetween: 27.5,
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
  });

  return (
    <div className="home">
      <div className="home__img">
        <div className="home__img_content">
          <h1>Amazing Discounts on Garden Products!</h1>
          <button className="home__img_button" onClick={handleCheckOutClick}>
            Check out
          </button>
        </div>
      </div>
      <div className="container">
        <Title Categories="Categories" AllCategories="All categories" />
        <Swiper
          slidesPerView={1}
          spaceBetween={27.5}
          breakpoints={getSwiperBreakpoints()}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className={swiperStyles}
        >
          {itemsMax.map((el, ind) => (
            <SwiperSlide
              style={{ height: "420px" }}
              className="categories__list_link"
              key={ind}
            >
              <Categories itemsAll={el} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={getDiscountRef}></div>
        <GetDiscount />
        <Title Sale="Sale" AllSales="All sales" />
        <Sale />
      </div>
    </div>
  );
};

export default Home;
