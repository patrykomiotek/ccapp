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
    fetch(`${process.env.REACT_APP_API_BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
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