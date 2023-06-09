import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import CartItem from "../CartItem/CartItem"
import './Cart.css'

const Cart = () => {
    const {carrito, vaciarCarrito} = useContext(CarritoContext);

     
    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    
    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

    

    if(totalCantidad === 0) {
        return (
            <>
                <h2>No hay productos en el carrito </h2>
                <Link to='/'> Productos </Link>

            </>
        )
    }

    return (
        <div className="divContenedorCart">
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <div className="divContenedorDos">
            <h3>Total: ${total} </h3>
            <button className="btn outline" id='btnCart' onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
            <Link to='/checkout' id='btnCart'> Finalizar Compra </Link>
            <br />
            <Link to='/' id='btnCart'> Seguir Comprando </Link>
            </div>
        </div>
    )
 
}

export default Cart