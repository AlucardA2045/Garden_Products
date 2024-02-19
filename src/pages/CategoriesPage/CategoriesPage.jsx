import Categories from "../../components/Categories/Categories";
import OrtNow from "../../components/OrtNow/OrtNow";
import "./_CategoriesPage.scss";
import { useSelector } from "react-redux";

const CategoriesPage = () => {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <div className="container">
      <OrtNow allCategoryText="Categories" />
      <h3 className="text__categories_page">Categories</h3>
      <div className="block__categories">
        <ul className="categories__list">
          {list.map((el, ind) => (
            <Categories itemsAll={el} key={ind} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesPage;
