const API_KEY = 'QWoMzCbSW341vjUq91U4gDxfAFUcq5EJ';

export default async function getGifs(keyword = 'morty') {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

  const res = await fetch(API_URL);
  const json = await res.json();
  const { data } = json;
  const gifs = data.map((gif) => {
    const { images, title, id } = gif;
    const { url } = images.downsized_medium;

    return { id, title, url };
  });
  return gifs;
}
