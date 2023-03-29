import React from 'react'
import './CardWidget.css'

const CardWidget = () => {
    let imgCarro = 'https://images.vexels.com/media/users/3/141186/isolated/preview/431ad815c9a8402ebdf354c82923c2a5-carrito-de-compras-6.png'
  return (
    <div>
      <img className='imgCarro' src= {imgCarro} alt="imagen carrito" />
      <strong> 3 </strong>
    </div>
  )
}

export default CardWidget

