import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import ListGifs from '../../components/ListGifs';
import Spinner from '../../components/Spinner';
import LazyTrending from '../../components/LazyTrending';
import useGifs from '../../hooks/useGifs';

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();

  const handledSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handledChange = (e) => {
    setKeyword(e.target.value);
  };

  const { gifs, loading } = useGifs();

  return (
    <>
      <form onSubmit={handledSubmit}>
        <input
          type="search"
          value={keyword}
          onChange={handledChange}
          placeholder="Search a gif here..."
        />
      </form>
      <h3>
        Ultima busqueda:{' '}
        <em>{decodeURI(localStorage.getItem('lastKeyword'))}</em>
      </h3>
      <div className="listOfGifs">
        {loading ? <Spinner /> : <ListGifs gifs={gifs} />}
      </div>
      <LazyTrending />
    </>
  );
}
