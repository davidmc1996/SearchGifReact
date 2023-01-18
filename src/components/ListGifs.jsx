import Gif from './Gif';

export default function ListGifs({ gifs }) {
  return (
    <div className="listOfGifs">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </div>
  );
}
