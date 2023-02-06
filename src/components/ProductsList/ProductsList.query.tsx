import { useQuery } from 'react-query';
import { Product } from '@apptypes/Product';
import { fetchProducts } from '@services/products';

const ProductsList = () => {
  const { data: response, error, isLoading, refetch } = useQuery(['product-list'], fetchProducts);
  // const { data: response, error, isLoading, refetch } = useQuery(
  //   ['product-list'],
  //   () => fetchProducts(arg1, arg2, arg3)
  // );

  const products = response?.data;

  return (
    <div>
      <div>
        <button onClick={() => refetch()}>Refetch</button>
      </div>
      <>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error!</p>}
        {products && products.records.map((elem: Product) => (
          <div key={elem.id}>
            <h2>{elem.fields.name}</h2>
          </div>
        ))}
      </>
    </div>
  );
}

export { ProductsList };
