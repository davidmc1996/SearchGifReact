import { API_KEY, API_URL } from './settings';

export default async function getSingleGif({ searchID }) {
  const apiUrl = `${API_URL}/gifs/${searchID}?api_key=${API_KEY}`;

  const res = await fetch(apiUrl);
  const json = await res.json();
  const { data } = json;

  const { images, title, id } = data;
  const { url } = images.downsized_medium;

  return { id, title, url };
}
