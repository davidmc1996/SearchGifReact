import React from 'react';
import { Link } from 'wouter';

function Gif({ id, title, url }) {
  return (
    <div className="listOfGifs-item">
      <img src={url} alt={title} />
      <p style={{ marginTop: '1px' }}>
        <Link to={`/gif/${id}`}>{title}</Link>
      </p>
    </div>
  );
}

export default React.memo(Gif);
