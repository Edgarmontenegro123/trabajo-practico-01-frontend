import { productos } from '../data/productos'
import './Productos.css'

const Productos = () => {
    return (
        <main className='productos'>
            <h1>Nuestra Selección Matera</h1>
            <div className='grid-productos'>
                {productos.map((prod) => (
                    <div key={prod.id} className='card-producto'>
                        <h3>{prod.nombre}</h3>
                        <p>Variedad: {prod.categoria}</p>
                        <p><strong>${prod.precio}</strong></p>
                        <button className='btn-agregar'>Agregar al equipo</button>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Productos