import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <nav className="container">
      <div className="row">
        <div className="col-sm-4">
          <Link to='/recipes'>Recipes</Link>
        </div>
        <div className="col-sm-4">
          <Link to='/nutrition'>Nutrition</Link>
        </div>
        <div className="col-sm-4">
          <Link to='/docs'>Docs</Link>
        </div>
      </div>
    </nav>
  );
}
