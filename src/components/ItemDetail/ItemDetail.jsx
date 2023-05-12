import './ItemDetail.css'
import ItemCounter from '../ItemCounter/ItemCounter'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'


// importo carritocontext
import { CarritoContext } from '../../context/CarritoContext'




const ItemDetail = ({id, nombre, precio, img, stock}) => {

  const [agregarCantidad, SetAgregarCantidad] = useState (0);

  const {agregarProducto} = useContext(CarritoContext);
  


  const manejadorCantidad = (cantidad) => {
    SetAgregarCantidad(cantidad)
    
    //creo objeto con item y cantidad

    const item = {id, nombre ,precio, img};
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h3> "{nombre}" </h3>
      <img className='imgProducto' src={img} alt={nombre} />
      <p> $ {precio} </p>
      <p> ID: {id} </p>
      <br />
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis aspernatur ex sit dolorum. A similique itaque vitae optio sed, tenetur culpa nobis sequi quidem aliquid dolore laboriosam, perspiciatis aut!</p>
      <div className='divDetail'>
      {
        agregarCantidad > 0 ? ( <Link to={"/cart"} id='btnCart'> Terminar Compra </Link> ) : (<ItemCounter inicial={1} stock={stock}
        funcionAgregar={manejadorCantidad}/>)  
      }
      <Link to='/' id='btnCart'> Seguir Comprando </Link>
      </div>
        
    </div>
  )
}

export default ItemDetail
