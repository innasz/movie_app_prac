import tmdbApi from './api';
import { useQuery } from '@tanstack/react-query';

const fetchTvs = async () => {
  const response = await tmdbApi.get('/tv/airing_today');
  return response.data.results;
};

const useFetchTvs = () =>
  useQuery(['tvs'], () => fetchTvs(), {
    keepPreviousData: true,
  });

export { useFetchTvs };
