import {Link} from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import './Home.css'

const Home = () => {

    return (
        <main className='home'>
            <HeroCarousel />
            <section className='contenido-extra'>
                <h1>El ritual de cada día</h1>
                <p>Descubrí mates artesanales...</p>
                <Link
                    to='/productos'
                    className='cta-button'
                >Explorar Nuestros Mates</Link>
            </section>
        </main>
    )
}

export default Home