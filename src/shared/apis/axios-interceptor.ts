import axios, { InternalAxiosRequestConfig } from "axios";
import { Config } from "../config";
import { getShopId } from "../utils";

export const axiosInstance = axios.create({
  baseURL: Config.rootUrl,
});

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const sId = await getShopId();
    config.headers["sId"] = sId;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
