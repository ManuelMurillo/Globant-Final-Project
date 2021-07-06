
import { Menu } from './Menu';
import styles from './styles.module.css';

export function Header() {
  return (
    <header>
      <nav className="container">
        <div className="row">
          <div className="col">
            <h1>Nutritional Calculator</h1>
            <span>Final Project</span>
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
