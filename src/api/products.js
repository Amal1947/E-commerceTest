import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { BASE_URL } from "../config/baseUrl";

export const useProducts = () => {
  const { data, error, isLoading, mutate } = useSWR(BASE_URL+"api/products", fetcher);

  return {
    products: data?.products || [],
    data:data,
    categories: data?.categories || [],
    isLoading,
    isError: error,
    mutate, 
  };
};
