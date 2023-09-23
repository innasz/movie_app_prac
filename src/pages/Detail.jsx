import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { useFetchMovieAndTv } from '../services/fetchMovieAndTv';

const Detail = () => {
  const { movieId, tvId } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const id = pathname.includes('movie') ? movieId : tvId;
  // const [isLoading, setIsLoading] = useState(false);
  const provider = pathname.includes('movie') ? 'movie' : 'tv';

  const { data: item, isLoading, error } = useFetchMovieAndTv(provider, id);
  // const [item, setItem] = useState({});

  // const getItem = async () => {
  //   try {
  //     setIsLoading(true);
  //     const options = {
  //       headers: {
  //         Authorization:
  //           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWZhYTk0MmRkMGQzZTA0NTg4YjBkZGNjNzRjY2UyMSIsInN1YiI6IjYzYmMyZjA4Zjg1OTU4MDA4NzQ4MmMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eXyrC0pHaFplxQNuN9BQ4YrFzPNpE4l2aolx80lC3dE',
  //       },
  //     };
  //     const result = await axios.get(
  //       `https://api.themoviedb.org/3/${provider}/${id}`,
  //       options
  //     );
  //     console.log('response', result.data);
  //     setItem(result.data);
  //     setIsLoading(false);
  //   } catch (e) {
  //     setIsLoading(false);
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   getItem();
  // }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {' '}
      <button
        onClick={() => navigate(-1)}
        class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Back
      </button>
      <div className='flex flex-row justify-center itmes-center'>
        <div className='grid pt-10'>
          <div class='max-w-sm rounded overflow-hidden shadow-lg'>
            <img
              class='w-full'
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title ? item.title : item.name}
            />

            <div class='px-6 py-4'>
              <div class='font-bold text-xl mb-2'>
                {item.title ? item.title : item.name}
              </div>
              <div class='pt-2 pb-2'>
                <svg
                  width='24'
                  height='24'
                  fill='none'
                  aria-hidden='true'
                  class='mr-1 stroke-current dark:stroke-indigo-500'
                >
                  <path
                    d='m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>{' '}
                <p>{item.vote_average}</p>
              </div>
              <p class='text-gray-700 text-base'>{item.overview} </p>

              <p className='pt-2'>
                release date :{' '}
                {item.last_air_date ? item.last_air_date : item.release_date}
              </p>
            </div>

            <div class='px-6 pt-4 pb-2'>
              {item.genres?.map((i, index) => (
                <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  {i.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
