import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MovieList from './pages/MovieList';
import Detail from './pages/Detail';
import TvList from './pages/TvList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieList />,
  },
  {
    path: '/movie/:movieId',
    element: <Detail />,
  },
  {
    path: '/tvs',
    element: <TvList />,
  },
  {
    path: '/tv/:tvId',
    element: <Detail />,
  },
]);

export default router;
