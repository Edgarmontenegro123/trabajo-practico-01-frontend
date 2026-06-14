import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='logo'>Mi Tienda</div>
            <ul>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/tienda'>Nuestro Café</Link></li>
                <li><Link to='/tutoriales'>Tutoriales</Link></li>
                <li><Link to='/menu-tienda'>Nuestro Menú</Link></li>
                <li><Link to='/trabaja-en-tdc'>Trabajá con Nosotros</Link></li>
                <li><Link to='/franquicias'>Franquicias</Link></li>
                <li><Link to='/contacto'>Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar