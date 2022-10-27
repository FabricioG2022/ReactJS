import { NavLink } from 'react-router-dom';
import imagen from './imagen';

const Navbar = () => {
    return(
        <div className="navBar">
            <NavLink className="nav-link" to='/'>Inicio</NavLink>
            <NavLink className="nav-link" to='/category/:id'>Productos</NavLink>
            <button >Quienes somos</button>
            <button >Contacto</button>
            <img src={imagen.logo} alt="" />
        </div>
    );
}
export default Navbar;