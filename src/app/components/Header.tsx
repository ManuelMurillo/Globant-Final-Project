import s from './styles.module.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="container">
      <div className="row">
        <div className="col-sm-4">
          <Link to='/recipes'>Recipes</Link>
        </div>
        <div className="col-sm-4">
          <Link to='/saved'>Saved</Link>
        </div>
        <div className="col-sm-4">
          <Link to='/docs'>Docs</Link>
        </div>
      </div>
    </nav>
  );
}

export function Header() {
  return (
    <header>
      <nav className={`container-fluid ${s.header}`}>
        <div className="row">
          <div className="col">
            <h1>Nutritional Calculator</h1>
            <p>Final Project</p><br />
          </div>
        </div>
        <div className="row">
          <div className="col">
           <Menu />
          </div>
        </div>
      </nav>
    </header>
  );
}
