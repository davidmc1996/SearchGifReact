import ListGifs from '../../components/ListGifs';

export default function SearchResults({ params }) {
  const { keyword } = params;
  return <ListGifs keyword={keyword} />;
}
