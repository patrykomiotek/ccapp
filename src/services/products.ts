import { api } from '@services/config';
import type { Product } from '@apptypes/Product';

interface ProductsResponse {
  records: Product[];
}

export const fetchProduct = (id: Product['id']) => {
  return api.get<Product>(`/products/${id}`);
}

export const deleteProduct = (id: Product['id']) => {
  return api.delete(`/products/${id}`);
}

export const fetchProducts = () => {
  return api.get<ProductsResponse>('/products');
}

export const fetchProductsWithLogic = async () => {
  // try {
    const response = await api.get<ProductsResponse>('/products');

    if (response.status === 409) {
      throw new Error('Error 409');
    }

    // throw new Error('Kaczka!');

    return response.data;

  // } catch (error) {
  //   console.log('Szach mat!');
  // }
}

// component
// try {
//   await fetchProductsWithLogic()
// } catch (err) {

// }

