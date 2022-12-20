import { useApi } from '@hooks/useApi';
import type { Product } from '@apptypes/Product';

const ProductsList = () => {
  // const status = useApi<Product[]>('/products');
  const { data, isLoading, isError } = useApi<Product[]>('/products');
  // status.products

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
