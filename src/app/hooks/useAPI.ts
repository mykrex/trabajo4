'use client'

import {useState, useEffect} from 'react';
import {ApiResponse} from '../types/http/apiResponse';
import {Person} from '../types/person';
import axios from 'axios';

export const useAPI = () => {
  const [currentPerson, setPerson] = useState<Person | null>(null);
  const [history, setHistory] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<ApiResponse>('https://randomuser.me/api/');
      const data = response.data.results[0]
      const person: Person = {
          name: data.name.first + " " + data.name.last,
          email: data.email,
          birthday: data.dob.date,
          phone: data.phone,
          password: data.login.password
      }
      
      setPerson(person);
      setHistory((prevHistory) => [...prevHistory, person]);

    } catch(err) { 
        setError(err instanceof Error ? err.message : 'An error ocurred');

    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { currentPerson, history, loading, error, fetchData };
};
