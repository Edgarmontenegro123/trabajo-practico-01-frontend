import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className='navbar'>
            <div className='logo'>Mi Tienda</div>

            {/* Botón hamburguesa (visible solo en móvil) */}
            <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to='/' onClick={toggleMenu}>Inicio</Link></li>
                <li><Link to='/tienda' onClick={toggleMenu}>Nuestro Té</Link></li>
                <li><Link to='/tutoriales' onClick={toggleMenu}>Tutoriales</Link></li>
                <li><Link to='/menu-tienda' onClick={toggleMenu}>Nuestro Menú</Link></li>
                <li><Link to='/trabaja-en-tdc' onClick={toggleMenu}>Trabajá con Nosotros</Link></li>
                <li><Link to='/franquicias' onClick={toggleMenu}>Franquicias</Link></li>
                <li><Link to='/contacto' onClick={toggleMenu}>Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar