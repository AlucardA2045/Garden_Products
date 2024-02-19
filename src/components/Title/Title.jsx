import { Link } from "react-router-dom";
import "./_Title.scss";

const Title = ({
  Sale,
  Categories,
  AllCategories,
  AllSales,
  ShoppingCart,
  BackTo,
}) => {
  return (
    <div>
      <div className="categories__title">
        <h2>
          {Sale}
          {Categories}
          {ShoppingCart}
        </h2>
        <div className="categories__title_block">
          <div className="categories__title_line"></div>
          <Link
            to={
              Categories
                ? "/Categories"
                : AllSales
                ? "/AllSales"
                : "/AllProduct"
            }
          >
            <button className="categories__title_button">
              {AllCategories}
              {AllSales}
              {BackTo}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Title;
