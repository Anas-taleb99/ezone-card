import axios from "axios";
import { Config } from "../config";
import { axiosInstance } from "./axios-interceptor";

const baseUrl = `${Config.rootUrl}/Shop`;

export const getrequestShopId = async (localUrl: string) => {
  const res = await axios.get<TResponse<TShop>>(`${baseUrl}/getrequestShopId`, {
    headers: {
      Referer: localUrl,
    },
  });

  return res;
};
