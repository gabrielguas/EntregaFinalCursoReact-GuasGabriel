import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  const handleComprar = () => {
    Swal.fire({
      title: '¡Compra realizada!',
      icon: 'success',
      text: 'Tu compra ha sido realizada con éxito.',
      confirmButtonText: 'Aceptar',
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="text-align: center"> {/* Centramos el contenido */}
        <a className="navbar-brand" href="#">
          Inicio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hardware
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Software
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Desarrollo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Infraestructura
              </a>
            </li>
            <li className="nav-item">
              <CartWidget comprar={handleComprar} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
