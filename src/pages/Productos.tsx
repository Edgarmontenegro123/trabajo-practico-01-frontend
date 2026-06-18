import { productos } from '../data/productos'
import {ProductCard} from '../components/ProductCard'
import './Productos.css'

const Productos = () => {
    return (
        <main className='productos'>
            <h1>Nuestra Selección Matera</h1>
            <div className='grid-productos'>
                {productos.map((prod) => (
                    <ProductCard key={prod.id} product={prod} />
                ))}
            </div>
        </main>
    )
}

export default Productos