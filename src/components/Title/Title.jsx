import styles from "./styles.module.css";

const Title = ({ Sale, Categories }) => {
  return (
    <div>
      <div className={styles.categories__title}>
        <h2>
          {Sale}
          {Categories}
        </h2>
        <div className={styles.categories__title_block}>
          <div className={styles.categories__title_line}></div>
          <button className={styles.categories__title_button}>
            All categories
          </button>
        </div>
      </div>
    </div>
  );
};

export default Title;
