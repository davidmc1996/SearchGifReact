import { useEffect, useState } from 'react';

import getTrendingTerms from '../services/getTrendingTerms';
import Categories from './Categories';

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then((json) => {
      setTrends(json);
    });
  }, []);

  return <Categories name="Tendencias" options={trends} />;
}
