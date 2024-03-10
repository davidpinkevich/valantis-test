import { FC } from "react";
import { TypeItem } from "types";
import styles from "./styles.module.scss";

const Item: FC<TypeItem> = ({ brand, id, price, product }) => {
  return (
    <div className={styles.item}>
      <p className={styles.id}>
        № <span>{id}</span>
      </p>
      <p className={styles.product}>
        Продукт: <span>{product}</span>
      </p>
      <p className={styles.price}>
        Цена: <span>{price}</span>
      </p>
      {brand && (
        <p className={styles.brand}>
          Бренд: <span>{brand}</span>
        </p>
      )}
    </div>
  );
};

export { Item };
