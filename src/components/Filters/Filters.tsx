import { memo } from "react";
import { SelectFilters } from "./SelectFilters/SelectFilters";
import { InputText } from "./InputText/InputText";
import { InputNumber } from "./InputNumber/InputNumber";
import { TypeFilters } from "types";
import styles from "./styles.module.scss";

const Filters = memo(
  ({ loading, filter, setFilter, setSearch }: TypeFilters) => {
    return (
      <div className={styles.filters}>
        <SelectFilters
          setFilter={setFilter}
          setSearch={setSearch}
          loading={loading}
        />
        {filter === "price" && (
          <InputNumber setSearch={setSearch} loading={loading} />
        )}
        {(filter === "product" || filter === "brand") && (
          <InputText setSearch={setSearch} loading={loading} />
        )}
      </div>
    );
  }
);

export { Filters };
