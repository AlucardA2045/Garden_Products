import { useSelector } from "react-redux";
import Categories from "../../components/Categories/Categories";
import GetDiscount from "../../components/GetDiscount/GetDiscount";
import Sale from "../../components/Sale/Sale";
import Title from "../../components/Title/Title";
import styles from "./style.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

import { FreeMode, Pagination } from "swiper/modules";

const Home = () => {
  const { list } = useSelector(({ categories }) => categories);

  let itemsMax = list.filter((el, ind) => {
    return ind < 5;
  });

  const TwoStyles = `${styles.categories__list} "mySwiper" ${styles.swiper__style}`;

  const breakpoints = () => {
    return {
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
    };
  };

  return (
    <div className={styles.home}>
      <div className={styles.home__img}>
        <div className={styles.home__img_content}>
          <h1>Amazing Discounts on Garden Products!</h1>
          <button className={styles.home__img_button}>Check out</button>
        </div>
      </div>
      <div className={styles.container}>
        <Title Categories="Categories" AllCategories="All categories" />
        <Swiper
          slidesPerView={1}
          spaceBetween={27.5}
          breakpoints={breakpoints()}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className={TwoStyles}
        >
          {itemsMax.map((el, ind) => (
            <SwiperSlide className={styles.categories__list_link} key={ind}>
              <Categories itemsAll={el} />
            </SwiperSlide>
          ))}
        </Swiper>
        <GetDiscount />
        <Title Sale="Sale" AllSales="All sales" />
        <Sale />
      </div>
    </div>
  );
};

export default Home;
