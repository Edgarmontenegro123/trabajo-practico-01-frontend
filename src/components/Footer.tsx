import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-grid'>
                <div className='footer-col'>
                    <h3>Mundo Mate</h3>
                    <p>El ritual del mate, directo a tu mano.</p>
                </div>

                <div className='footer-col'>
                    <h4>CONTENIDOS</h4>
                    <Link to='/'>Inicio</Link>
                    <Link to='/productos'>Nuestros Mates</Link>
                </div>

                <div className='footer-col'>
                    <h4>NECESITÁS AYUDA</h4>
                    <Link to='/tutoriales'>Tutoriales</Link>
                    <Link to='/trabaja'>Sumate al Equipo</Link>
                    <Link to='/franquicias'>Franquicias</Link>
                    <Link to='/contacto'>Contacto</Link>
                </div>

                <div className='footer-col'>
                    <h4>SUSCRIBITE</h4>
                    <div className='newsletter'>
                        <input type='email' placeholder='Tu email' />
                        <button>SUSCRIBIRME</button>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>&copy; 2026 Mundo Mate. Todos los derechos reservados.</div>
        </footer>
    )
}

export default Footer