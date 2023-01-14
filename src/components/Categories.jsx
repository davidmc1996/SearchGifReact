import { Link } from 'wouter';

export default function Categories({ name, options }) {
  return (
    <>
      <h3>{name}</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <Link to={`search/${option}`}>{option}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
