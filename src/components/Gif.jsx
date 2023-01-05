export default function Gif({ id, title, url }) {
  return (
    <div>
      <img src={url} alt={title} />
      <p style={{ marginTop: '1px' }}>{title}</p>
    </div>
  );
}
