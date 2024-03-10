import { Pagination } from "@mantine/core";
import { TypePagination } from "types";
import styles from "./styles.module.scss";

const PaginationBlock = ({ loading, page, total, setPage }: TypePagination) => {
  return (
    <div className={styles.pagination}>
      <Pagination
        radius="md"
        size="xl"
        value={page}
        onChange={setPage}
        total={total}
        disabled={loading}
      />
    </div>
  );
};

export default PaginationBlock;
