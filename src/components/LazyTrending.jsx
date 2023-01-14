import React, { Suspense } from 'react';
import useNearScreen from '../hooks/useNearScreen';
import Spinner from './Spinner';

const TrendingSearches = React.lazy(() => import('./TrendingSearches'));

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '10px' });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen && <TrendingSearches />}
      </Suspense>
    </div>
  );
}
