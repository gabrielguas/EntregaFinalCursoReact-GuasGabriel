import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="nav-link" to={'/'}>Inicio</NavLink>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
