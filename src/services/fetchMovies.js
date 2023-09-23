import tmdbApi from './api';
import { useQuery } from '@tanstack/react-query';

const fetchMovies = async () => {
  const response = await tmdbApi.get('/movie/now_playing');
  return response.data.results;
};

const useFetchMovies = () =>
  useQuery(['movies'], () => fetchMovies(), {
    keepPreviousData: true,
  });

export { useFetchMovies };
