import { useLocation } from 'wouter';
import ListGifs from '../../components/ListGifs';
import Spinner from '../../components/Spinner';
import LazyTrending from '../../components/LazyTrending';
import useGifs from '../../hooks/useGifs';
import SearchForm from '../../components/SearchForm';
import { useCallback } from 'react';
import Helmet from 'react-helmet';

export default function Home() {
  const [path, pushLocation] = useLocation();

  const handledSubmit = useCallback(
    (keyword) => {
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  const { gifs, loading } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <SearchForm onSubmit={handledSubmit} />
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
