import React, { useEffect } from "react";
import "./_AllSales.scss";
import { useSelector } from "react-redux";
import Sort from "../../components/Sort/Sort";
import OrtNow from "../../components/OrtNow/OrtNow";
import SortProducts from "../../components/SortProducts/SortPtoducts"; // Импортируйте компонент SortProducts
import Product from "../../components/Product/Product";

const AllSales = () => {
  // Получение списка товаров из Redux-стейта
  const { list } = useSelector(({ products }) => products);

  // Прокрутка страницы вверх при изменении списка товаров
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [list]);

  // Вызываем компонент SortProducts и передаем необходимые параметры
  const { categoryName, priceMinus, pricePlus } = useSelector(
    (state) => state.sort
  );

  // Передайте необходимые свойства компоненту SortProducts
  const sortedAndFilteredList = SortProducts({
    sortList: list,
    categoryName,
    priceMinus,
    pricePlus,
  });

  // Фильтрация товаров со скидкой
  const discont = sortedAndFilteredList.filter(
    (el) => el.discont_price !== null
  );

  return (
    <div className="container">
      <OrtNow allCategoryText="All sales" />
      <Sort isCheck="" />
      <Product items={discont} />
    </div>
  );
};

export default AllSales;
