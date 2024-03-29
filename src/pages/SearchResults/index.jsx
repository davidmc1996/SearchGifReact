import { useEffect, useRef, useCallback } from 'react';
import ListGifs from '../../components/ListGifs';
import Spinner from '../../components/Spinner';
import useGifs from '../../hooks/useGifs';
import useNearScreen from '../../hooks/useNearScreen';
import debounce from 'just-debounce-it';
import Helmet from 'react-helmet';
import SearchForm from '../../components/SearchForm';

export default function SearchResults({ params }) {
  const { keyword, rating = 'g' } = params;

  const { gifs, loading, setPage } = useGifs(keyword, rating);

  const externalRef = useRef();

  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debounceHandledNextPage = useCallback(
    debounce(() => {
      setPage((prevPage) => prevPage + 1);
    }, 1000),
    []
  );

  useEffect(() => {
    console.log(isNearScreen);
    if (isNearScreen) debounceHandledNextPage();
  }, [isNearScreen]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>Busqueda: {decodeURI(keyword)} | Giffy</title>
          </Helmet>
          <header>
            <SearchForm initialKeyword={keyword} initialRating={rating} />
          </header>
          <h3>{decodeURI(keyword)}</h3>
          <ListGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
          {/* <button onClick={handledNextPage}>Next Page</button> */}
        </>
      )}
    </>
  );
}
