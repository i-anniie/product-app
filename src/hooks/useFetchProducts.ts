import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "@/utils/constants";
import type { ProductApiListResponse } from "@/types/product";

interface UseFetchProductsResult {
  data: ProductApiListResponse | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useFetchProducts(limit: number = 10): UseFetchProductsResult {
  const [data, setData] = useState<ProductApiListResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const url = useMemo(() => `${API_BASE_URL}?limit=${limit}`, [limit]);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get<ProductApiListResponse>(url, {
        headers: { "Content-Type": "application/json" },
      });
      setData(response.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void fetchProducts();
  }, [url]);

  return {
    data,
    isLoading,
    error,
    refetch: async () => {
      await fetchProducts();
    },
  };
}

export default useFetchProducts;
