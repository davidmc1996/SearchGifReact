import { useState, useEffect } from 'react';
import Gif from './Gif';
import getGifs from './../services/getGifs';
import Spinner from './Spinner';

export default function ListGifs({ params }) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const { keyword } = params;

  useEffect(() => {
    setLoading(true);
    getGifs(keyword).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </>
  );
}
