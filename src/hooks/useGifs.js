import { useState, useEffect, useContext } from 'react';
import gifsContext from '../context/GifsContext';
import getGifs from './../services/getGifs';

const INITIAL_PAGE = 0;

export default function useGifs(keyword = null, rating) {
  const { gifs, setGifs } = useContext(gifsContext);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  const keywordToUse =
    keyword || localStorage.getItem('lastKeyword') || 'random';

  useEffect(() => {
    setLoading(true);
    getGifs(keywordToUse, 5, 10, rating).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem('lastKeyword', keywordToUse);
      console.log(keywordToUse);
    });
  }, [keywordToUse, setGifs, rating]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);
    getGifs(keywordToUse, page, 10, rating).then((gifs) => {
      setGifs((prevGifs) => prevGifs.concat(gifs));
      setLoadingNextPage(false);
    });
  }, [keywordToUse, page, rating]);

  return {
    gifs,
    loading,
    setPage,
    loadingNextPage,
  };
}
