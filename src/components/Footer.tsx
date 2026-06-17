import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-section'>
                    <h3>Mundo Mate</h3>
                    <p>El ritual del mate, directo a tu mano.</p>
                </div>
                <div className='footer-section'>
                    <h4>Seguinos</h4>
                    <div className='social-icons'>
                        <a href='#'>
                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'
                                 strokeLinecap='round' strokeLinejoin='round'><rect x='2' y='2' width='20' height='20' rx='5' ry='5'
                            >
                            </rect>
                                <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'>
                                </path>
                                <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'>
                                </line>
                            </svg>
                        </a>
                        <a href='#'>
                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' 
                                 strokeLinecap='round' strokeLinejoin='round'><path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'
                            >
                            </path>
                            </svg>
                        </a>
                        <a href='#'>
                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' 
                                 strokeLinecap='round' strokeLinejoin='round'
                            >
                                <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'>
                                </path>
                                <polyline points='22,6 12,13 2,6'>
                                </polyline>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>&copy; {new Date().getFullYear()} Mundo Mate. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer