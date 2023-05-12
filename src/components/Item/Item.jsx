import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'


// importo carritocontext


const Item = ({id, nombre, precio, img, stock}) => {
  
  





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
      {/* {
        agregarCantidad > 20 ? ( <Link to={"/cart"}> Terminar Compra </Link>) : (<ItemCounter inicial={1} stock={stock}
        funcionAgregar={manejadorCantidad}/>)
       } */}
      </div>
    </div>
    </div>
    </body>
  )
}

export default Item
