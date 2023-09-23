import React from 'react';
import { Link } from 'react-router-dom';

const CardView = ({ data, url }) => {
  return (
    <div class='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <img
        class='rounded-t-lg'
        src={
          data.poster_path
            ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
            : 'https://www.namepros.com/attachments/empty-png.89209/'
        }
        alt={data.title ? data.title : data.name}
      />

      <div class='p-5'>
        <a href='#'>
          <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {data.title ? data.title : data.name}
          </h5>
        </a>
        <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {data.overview.slice(0, 100)}
        </p>
        <Link to={`/${url}/${data.id}`}>
          <button
            type='button'
            class='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardView;
