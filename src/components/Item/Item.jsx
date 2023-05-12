import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
import ItemCounter from '../ItemCounter/ItemCounter'
import { useState } from 'react'
import { useContext } from 'react'

// importo carritocontext
import { CarritoContext } from '../../context/CarritoContext'



const Item = ({id, nombre, precio, img, stock}) => {
  
  const [agregarCantidad, SetAgregarCantidad] = useState (0);

  const {agregarProducto} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    SetAgregarCantidad(cantidad)
    
    //creo objeto con item y cantidad

    const item = {id, nombre ,precio,img};
    agregarProducto(item, cantidad);
  }

  return (
    <body className='bodyItem'>
    <div className='wrapper'>
    <div className='cardProducto'>
      <h3> "{nombre}" </h3>
      <img className='imgProducto' src={img} alt={nombre} />
      <p> $ {precio} </p>
      <p> ID: {id} </p>
      <br />
      <div className='btn fill'>
      <Link to={`/item/${id}`}> Ver Detalles </Link>
      </div>
      <div className='button-wrapper'>
      {
        agregarCantidad > 20 ? ( <Link to={"/cart"}> Terminar Compra </Link>) : (<ItemCounter inicial={1} stock={stock}
        funcionAgregar={manejadorCantidad}/>)
       }
      </div>
    </div>
    </div>
    </body>
  )
}

export default Item
