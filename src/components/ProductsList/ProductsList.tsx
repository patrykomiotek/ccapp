import { useEffect, useState } from 'react';
import { useApi } from '@hooks/useApi';
import type { Product } from '@apptypes/Product';
import { fetchProducts, fetchProductsWithLogic } from '@services/products';

const ProductsList = () => {
  const [data, setData] = useState<Product[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      // const response = await fetchProducts();
      const response = await fetchProductsWithLogic();

      setData(response?.records);

      //setProducts(response.data)
    } catch (error) {
      console.error('error: ', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error!</p>}
      {data && data.map((elem) => (
        <div key={elem.id}> {/* useId */}
          <h2>{elem.fields.name}</h2>
        </div>
      ))}
    </div>
  );
}

export { ProductsList };
