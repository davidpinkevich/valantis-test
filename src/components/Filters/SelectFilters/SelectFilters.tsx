import { Select } from "@mantine/core";
import { memo } from "react";
import { TypeSelect } from "types";
import styles from "./styles.module.scss";

const SelectFilters = memo(({ loading, setFilter, setSearch }: TypeSelect) => {
  return (
    <div className={styles.select}>
      <Select
        label="Фильтрация товаров"
        defaultValue={"all"}
        disabled={loading}
        size="md"
        radius="md"
        data={[
          { value: "all", label: "Все товары" },
          { value: "product", label: "Продукция" },
          { value: "brand", label: "Бренд" },
          { value: "price", label: "Цена" },
        ]}
        onChange={(value) => {
          if (value) {
            setFilter(value);
            setSearch("");
          }
        }}
        allowDeselect={false}
      />
    </div>
  );
});

export { SelectFilters };
