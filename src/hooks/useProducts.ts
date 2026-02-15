import { useQuery } from '@tanstack/react-query';
import { fetchAllProducts, fetchProductById, Product } from '@/lib/supabase';

export type { Product };

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchAllProducts,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}

// Fetch product by ID instead of slug — always works
export function useProduct(id: string | undefined) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => id ? fetchProductById(id) : null,
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
}
