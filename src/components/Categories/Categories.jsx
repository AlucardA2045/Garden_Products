import { Link } from "react-router-dom";
import "./_Categories.scss";
import { useEffect } from "react";

const Categories = ({ itemsAll }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Link
        className="no__active"
        key={itemsAll.title}
        to={`/Categories/${itemsAll.id}`}
      >
        <li className="categories__list_link" key={itemsAll}>
          <img alt="#" src={"http://localhost:3333" + itemsAll.image} />
          <p>{itemsAll.title}</p>
        </li>
      </Link>
    </div>
  );
};

export default Categories;
