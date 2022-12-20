import { useEffect, useState } from 'react';

import { useApi } from '@hooks/useApi';

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
