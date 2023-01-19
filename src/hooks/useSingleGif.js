import { useEffect, useState } from 'react';
import getSingleGif from '../services/getSingleGif';
import useGlobalGifs from './useGlobalGifs';

export default function useSingleGif({ id }) {
  const gifs = useGlobalGifs();

  const gifFromCache = gifs.find((gif) => gif.id === id);

  const [gif, setGif] = useState(gifFromCache);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!gif) {
      getSingleGif({ searchID: id }).then(setGif);
    }
  }, [gif, id]);

  return { gif };
}
