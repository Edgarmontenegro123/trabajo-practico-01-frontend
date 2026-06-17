import './Franquicias.css'

const Franquicias = () => {
    return (
        <main className='franquicias'>
            <h1>Franquicias Mundo Mate</h1>
            <p>Llevá la experiencia de Mundo Mate a tu ciudad. Ofrecemos un modelo de negocio rentable y con el respaldo de una marca líder en la cultura matera.</p>

            <section className='franquicia-info'>
                <h2>¿Qué ofrecemos?</h2>
                <ul>
                    <li>Capacitación técnica integral.</li>
                    <li>Stock asegurado y logística eficiente.</li>
                    <li>Manual de marca y asesoramiento constante.</li>
                </ul>
            </section>

            <button className='btn-franquicia'>Descargar Dossier</button>
        </main>
    )
}

export default Franquicias