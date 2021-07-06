import s from './styles.module.css'
export function Footer() {
  return (
    <footer>
      <nav className={`container ${s.footer}`}>
        <div className="row">
          <div className="col-sm-4 col-md-2">
            <p>Created by:</p>
            <p>Email:</p><br />
            <p>Phone:</p>
            <p>From:</p>
          </div>
          <div className="col-sm-8 col-md-4">
            <p>Jhoan Manuel Murillo Yara</p>
            <a href="mailto:jmmurilloy@correo.udistrital.edu.co">many931212@gmail.com</a> <br />
            <a href="mailto:jmmurilloy@correo.udistrital.edu.co">jmmurilloy@correo.udistrital.edu.co</a><br />
            <a href="tel:573102644682">(+57) 310 264 4682</a>
            <p>Bogota, Colombia</p>
          </div>
          <div className="col-sm-4 col-md-2">
            <p>Powered by:</p>
          </div>
          <div className="col-sm-8 col-md-4">
            <p>HTML</p>
            <p>CSS</p>
            <p>Typescript</p>
            <p>React</p>
            <p>Globant</p>
          </div>
        </div>
      </nav>
    </footer >
  );
}
