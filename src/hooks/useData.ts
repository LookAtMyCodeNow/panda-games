import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
    count: number;
    results : T[];
}

// Dodajemy requestConfig o typie AxiosRequestConfig. Znak zapytania mowi ze jest to opcjonalne i nie zawsze musi tam byc.
const useData = <T>(endpoint : string, requestConfig?: AxiosRequestConfig, deps?: any[] ) => { 
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
    //   Dodajemy ten config uzywajac spread operator ktory ustawilismy w useGames
        .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
        .then((res) => {setData(res.data.results); setLoading(false)})
        .catch((err) => 
            {if (err instanceof CanceledError) return;
            {setError(err.message); setLoading(false)}});
        
            // Jest blad kompilacji ze deps moze byc null. Wiec robimy jesli deps jest truthy to spread a jak nie to pusty array. Error znika.
        return () => controller.abort();        
    }, deps ? [...deps] : []);

    return {data, error, isLoading} ; };

export default useData;