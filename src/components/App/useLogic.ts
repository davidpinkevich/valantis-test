import { useEffect, useState } from "react";
import { service } from "../../services/dataServices";
import { createSet, createSetObjects } from "../../utils/helpers";
import { TypeItem } from "types";

function useLogic() {
  const [ids, setIds] = useState<Array<string> | undefined>();
  const [cards, setCards] = useState<Array<TypeItem>>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState<string | number>("");

  const fetchIDs = async () => {
    if (filter === "all") {
      setLoading(true);
      setPage(1);
      const data = await service.getIDs();
      if (data) {
        setIds(createSet(data.result));
      } else {
        fetchIDs();
      }
    }
  };

  const fetchFilters = async () => {
    if ((search || search === 0) && filter !== "all") {
      setLoading(true);
      const data = await service.getFilters(filter, search);
      if (data) {
        setPage(1);
        setIds(createSet(data.result));
      } else {
        fetchFilters();
      }
    }
  };

  const fetchCards = async () => {
    if (ids) {
      setLoading(true);
      const data = await service.getItems(
        ids.slice((page - 1) * 50, page * 50)
      );
      if (data) {
        setCards(createSetObjects(data.result));
        setLoading(false);
      } else {
        fetchCards();
      }
    }
  };

  useEffect(() => {
    fetchIDs();
  }, [filter]);

  useEffect(() => {
    fetchFilters();
  }, [search]);

  useEffect(() => {
    fetchCards();
  }, [page, ids]);

  return {
    ids,
    cards,
    page,
    setPage,
    loading,
    filter,
    setFilter,
    setSearch,
  };
}

export { useLogic };
