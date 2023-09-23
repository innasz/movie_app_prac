import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardView from '../components/CardView';
import Loading from '../components/Loading';
import { useFetchMovies } from '../services/fetchMovies';

const MovieList = () => {
  // const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const getMovies = async () => {
  //   try {
  //     setIsLoading(true);
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         accept: 'application/json',
  //         Authorization:
  //           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWZhYTk0MmRkMGQzZTA0NTg4YjBkZGNjNzRjY2UyMSIsInN1YiI6IjYzYmMyZjA4Zjg1OTU4MDA4NzQ4MmMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eXyrC0pHaFplxQNuN9BQ4YrFzPNpE4l2aolx80lC3dE',
  //       },
  //     };
  //     const response = await axios.get(
  //       'https://api.themoviedb.org/3/movie/now_playing',
  //       options
  //     );
  //     console.log('response', response.data.results);
  //     setMovies(response.data.results);
  //     setIsLoading(false);
  //   } catch (e) {
  //     setIsLoading(false);
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   getMovies();
  // }, []);

  const { data: movies, isLoading, error } = useFetchMovies();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className='flex flex-row justify-center itmes-center'>
      <div className='grid grid-cols-4 p-5 gap-4 auto-cols-max'>
        {movies?.map((movie, index) => (
          <CardView data={movie} url={'movie'} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
