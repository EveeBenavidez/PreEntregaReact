import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
import ItemCounter from '../ItemCounter/ItemCounter'


const Item = ({id, nombre, precio, img}) => {
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
       <ItemCounter/>
      </div>
    </div>
    </div>
    </body>
  )
}

export default Item
