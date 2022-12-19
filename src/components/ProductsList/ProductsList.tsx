import { useEffect, useState } from 'react';

interface ProductResponse {
  records: Product[];
}

interface Product {
  id: string;
  fields: {
    name: string;
    description: string;
  }
}

type Status = {
  products: Product[];
  isLoading: true,
  isError: false
} | {
  products: Product[];
  isLoading: false;
  isError: false;
} | {
  products: Product[];
  isLoading: false;
  isError: true;
}

const ProductsList = () => {
  const [status, setStatus] = useState<Status>({
    products: [],
    isLoading: true,
    isError: false,
  });

  // const [products, setProducts] = useState<Product[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch('https://api.airtable.com/v0/appDleOUdMfbmEAxQ/products', {
      headers: {
        Authorization: 'Bearer keyusGQPKzOs4Y2lp'
      }
    })
    .then(response => response.json())
    .then(data => {
      // setProducts(data.records)
      setStatus({
        products: data.records,
        isLoading: false,
        isError: false,
      });
      console.log('data.records: ', data.records);
    })
    .catch(error => {
      console.error(error);
      setStatus({
        products: [],
        isLoading: false,
        isError: true,
      });
    })
    .finally(() => {
      setStatus((status) => ({
        ...status,
        isLoading: false,
      }));
    })
  }, []);

  return (
    <div>
      {status.isLoading && <p>Loading...</p>}
      {status.isError && <p>Error!</p>}
      {status.products && status.products.map((elem) => (
        <div key={elem.id}> {/* useId */}
          <h2>{elem.fields.name}</h2>
        </div>
      ))}
    </div>
  );
}

export { ProductsList };
