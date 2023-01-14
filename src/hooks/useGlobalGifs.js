import { useContext } from 'react';
import gifsContext from '../context/GifsContext';

export default function useGlobalGifs() {
  const { gifs } = useContext(gifsContext);
  return gifs;
}
