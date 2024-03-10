import img from "../../assets/images/empty.svg";
import styles from "./styles.module.scss";

const Empty = () => {
  return (
    <div className={styles.empty}>
      <div className={styles.img}>
        <img src={img} alt="epmty" />
      </div>
      <p>По данному запросу нет подходящих товаров</p>
    </div>
  );
};

export { Empty };
