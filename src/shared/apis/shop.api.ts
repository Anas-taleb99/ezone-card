import axios from "axios";
import { Config } from "../config";

const baseUrl = `${Config.rootUrl}/Shop`;

export const getrequestShopId = async (localUrl: string) => {
  const res = await axios.get<TResponse<TShop>>(`${baseUrl}/getrequestShopId`, {
    headers: {
      Referer: localUrl,
    },
  });

  return res;
};
