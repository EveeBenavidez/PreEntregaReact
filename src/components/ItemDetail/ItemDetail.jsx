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

    const item = {id, nombre ,precio};
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
        <h2> Nombre: {nombre} </h2>
        <h2> Precio: {precio} </h2>
        <h2> ID: {id} </h2>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta error aut illum delectus provident quas odio corporis eos quidem laudantium optio voluptates fugiat quaerat id, natus, magni quo quisquam nobis.</p>
        <img src={img} alt={nombre} />
       {
        agregarCantidad > 0 ? ( <Link to={"/cart"}> Terminar Compra </Link>) : (<ItemCounter inicial={1} stock={stock}
        funcionAgregar={manejadorCantidad}/>)
       }
        
        
    </div>
  )
}

export default ItemDetail
