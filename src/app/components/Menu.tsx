import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <ul>
      <li>
        <Link to='/recipes'>Recipes</Link>
      </li>
      <li>
        <Link to='/nutrition'>Nutrition</Link>
      </li>
      <li>
        <Link to='/docs'>Docs</Link>
      </li>
    </ul>
  );
}
