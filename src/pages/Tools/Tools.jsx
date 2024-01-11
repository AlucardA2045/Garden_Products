import styles from "./styles.module.css";
import Sort from "../../components/Sort/Sort";
import { useEffect } from "react";
import Product from "../../components/Product/Product";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../storage/slice/productSlice";

const Tools = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id, dispatch]);

  const { list } = useSelector(({ product }) => product);

  return (
    <div className={styles.container}>
      {list.data && (
        <div>
          <Sort prod={list.category.title} />
          <Product items={list.data} />
        </div>
      )}
    </div>
  );
};

export default Tools;
