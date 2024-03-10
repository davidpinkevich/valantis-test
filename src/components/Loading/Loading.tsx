import styles from "./styles.module.scss";

function Loading() {
  return (
    <div className={styles.loading}>
      Поиск товаров
      <span className={styles.loading_first}></span>
      <span className={styles.loading_second}></span>
      <span className={styles.loading_third}></span>
    </div>
  );
}

export { Loading };
