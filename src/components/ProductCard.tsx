import './ProductCard.css'

interface Product {
    nombre: string
    precio: number
    categoria: string
    imagen: string
    descripcion: string
}

export const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className='product-card'>
            <img src={product.imagen} alt={product.nombre} />
            <div className='info'>
                <h3>{product.nombre}</h3>
                <p className='categoria'>{product.categoria}</p>
                <p className='descripcion'>{product.descripcion}</p>
                <span className='precio'>${product.precio}</span>
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}