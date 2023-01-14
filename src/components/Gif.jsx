import { Link } from 'wouter';

export default function Gif({ id, title, url }) {
  return (
    <div>
      <img src={url} alt={title} />
      <p style={{ marginTop: '1px' }}>
        <Link to={`/gif/${id}`}>{title}</Link>
      </p>
    </div>
  );
}
