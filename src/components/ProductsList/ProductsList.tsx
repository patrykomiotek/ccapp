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

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://api.airtable.com/v0/appDleOUdMfbmEAxQ/products', {
      headers: {
        Authorization: 'Bearer keyusGQPKzOs4Y2lp'
      }
    })
    .then(response => response.json())
    .then(data => {
      setProducts(data.records)
      console.log(data.records);
    })
    .catch(error => console.error(error))
  }, []);

  return (
    <div>
      {products.map((elem) => (
        <div key={elem.id}> {/* useId */}
          <h2>{elem.fields.name}</h2>
        </div>
      ))}
    </div>
  );
}

export { ProductsList };
