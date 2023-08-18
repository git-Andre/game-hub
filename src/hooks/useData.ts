import { useEffect, useState } from "react";
import apiClient from "../services/api-client.ts";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint:string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal })
             .then(res => {
               // console.log(res.data.results);
               setData(res.data.results)
               setIsLoading(false);
             })
             .catch(err => {
               if (err instanceof CanceledError) return;
               setIsLoading(false);
               setError(err.message)
             });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };

}

export default useData;