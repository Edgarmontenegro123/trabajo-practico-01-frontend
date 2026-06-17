import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className={`navbar ${isOpen ? 'menu-open' : ''}`}>

            <div className='nav-header'>
                <div className='logo'>Mundo Mate</div>
                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to='/' onClick={toggleMenu}>Inicio</Link></li>
                <li><Link to='/productos' onClick={toggleMenu}>Nuestros Mates</Link></li>
                <li><Link to='/tutoriales' onClick={toggleMenu}>Cebado y Técnica</Link></li>
                <li><Link to='/nosotros' onClick={toggleMenu}>Nuestra Historia</Link></li>
                <li><Link to='/trabaja' onClick={toggleMenu}>Sumate al Equipo</Link></li>
                <li><Link to='/franquicias' onClick={toggleMenu}>Franquicias</Link></li>
                <li><Link to='/contacto' onClick={toggleMenu}>Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar