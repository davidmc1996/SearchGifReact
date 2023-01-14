import Gif from '../../components/Gif';
// import useGifs from '../../hooks/useGifs';
import useGlobalGifs from '../../hooks/useGlobalGifs';

export default function Detail({ params }) {
  // const { gifs } = useGifs();
  const gifs = useGlobalGifs();
  console.log(gifs);

  const gif = gifs.find((gif) => gif.id === params.id);
  console.log(gif);

  return <Gif {...gif} />;
}
