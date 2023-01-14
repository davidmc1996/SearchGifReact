import { useState, useEffect, useContext } from 'react';
import gifsContext from '../context/GifsContext';
import getGifs from './../services/getGifs';

const INITIAL_PAGE = 0;

export default function useGifs(keyword = null) {
  const { gifs, setGifs } = useContext(gifsContext);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

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
  }, [keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    getGifs(keywordToUse, page).then((gifs) => {
      setGifs((prevGifs) => prevGifs.concat(gifs));
      setLoading(false);
    });
  }, [keywordToUse, page]);

  return {
    gifs,
    loading,
    setPage,
  };
}
