import ListGifs from '../../components/ListGifs';
import Spinner from '../../components/Spinner';
import LazyTrending from '../../components/LazyTrending';
import useGifs from '../../hooks/useGifs';
import SearchForm from '../../components/SearchForm';
import Helmet from 'react-helmet';

export default function Home() {
  const { gifs, loading } = useGifs('', 'g');

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <header>
        <SearchForm />
      </header>
      <h3>
        Ultima busqueda:{' '}
        <em>{decodeURI(localStorage.getItem('lastKeyword'))}</em>
      </h3>
      <div className="gifsContainer">
        {loading ? <Spinner /> : <ListGifs gifs={gifs} />}
      </div>
      <LazyTrending />
    </>
  );
}
