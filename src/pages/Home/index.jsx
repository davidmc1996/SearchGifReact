import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import ListGifs from '../../components/ListGifs';
import Spinner from '../../components/Spinner';
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
      <h2>Los Gifs mas populares</h2>
      <Link to="/search/panda">Gifs de Pandas</Link> <br />
      <Link to="/search/peru">Gifs de Peru</Link> <br />
      <Link to="/search/ecuador">Gifs de Ecuador</Link> <br />
      <Link to="/search/barbara%20palvin">Gifs de Barbara Palvin</Link> <br />
      <h3>
        Ultima busqueda:{' '}
        <em>{decodeURI(localStorage.getItem('lastKeyword'))}</em>
      </h3>
      {loading ? <Spinner /> : <ListGifs gifs={gifs} />}
    </>
  );
}
