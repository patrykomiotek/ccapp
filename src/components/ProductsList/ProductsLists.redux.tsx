import { Product } from '@apptypes/Product';
import { useGetAllProductsQuery } from '@services/products.redux';

const ProductsList = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {data && data.records.map((elem: Product) => (
        <div key={elem.id}>
          <h2>{elem.fields.name}</h2>
        </div>
      ))}
    </div>
  );
}

export { ProductsList };
