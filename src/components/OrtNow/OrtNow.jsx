import React from "react";
import { Link } from "react-router-dom";
import "./_OrtNow.scss";

const OrtNow = ({
  allProductText,
  allCategoryText,
  allSalesText,
  categoryName,
  nameProduct,
  categoryId,
}) => {
  const renderLink = (to, text, is) => (
    <>
      <Link className="link" to={to}>
        {text}
      </Link>
      {is && <div></div>}
    </>
  );

  const renderNav = () => {
    return (
      <div className="top__text">
        {renderLink("/", "Main page", true)}
        {allCategoryText || allProductText || allSalesText ? (
          <p>
            {allCategoryText}
            {allProductText}
            {allSalesText}
          </p>
        ) : (
          <>
            {renderLink("/Categories", "Categories", true)}
            {nameProduct ? (
              renderLink(
                `/Categories/${categoryId}`,
                categoryName,
                nameProduct ? true : false
              )
            ) : (
              <p>{categoryName}</p>
            )}
            {nameProduct && <p>{nameProduct}</p>}
          </>
        )}
      </div>
    );
  };

  return <div>{renderNav()}</div>;
};

export default OrtNow;
