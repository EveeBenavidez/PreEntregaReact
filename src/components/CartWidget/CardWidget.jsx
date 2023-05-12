import './CardWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
  const { carrito } = useContext(CarritoContext);

  const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
  const imgCarrito = "https://images.vexels.com/media/users/3/141186/isolated/preview/431ad815c9a8402ebdf354c82923c2a5-carrito-de-compras-6.png";
  return (
    <Link to='/cart'>
      <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
      {
        totalCantidad
      }


    </Link>
  )
}

export default CartWidget
