import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

import { FreeMode, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const Categories = ({ itemsMax, items }) => {
  const TwoStyles = `${styles.categories__list} "mySwiper" ${styles.swiper__style}`;

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
      ? setCount(3.4)
      : width >= SCREEN_XL
      ? setCount(3)
      : width >= SCREEN_MD
      ? setCount(2.5)
      : width >= SCREEN_MS
      ? setCount(1.9)
      : setCount(1.3);
  }, [width]);

  return (
    <div>
      <div className={styles.block__categories}>
        {itemsMax ? (
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
                <Link
                  className={styles.no__active}
                  key={el.title}
                  to={`/Allsales/${el.id}`}
                >
                  <img alt="#" src={"http://localhost:3333" + el.image} />
                  <p>{el.title}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <ul className={styles.categories__list}>
            {items.map((el, ind) => (
              <Link
                className={styles.no__active}
                key={el.title}
                to={`/Allsales/${el.id}`}
              >
                <li className={styles.categories__list_link} key={ind}>
                  <img alt="#" src={"http://localhost:3333" + el.image} />
                  <p>{el.title}</p>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Categories;
