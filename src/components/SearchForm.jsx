import React, { useState } from 'react';

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState('');

  const handledSubmit = (e) => {
    e.preventDefault();
    onSubmit(keyword);
  };

  const handledChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <form onSubmit={handledSubmit}>
      <input
        type="search"
        value={keyword}
        onChange={handledChange}
        placeholder="Search a gif here..."
      />
    </form>
  );
}

export default React.memo(SearchForm);
