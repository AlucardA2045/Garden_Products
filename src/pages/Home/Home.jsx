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
import { useEffect, useState } from "react";

const Home = () => {
  const { list } = useSelector(({ categories }) => categories);

  let itemsMax = list.filter((el, ind) => {
    return ind < 5;
  });

  const SCREEN_MS = 600;
  const SCREEN_MD = 800;
  const SCREEN_XL = 1200;
  const SCREEN_XX = 1100;
  const SCREEN_XXL = 1400;

  const [width, setWidth] = useState(window.innerWidth);
  const [count, setCount] = useState(4);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    width >= SCREEN_XXL
      ? setCount(4)
      : width >= SCREEN_XX
      ? setCount(3.5)
      : width >= SCREEN_XL
      ? setCount(3)
      : width >= SCREEN_MD
      ? setCount(2.5)
      : width >= SCREEN_MS
      ? setCount(1.9)
      : setCount(1.3);
  }, [width]);

  const TwoStyles = `${styles.categories__list} "mySwiper" ${styles.swiper__style}`;

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
          slidesPerView={count}
          spaceBetween={30}
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
