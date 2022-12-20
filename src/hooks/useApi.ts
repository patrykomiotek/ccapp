import { useState, useEffect } from 'react';

type Status<T> = {
  data: T;
  isLoading: true,
  isError: false
} | {
  data: T;
  isLoading: false;
  isError: false;
} | {
  data: T;
  isLoading: false;
  isError: true;
}

const useApi = <T>(endpoint: string) => {
  const [status, setStatus] = useState<Status<T>>({
    data: undefined as T,
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/appDleOUdMfbmEAxQ${endpoint}`, {
      headers: {
        Authorization: 'Bearer keyusGQPKzOs4Y2lp'
      }
    })
    .then(response => response.json())
    .then(data => {
      // setProducts(data.records)
      setStatus({
        data: data.records,
        isLoading: false,
        isError: false,
      });
      console.log('data.records: ', data.records);
    })
    .catch(error => {
      console.error(error);
      setStatus({
        data: undefined as T,
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

  return status; // const { products, isLoading, isError } = useApi('/products');
}

export { useApi }