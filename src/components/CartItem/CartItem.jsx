import './CartItem.css'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'


const CartItem = ({item, cantidad}) => {

    const {eliminarProducto} = useContext (CarritoContext)
    return (
      <div className='divCard'>
          <h3> {item.nombre} </h3>
          <img className='imgCard' src={item.img} alt="" />
          <p>Cantidad: {cantidad} </p>
          <p>Precio: $ {item.precio} </p>
          <button className='btn fill' id='btnCart' onClick={()=> eliminarProducto(item.id)}> Eliminar </button>

      </div>
    )
  }
  
  export default CartItem