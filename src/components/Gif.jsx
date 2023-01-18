import { Link } from 'wouter';

export default function Gif({ id, title, url }) {
  return (
    <div className="listOfGifs-item">
      <img src={url} alt={title} />
      <p style={{ marginTop: '1px' }}>
        <Link to={`/gif/${id}`}>{title}</Link>
      </p>
    </div>
  );
}
