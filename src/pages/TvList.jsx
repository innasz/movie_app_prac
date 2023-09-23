import CardView from '../components/CardView';
import Loading from '../components/Loading';
import { useFetchTvs } from '../services/fetchTvs';
import Container from '../components/Container';

const TvList = () => {
  // const [tvs, setTvs] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const getTvs = async () => {
  //   try {
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         accept: 'application/json',
  //         Authorization:
  //           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWZhYTk0MmRkMGQzZTA0NTg4YjBkZGNjNzRjY2UyMSIsInN1YiI6IjYzYmMyZjA4Zjg1OTU4MDA4NzQ4MmMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eXyrC0pHaFplxQNuN9BQ4YrFzPNpE4l2aolx80lC3dE',
  //       },
  //     };
  //     const response = await axios.get(
  //       'https://api.themoviedb.org/3/tv/airing_today',
  //       options
  //     );
  //     console.log('response', response.data.results);
  //     setTvs(response.data.results);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   getTvs();
  // }, []);
  const { data: tvs, isLoading, error } = useFetchTvs();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      {tvs.map((tv, index) => (
        <CardView key={index} data={tv} url={'tv'} />
      ))}
    </Container>
  );
};

export default TvList;
