import { useEffect, useRef, useCallback } from 'react';
import ListGifs from '../../components/ListGifs';
import Spinner from '../../components/Spinner';
import useGifs from '../../hooks/useGifs';
import useNearScreen from '../../hooks/useNearScreen';
import debounce from 'just-debounce-it';

export default function SearchResults({ params }) {
  const { keyword } = params;

  const { gifs, loading, setPage } = useGifs(keyword);

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
          <h3>{decodeURI(keyword)}</h3>
          <ListGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
          {/* <button onClick={handledNextPage}>Next Page</button> */}
        </>
      )}
    </>
  );
}
