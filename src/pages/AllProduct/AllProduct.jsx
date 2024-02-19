import React from "react";
import "./_AllProduct.scss";
import Sort from "../../components/Sort/Sort";
import Product from "../../components/Product/Product";
import OrtNow from "../../components/OrtNow/OrtNow";
import { useSelector } from "react-redux";

const AllProduct = () => {
  const { list } = useSelector(({ products }) => products);

  return (
    <div className="container">
      <OrtNow allProductText="All products" />
      <Sort all="All products" isCheck="true" />
      <Product items={list} />
    </div>
  );
};

export default AllProduct;
