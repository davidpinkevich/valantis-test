import "@mantine/core/styles.css";
import { useLogic } from "./useLogic";
import { MantineProvider } from "@mantine/core";
import { Filters } from "../Filters/Filters";
import { Items } from "../Items/Items";
import { Empty } from "../Empty/Empty";
import { Loading } from "../Loading/Loading";
import { totalPages } from "../../utils/helpers";
import Pagination from "../Pagination/Pagination";
import styles from "./styles.module.scss";

function App() {
  const { cards, filter, ids, loading, page, setFilter, setPage, setSearch } =
    useLogic();

  return (
    <MantineProvider>
      <div className={styles.valantis}>
        <Filters
          loading={loading}
          filter={filter}
          setFilter={setFilter}
          setSearch={setSearch}
        />
        {loading && <Loading />}
        {!loading && ids && !!ids.length && <Items items={cards} />}
        {!loading && cards.length === 0 && <Empty />}
        {ids && ids.length > 50 && (
          <Pagination
            loading={loading}
            page={page}
            total={totalPages(ids)}
            setPage={setPage}
          />
        )}
      </div>
    </MantineProvider>
  );
}

export default App;
