'use client'

import {useState, useEffect} from 'react';
import axios from 'axios';
import {ApiResponse} from '../types/apiResponse';

export const useAPI = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [history, setHistory] = useState<ApiResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<ApiResponse>('https://randomuser.me/api/');
      setData(response.data);
      setHistory((prevHistory) => [...prevHistory, response.data]);
    } catch(err) { 
      setError(err instanceof Error ? err.message : 'An error ocurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, history, loading, error };
};
