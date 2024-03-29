import { API_KEY, API_URL } from './settings';

export default async function getGifs(
  keyword = 'morty',
  page = 0,
  limit = 10,
  rating
) {
  const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=${rating}&lang=en`;

  console.log(rating)

  const res = await fetch(apiUrl);
  const json = await res.json();
  const { data } = json;
  const gifs = data.map((gif) => {
    const { images, title, id } = gif;
    const { url } = images.downsized_medium;

    return { id, title, url };
  });
  return gifs;
}
