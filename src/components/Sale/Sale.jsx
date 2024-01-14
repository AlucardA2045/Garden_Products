import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

import { FreeMode, Pagination } from "swiper/modules";

const Sale = () => {
  const [items, setItems] = useState([]);

  const SCREEN_MS = 656;
  const SCREEN_MD = 856;
  const SCREEN_ML = 1000;
  const SCREEN_XL = 1200;
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
      : width >= SCREEN_XL
      ? setCount(3)
      : width >= SCREEN_ML
      ? setCount(2.8)
      : width >= SCREEN_MD
      ? setCount(2.5)
      : width >= SCREEN_MS
      ? setCount(1.9)
      : setCount(1.5);
  }, [width]);

  useEffect(() => {
    fetch("http://localhost:3333/products/all")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  let discont = items.filter((el) => {
    return el.discont_price !== null;
  });

  let discontMax = discont.filter((el, ind) => {
    return ind < 10;
  });

  const TwoStyles = `${styles.block__list} "mySwiper"`;

  return (
    <div className={styles.sale}>
      <div className={styles.block__sale}>
        <Swiper
          slidesPerView={count}
          spaceBetween={0}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className={TwoStyles}
        >
          {discontMax.map((el, ind) => (
            <SwiperSlide className={styles.block__list_link} key={ind}>
              <div className={styles.block__border}>
                <p className={styles.block__list_discont}>
                  {Math.round((el.discont_price / el.price) * 100 - 100) + "%"}
                </p>
                <img alt="#" src={"http://localhost:3333" + el.image} />
                <div className={styles.block__list_info}>
                  <p className={styles.block__list_title}>{el.title}</p>
                  <div className={styles.block__list_price}>
                    <p className={styles.block__list_price_new}>
                      {"$" + el.discont_price}
                    </p>
                    <p className={styles.block__list_price_old}>
                      {"$" + el.price}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Sale;
