import { memo } from "react";
import { Item } from "../../components/Item/Item";
import { TypeItemsElement } from "types";
import styles from "./styles.module.scss";

const Items = memo(({ items }: TypeItemsElement) => {
  return (
    <div className={styles.items}>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
});

export { Items };
