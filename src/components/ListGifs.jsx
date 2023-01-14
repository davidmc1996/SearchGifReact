import { useState, useEffect } from 'react';
import useGifs from '../hooks/useGifs';
import Gif from './Gif';
import Spinner from './Spinner';

export default function ListGifs({ keyword }) {
  const { gifs, loading } = useGifs(keyword);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </>
  );
}
