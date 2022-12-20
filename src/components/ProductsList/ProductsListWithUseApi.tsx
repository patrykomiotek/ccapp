import { useApi } from '@hooks/useApi';
import type { Product } from '@apptypes/Product';

const ProductsListWithUseApi = () => {
  const { data, isLoading, isError } = useApi<Product[]>('/products');

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error!</p>}
      {data && <h1>Products</h1>}
      {data && data.map((elem) => (
        <div key={elem.id}> {/* useId */}
          <h2>{elem.fields.name}</h2>
        </div>
      ))}
    </div>
  );
}

export { ProductsListWithUseApi };
