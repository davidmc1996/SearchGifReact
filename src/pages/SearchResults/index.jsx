import ListGifs from '../../components/ListGifs';
import Spinner from '../../components/Spinner';
import useGifs from '../../hooks/useGifs';

export default function SearchResults({ params }) {
  const { keyword } = params;

  const { gifs, loading } = useGifs(keyword);

  const handledNextPage = () => {
    
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3>{decodeURI(keyword)}</h3>
          <button onClick={handledNextPage} >Next Page</button>
          <ListGifs gifs={gifs} />
        </>
      )}
    </>
  );
}
