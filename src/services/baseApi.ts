import ky from "ky";
import { BASE_URL } from "../utils/constants";
import { getHashAuth } from "../utils/helpers";

const api = ky.create({
  prefixUrl: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Auth": getHashAuth(),
  },
});

export { api };
