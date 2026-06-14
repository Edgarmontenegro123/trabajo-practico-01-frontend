import { productos } from '../data/productos'
import './Tienda.css'

const Tienda = () => {
    return (
        <main className="tienda">
            <h1>Nuestra Selección</h1>
            <div className="grid-productos">
                {productos.map((prod) => (
                    <div key={prod.id} className="card-producto">
                        <h3>{prod.nombre}</h3>
                        <p>Categoría: {prod.categoria}</p>
                        <p><strong>${prod.precio}</strong></p>
                        <button>Agregar al carrito</button>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Tienda