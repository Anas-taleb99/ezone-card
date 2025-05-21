import { axiosInstance } from "./axios-interceptor";

const baseUrl = "/ShopProducts";

export const getProductDetail = async (id: string) => {
  const res = await axiosInstance.get<TResponse<TProductDetail>>(
    `${baseUrl}/ProductDetail/${id}`
  );

  return res.data;
};
