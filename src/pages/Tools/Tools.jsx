import styles from "./styles.module.css";
import Sort from "../../components/Sort/Sort";
import { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import { useParams } from "react-router-dom";

const Tools = () => {
  const [items, setItems] = useState([]);
  const [itemsName, setItemsName] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3333/categories/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr.data);
        setItemsName(arr.category);
      });
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className={styles.container}>
      <Sort prod={itemsName.title} />
      <Product items={items} />
    </div>
  );
};

export default Tools;
