import React, { useState } from 'react';
import { useLocation } from 'wouter';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

function SearchForm({ initialKeyword = '', initialRating = 'g'}) {
  const [keyword, setKeyword] = useState(decodeURI(initialKeyword));
  const [rating, setRating] = useState(initialRating);
  const [path, pushLocation] = useLocation();

  const handledSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handledChange = (e) => {
    setKeyword(e.target.value);
  };

  const handledChangeRating = (e) => {
    setRating(e.target.value);
  };

  return (
    <form onSubmit={handledSubmit}>
      <input
        type="search"
        value={keyword}
        onChange={handledChange}
        placeholder="Search a gif here..."
      />
      <select value={rating} onChange={handledChangeRating}>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
    </form>
  );
}

export default React.memo(SearchForm);
