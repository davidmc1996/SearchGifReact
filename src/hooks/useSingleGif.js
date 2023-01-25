import { useEffect, useState } from 'react';
import getSingleGif from '../services/getSingleGif';
import useGlobalGifs from './useGlobalGifs';

export default function useSingleGif({ id }) {
  const gifs = useGlobalGifs();

  const gifFromCache = gifs.find((gif) => gif.id === id);

  const [gif, setGif] = useState(gifFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);
      getSingleGif({ searchID: id })
        .then((gif) => {
          setGif(gif);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [gif, id]);

  return { gif, isLoading, isError };
}
