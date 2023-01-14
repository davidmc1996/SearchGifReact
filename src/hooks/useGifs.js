import { useState, useEffect, useContext } from 'react';
import gifsContext from '../context/GifsContext';
import getGifs from './../services/getGifs';

export default function useGifs(keyword = null) {
  const { gifs, setGifs } = useContext(gifsContext);
  const [loading, setLoading] = useState(false);

  const keywordToUse =
    keyword || localStorage.getItem('lastKeyword') || 'random';

  useEffect(() => {
    setLoading(true);
    getGifs(keywordToUse).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem('lastKeyword', keywordToUse);
      console.log(keywordToUse);
    });
  }, [keyword, setGifs]);

  return {
    gifs,
    loading,
  };
}
