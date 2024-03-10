import { api } from "./baseApi";
import { createBody } from "../utils/helpers";
import { TypeIDs, TypeItems } from "../types";

class DataServices {
  async getIDs(): Promise<TypeIDs | undefined> {
    try {
      const respone: TypeIDs = await api.post("", createBody("get_ids")).json();
      return respone;
    } catch (error) {
      console.log("Error with getting ID: ", (error as Error).message);
    }
  }

  async getItems(items: Array<string>): Promise<TypeItems | undefined> {
    try {
      const respone: TypeItems = await api
        .post("", createBody("get_items", { ids: items }))
        .json();
      return respone;
    } catch (error) {
      console.log("Error with getting Items: ", (error as Error).message);
    }
  }

  async getFilters(
    type: string,
    value: string | number
  ): Promise<TypeIDs | undefined> {
    try {
      const respone: TypeIDs = await api
        .post("", createBody("filter", { [type]: value }))
        .json();
      return respone;
    } catch (error) {
      console.log(
        "Error with getting filtered Items: ",
        (error as Error).message
      );
    }
  }
}

export const service = new DataServices();
