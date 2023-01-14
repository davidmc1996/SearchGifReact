import { API_KEY, API_URL } from './settings';

export default async function getTrendingTerms(keyword = 'morty') {
  const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`;

  const res = await fetch(apiUrl);
  const json = await res.json();
  return json.data;
}
