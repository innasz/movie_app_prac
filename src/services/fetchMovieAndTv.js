import { useQuery } from '@tanstack/react-query';
import tmdbApi from './api';

const fetchMovieAndTv = async (provider, id) => {
  const result = await tmdbApi.get(`/${provider}/${id}`);
  return result.data;
};

const useFetchMovieAndTv = (provider, id) =>
  useQuery([provider, id], () => fetchMovieAndTv(provider, id));

export { useFetchMovieAndTv };
