import md5 from "md5";
import { API_PASSWORD } from "../constants";
import { TypeParams, TypeBody, TypeItem } from "../../types";

export const getHashAuth = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month =
    currentDate.getMonth() + 1 <= 9
      ? `0${currentDate.getMonth() + 1}`
      : `${currentDate.getMonth() + 1}`;

  const day =
    currentDate.getDate() <= 9
      ? `0${currentDate.getDate()}`
      : `${currentDate.getDate()}`;

  return md5(`${API_PASSWORD}_${year}${month}${day}`);
};

export const createBody = (
  action: string,
  params?: TypeParams
): { body: string } => {
  const body: TypeBody = { action };
  if (params) {
    body.params = params;
  }
  return { body: JSON.stringify(body) };
};

export const totalPages = (ids: Array<string>) => Math.ceil(ids.length / 50);

export const createSet = (items: Array<string>) => {
  const set = new Set(items);
  return Array.from(set);
};

export const createSetObjects = (items: Array<TypeItem>) => {
  const set = new Set();
  const filteredData = items.filter((obj) => {
    if (set.has(obj.id)) {
      return false;
    }
    set.add(obj.id);
    return true;
  });
  return filteredData;
};
