import { api } from '@services/config';
import type { Product } from '@apptypes/Product';

interface ProductsResponse {
  records: Product[];
}

export const fetchProducts = () => {
  return api.get<ProductsResponse>('/products');
}

export const fetchProductsWithLogic = async () => {
  try {
    const response = await api.get<ProductsResponse>('/products');

    if (response.status === 409) {
      throw new Error('Error 409');
    }

    return response.data;

  } catch (error) {

  }
}

// component
// try {
//   await fetchProductsWithLogic()
// } catch (err) {

// }

