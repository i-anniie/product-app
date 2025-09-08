import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "@/utils/constants";
import type { Product } from "@/types/product";

interface UseFetchProductDetailResult {
  data: Product | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useFetchProductDetail(
  id?: string | number
): UseFetchProductDetailResult {
  const [data, setData] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const url = useMemo(() => (id ? `${API_BASE_URL}/${id}` : null), [id]);

  const fetchDetail = async () => {
    if (!url) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get<Product>(url, {
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
    void fetchDetail();
  }, [url]);

  return {
    data,
    isLoading,
    error,
    refetch: async () => {
      await fetchDetail();
    },
  };
}

export default useFetchProductDetail;
