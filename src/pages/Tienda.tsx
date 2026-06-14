import './Tienda.css'

const Tienda = () => {
    return (
        <main className='home-container'>
            <section className='hero'>
                <h1>El arte de infusionar</h1>
                <p>Descubre nuestra selección artesanal de tes de origen y blends exclusivos.</p>
                <button>Explorar Catálogo</button>
            </section>

            <section className='features'>
                <h2>¿Por qué nuestro té?</h2>
                <p>Seleccionamos cada hoja pensando en la experiencia final en tu taza.</p>
            </section>
        </main>
    )
}

export default Tienda