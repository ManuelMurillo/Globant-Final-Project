
import { Menu } from './Menu';
import s from './styles.module.css';

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
