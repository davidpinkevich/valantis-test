export type TypeIDs = {
  result: Array<string>;
};

export type TypeItem = {
  brand: null | string;
  id: string;
  price: number;
  product: string;
};

export type TypeItems = {
  result: Array<TypeItem>;
};

export type TypeItemsElement = {
  items: Array<TypeItem>;
};

export type TypePagination = {
  page: number;
  total: number;
  loading: boolean;
  setPage: (value: number) => void;
};

export type TypeFilters = {
  filter: string;
  loading: boolean;
  setFilter: (value: string) => void;
  setSearch: (value: string | number) => void;
};

export type TypeSelect = {
  loading: boolean;
  setFilter: (value: string) => void;
  setSearch: (value: string | number) => void;
};

export type TypeInput = {
  loading: boolean;
  setSearch: (value: string | number) => void;
};

export type TypeBody = {
  action: string;
  params?: TypeParams;
};

type ParamsIDs = { offset?: number; limit?: number };
type ParamsFilters = { product?: string; price?: number; brand?: string };
type ParamsITems = { ids: [] | Array<string> };

export type TypeParams = ParamsIDs | ParamsFilters | ParamsITems;
